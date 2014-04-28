'use strict';

var exec = require('child_process').exec;
var path = require('path');

function escape(source) {
    return source.replace(/"/g, '\\\"');
}

exports.open = function(target, appName) {

    var opener;

    switch (process.platform) {
        case 'darwin':
            opener = appName ? 'open -a "' + escape(appName) + '"' : 'open';
            break;

        case 'win32':
            opener = appName ? 'start "" "' + escape(appName) + '"' : 'start ""';
            break;
            
        default:
            opener = appName ? escape(appName) : path.join(__dirname, '../vendor/xdg-open');
            break;

    }

    if (process.env.SUDO_USER) {
        opener = 'sudo -u ' + process.env.SUDO_USER + ' ' + opener;
    }

    return exec(opener + ' "' + escape(target) + '"');

};