window.BooksListView = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(template.get('books-list'));
        this.books = new BooksCollection();
        this.book = new Book();
    },

    events: {'change #result-limit': 'updateResultsByPageLimit'},

    updateResultsByPageLimit: function () {
        var currentUrl = Backbone.history.fragment.split('/');
        this.redirectPage(currentUrl[1], 0, $('#result-limit').val());
    },

    redirectPage: function (searchKeys, startIndex, maxResults) {
        window.app.navigate('#books/' + searchKeys + '/' + startIndex + '/' + maxResults, true);
    },

    searchBooks: function (searchKeys, startIndex, maxResults) {
        $('#loading-indicator').show(); // loading indicator starts
        $('.search').hide();

        searchKeys = searchKeys.split('-').join(' '); // prepare keys to query
        $('#result-limit').val(maxResults); // set page limit

        var self = this;
        var url = this.prepareQueryURL(searchKeys, startIndex, maxResults);

        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function (result) {

                if (result.totalItems && result.items && result.totalItems > 0) { // results found
                    _.each(result.items, function (book) {
                        self.books.add(new Book(book.volumeInfo));
                    });
                    self.drawTable();
                    self.createPagination(startIndex, result.totalItems, maxResults);
                } else if (result.error) {
                    template.throwError(result.error.message);
                } else { // No results found!
                    template.throwError("No Results Found!");
                }

                $('.search').show();
                $('#loading-indicator').hide(); // loading indicator ends
            },
            error: function (err) {
                template.throwError(err.message);
            }
        });
    },

    prepareQueryURL: function (searchKeys, startIndex, maxResults) {
        var url = 'https://www.googleapis.com/books/v1/volumes';
        url += '?q=' + searchKeys;
        url += '&startIndex=' + startIndex;
        url += '&maxResults=' + maxResults;
        return url;
    },

    drawTable: function () {
        this.books.models.forEach(function (e, i) {
            var row = '<tr class="search__results-table-body-row">';
            row += '<td>';
            row += '<a class="search__result-book-link" href="#book/' + i + '/' + template.encodeSeoUrl(e.attributes.title) + '">';
            row += (e.attributes.title ? e.attributes.title : '-') + '</a>';
            row += '</td>';
            row += '<td>' + (e.attributes.subtitle ? e.attributes.subtitle : '-') + '</td>';
            row += '<td>' + (e.attributes.authors ? e.attributes.authors.join() : '-') + '</td>';
            row += '<td>' + (e.attributes.publishedDate ? e.attributes.publishedDate : '-') + '</td>';
            $('#searchBooksListView').append(row);
        });
    },


    createPagination: function (current, totalResults, maxResults) {
        var currentIndex = current / maxResults;

        if (currentIndex < (totalResults / maxResults)) {

            for (var i = 0; i < 5; i++) {
                $('#pagination').append('<li><a href="' + this.createPaginationUrl(currentIndex) + '">' + ++currentIndex + '</a></li>');
            }
            // Pagination arrows
            $('#pagination').prepend('<li><a>&laquo;</a></li>');
            $('#pagination').append('<li><a>&raquo;</a></li>');
        }
    },


    createPaginationUrl: function (index) {
        var url = Backbone.history.fragment.split('/');
        url[2] = index * parseInt(url[3]);
        return '#' + url.join('/');
    },

    getBooks: function () {
        return this.books;
    },

    render: function () {
        this.$el.html(this.template());
        return this.el;
    }
});