var template = {

    templates: {},

    loadTemplates: function (names, callback) {

        var self = this;

        var loadTemplate = function (index) {
            var name = names[index];
            $.get('app/templates/' + name + '.html', function (data) {
                self.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        };
        loadTemplate(0);
    },

    get: function (name) {
        return this.templates[name];
    },

    throwError: function (message) {
        window.app.navigate('', true);
        $('#error-box').show();
        $('#error-message').html(message);
    },

    encodeSeoUrl: function (url) {
        // make the url lowercase
        var encodedUrl = url.toString().toLowerCase();

        // replace & with and
        encodedUrl = encodedUrl.split(/\&+/).join("-and-")

        // remove invalid characters
        encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");

        // remove duplicates
        encodedUrl = encodedUrl.split(/-+/).join("-");

        // trim leading & trailing characters
        encodedUrl = encodedUrl.trim('-');

        return encodedUrl;
    }
    
};
