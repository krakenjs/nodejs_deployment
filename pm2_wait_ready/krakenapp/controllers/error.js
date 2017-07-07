'use strict';

const fs = require('fs');

module.exports = function (router) {

    router.get('/', function (req, res) {

        fs.stat('/tmp/world', (err, stats) => {
            //undef is not defned. Throws an uncaugh exception here.
            stats.abc = undef;
            res.status(200).send('200 from Error page');
        });

    });

};
