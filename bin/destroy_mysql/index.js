#!/usr/bin/env node
const opts = require('opts');
const path = require('path');
const fs = require('fs');
const Destroyer = require('./destroyer');
const Executor = require('./executor');

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
const destroyer = new Destroyer(routerDir, opts.args()[0]);
const executor = new Executor();

executor.exec(destroyer.exec()).catch(err => {
    console.error(err.stack);
    process.exit(-1);
});