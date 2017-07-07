'use strict';

const IndexModel = require('../models/index');
const fs = require('fs');
let count = 0;

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

        fs.stat('/tmp/world', (err, stats) => {
            //For every 100 request throw an uncaught exception
            if (++count % 100 === 0) {
                //undef is not defned. Throws an uncaugh exception here.
                stats.abc = undef;
            }

            res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        });

    });

};
