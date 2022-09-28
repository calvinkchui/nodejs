
/*
https://github.com/winstonjs/winston
*/

module.exports = {
   test: function() {
    console.log("winston.test()")

    // 1
    const winston = require('winston');

    // 2
    const logger = winston.createLogger({
      transports: [
         new winston.transports.Console()
      ]
    });

    // 3 file
    const logConfiguration = {
        'transports': [
            new winston.transports.File({
                filename: './output/winston.log'
            })
        ]
    };
    const fileLogger = winston.createLogger(logConfiguration);

/* Case 1 - without transports 
[winston] Attempt to write logs with no transports {"level":"info","message":"Hello distributed log files!"}
*/    
   winston.log('info', 'Hello distributed log files!');

/* Case 2 - Console
{"message":"Hello again distributed logs","level":"info"}
*/   
   logger.info('Hello again distributed logs');


/* Case 3 - File
{"message":"Hello again distributed logs","level":"info"}
*/   

  fileLogger.info('Hello - file log');

   console.log("winston.test() end")
   }
}
