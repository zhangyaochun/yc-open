'use strict';

var open = require('./lib/open');


function callback(error) {
    if (error != null) {
        console.error(error);
    }
}

function prepareOpts(opts) {
    opts = opts || {};

    opts.delay = opts.delay || 0;

    //i insist use Canary for test
    opts.app = opts.app || "Google Chrome Canary";

    return opts;

}


module.exports = function(opts) {
    
    opts = prepareOpts(opts);

    var url = opts.url || opts.path;
    var app = opts.app;

    open(url, app, callback);
};
