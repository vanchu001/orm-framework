#!/usr/bin/env node
const opts = require('opts');
const path = require('path');
const fs = require('fs');
const Purger = require('./purger');
const DatabaseExecutor = require('./executor/database');

opts.parse(
    [
        { 
            short       : 'r',
            long        : 'router',
            description : 'router目录',
            value       : true,
            required    : true, 
        },
    ],
    [
        { name : 'module', required: true },
    ], true);

const routerDir = path.resolve(opts.get('router'));
const purger = new Purger(routerDir, opts.args()[0]);
const executor = new DatabaseExecutor();

executor.exec(purger.exec()).catch(err => {
    console.error(err.stack);
    process.exit(-1);
});