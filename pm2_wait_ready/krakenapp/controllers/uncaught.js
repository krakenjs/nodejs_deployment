'use strict';

const IndexModel = require('../models/index');
const fs = require('fs');
const failrate = process.env.FAIL_RATE || 5;

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

        fs.stat('/tmp/world', (err, stats) => {

            //If the random number is less than failrate percentage, throw an uncaught exception
            if (Math.floor(Math.random() * 100) <=  failrate) {
                //undef is not defned. Throws an uncaugh exception here.
                stats.abc = undef;
            }

            res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        });

    });

};
