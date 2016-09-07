window.HomeView = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(template.get('home'));
    },

    events: {'click button': 'search'},

    search: function () {
        if($('#search-box').val()) {
            window.app.navigate("/books/" + template.encodeSeoUrl($('#search-box').val()) + '/0/10', true);
        }else{
            template.throwError('Enter Some Keywords!')
        }
    },

    render: function () {
        this.$el.html(this.template());
        return this.el;
    }
});