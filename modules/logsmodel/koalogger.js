var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path')
var rfs = require('rotating-file-stream') // version 2.x

var logDirectory = __dirname + '/log';

// ensure log directory exists 
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

var accessLogStream = fs.createWriteStream(
    path.join(logDirectory, 'test1.log'), { flags: 'a' }
);

var test = morgan('combined', { stream: accessLogStream });

module.exports = {
    info(){
        test;
    }
}