window.BookDetailView = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(template.get('book-detail'));
    },

    events: {},

    showBook : function (book) {
        $('.book__title').html(book.title);
        $('.book__author').html(book.authors.join());
        $('.book__img').attr('src',book.imageLinks.thumbnail.replace('zoom=1','zoom=2'));
        $('.book__publisher').html(book.publisher);
        $('.book__pub-date').html(book.publishedDate);
        $('.book__page-count').html(book.pageCount + ' pages');
        $('.book__description').html(book.description);
        $('.book__preview a').attr('href',book.previewLink);
    },

    render: function () {
        this.$el.html(this.template());
        return this.el;
    }

});