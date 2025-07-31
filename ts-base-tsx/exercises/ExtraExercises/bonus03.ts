// Your task:
// 1. Create callback types:
//    - LogSuccessCallback: accepts (message: string) => void
//    - LogErrorCallback: accepts (error: string) => void
//    - CleanupCallback: accepts () => void
//
// 2. Create enum LogLevel with values: INFO, WARNING, ERROR
//
// 3. Create function createLogger that:
//    - accepts logLevel: LogLevel as parameter
//    - returns an object with:
//      * log: function that accepts (message: string, onSuccess: LogSuccessCallback, onError: LogErrorCallback)
//      * cleanup: CleanupCallback function
//
// 4. The log function should:
//    - Format message as: "[LEVEL] YYYY-MM-DD HH:MM:SS - message"
//    - Use setTimeout(2000) to simulate writing to file
//    - 70% chance of success -> call onSuccess with "Log saved successfully"
//    - 30% chance of failure -> call onError with "Failed to save log"
//
// 5. The cleanup function should:
//    - Clear any pending timeouts
//    - Log "Logger cleanup completed" to console
//
// 6. Test your solution:
//    - Create INFO logger
//    - Log a message "Application started"
//    - Create ERROR logger
//    - Log a message "Database connection failed"
//    - Call cleanup after 3 seconds

// Expected output (example):
// [INFO] 2024-01-28 14:30:15 - Application started
// Log saved successfully
// [ERROR] 2024-01-28 14:30:15 - Database connection failed
// Failed to save log
// Logger cleanup completed

//// TODO: Place your solution here

type LogSuccessCallback = (message: string) => void;
type LogErrorCallback = (error: string) => void;
type CleanupCallback = () => void;

enum LogLevel {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

const onLogSuccess = (message: string): void => {
  console.log(message);
};
const onLogError = (message: string): void => {
  console.log(message);
};

function createLogger(logLevel: LogLevel) {
  let pendingTimeout: any = null;
  return {
    log(
      message: string,
      onSuccess: LogSuccessCallback,
      onError: LogErrorCallback
    ) {
      const timestamp = new Date().toLocaleString("sv-SE");
      console.log(`[${logLevel}] ${timestamp} - ${message}`);
      pendingTimeout = setTimeout(() => {
        if (Math.random() > 0.3) {
          onSuccess("Log saved successfully");
        } else {
          onError("Failed to save log");
        }
      }, 2000);
    },
    cleanup() {
      if (pendingTimeout) {
        clearTimeout(pendingTimeout);
        console.log("Logger cleanup completed");
      }
    },
  };
}
//// Test your solution:
const infoLogger = createLogger(LogLevel.INFO);
const errorLogger = createLogger(LogLevel.ERROR);

infoLogger.log("Application started", onLogSuccess, onLogError);
errorLogger.log("Database connection failed", onLogSuccess, onLogError);

setTimeout(() => {
  infoLogger.cleanup();
  errorLogger.cleanup();
}, 3000);
