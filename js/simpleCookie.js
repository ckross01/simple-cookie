(function () {
    var SimpleCookie = {};

    SimpleCookie.save = function (data, options) {
        options = options || {};
        options.path = options.path || '/';

        var cookie = [data.key, '=', JSON.stringify(data.value), '; domain=.', window.location.hostname, '; path=', options.path, ';'].join('');
        document.cookie;
    };

    SimpleCookie.get = function (key) {
        return document.cookie.match(new RegExp(key + '=([^;]+)'));
    };

    SimpleCookie.remove = function (key) {
        var cookie = document.cookie.match(new RegExp(key + '=([^;]+)'));
        return cookie;
    };

    SimpleCookie.parse = function (name) {
        var result = this.get(name);
        return result && (result = JSON.parse(result[1]));
    };

    window.SimpleCookie = SimpleCookie;

}).call(this);
