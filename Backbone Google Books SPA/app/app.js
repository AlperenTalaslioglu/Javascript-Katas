var Router = Backbone.Router.extend({

    routes: {
        '': 'home',
        'books/:searchkeys/:startIndex/:maxResults': 'searchBooks',
        'book/:index/:bookName': 'showBookDetail'
    },

    initialize: function () {
        $('#loading-indicator').hide();
    },

    home: function () {
        this.homeView = new HomeView();
        $('#content').html(this.homeView.render());
        $('#error-box').hide(); // Initially remove error box
        $('#search-box').val(''); // Reset search box
    },

    searchBooks: function (searchKeys, startIndex, maxResults) {
        this.booksListView = new BooksListView();
        $('#content').html(this.booksListView.render());
        this.booksListView.searchBooks(searchKeys, startIndex, maxResults);
    },

    showBookDetail: function (index) {
        this.bookDetailView = new BookDetailView();
        $('#content').html(this.bookDetailView.render());
        this.bookDetailView.showBook(this.booksListView.getBooks().models[index].attributes);
    }
});

template.loadTemplates(['home', 'books-list', 'book-detail'], function () {
    window.app = new Router();
    Backbone.history.start();
});