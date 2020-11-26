/**
 * 日志模块
 */

const winston = require("winston")
const dailyrotatefile = require("winston-daily-rotate-file")

const { combine, timestamp, label, printf } = winston.format

const log_transport = new dailyrotatefile({
    filename: 'log-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: '14d'
})

const error_transport = new dailyrotatefile({
    filename: 'error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: '14d'
})

const logFormat = printf(({ level, message, label, timestamp }) => {
    return JSON.stringify({
        time: timestamp,
        message: message
    })
})

const log_logger = winston.createLogger({
    format: combine(
        label({ label: 'info' }),
        timestamp(),
        logFormat
    ),
    transports: [
        log_transport
    ]
})

const errorFormat = printf(({ level, message, label, timestamp }) => {
    return JSON.stringify({
        time: timestamp,
        message: message
    })
})

const error_logger = winston.createLogger({
    format: combine(
        label({ label: 'error' }),
        timestamp(),
        errorFormat
    ),
    transports: [
        error_transport
    ]
})


module.exports =  {
    /**
     * 信息日志
     */
    info(message) {
        log_logger.info(message)
    },
    /**
     * 报错日志
     */
    error(message) {
        error_logger.error(message)
    }
}