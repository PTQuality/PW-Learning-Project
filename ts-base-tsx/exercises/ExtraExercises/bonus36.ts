// your task:
// Create a simple but extensible logging system that allows recording and filtering events
//
// Requirements:
// 1. Create class Logger that:
//    - accepts source name (e.g. "AuthService") in constructor
//    - provides methods log(), warn(), error()
//    - each method adds entry to internal history with type, date, message
//
// 2. Each log entry should have structure:
//    {
//      source: string;
//      level: "log" | "warn" | "error";
//      message: string;
//      timestamp: number;
//    }
//
// 3. Add method getHistory() that returns complete log history
//
// 4. Add method filterByLevel(level: string) that returns only logs of given level
//
// Goal: Understanding class construction, data management and filtering with methods
//
// Test data:
// const logger = new Logger("TestRunner");
// logger.log("Test started");
// logger.warn("Missing test case");
// logger.error("Unhandled exception");
// console.log(logger.getHistory());
// console.log(logger.filterByLevel("warn"));
//
// Expected output:
// Array of logs, e.g.:
// [
//   { source: "TestRunner", level: "log", message: "Test started", timestamp: 1699981234567 },
//   { source: "TestRunner", level: "warn", message: "Missing test case", timestamp: 1699981240000 },
//   { source: "TestRunner", level: "error", message: "Unhandled exception", timestamp: 1699981249000 }
// ]
//
// To test your solution in terminal, run:
// npm run bonus36

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

interface LogEntry {
  source: string;
  level: "log" | "warn" | "error";
  date: number;
  message: string;
}

enum Level {
  Log = "log",
  Warn = "warn",
  Error = "error",
}

class Logger {
  authService;
  logHistory: LogEntry[];
  constructor(authService: string) {
    this.authService = authService;
    this.logHistory = [];
  }
  private logPreparator(level: Level, message: string): LogEntry {
    return {
      source: this.authService,
      level: level,
      date: Date.now(),
      message: message,
    };
  }
  log(message: string) {
    this.logHistory.push(this.logPreparator(Level.Log, message));
  }
  warn(message: string) {
    this.logHistory.push(this.logPreparator(Level.Warn, message));
  }
  error(message: string) {
    this.logHistory.push(this.logPreparator(Level.Error, message));
  }

  getHistory() {
    return this.logHistory;
  }

  filterByLevel(level: string) {
    return this.logHistory.filter(log => log.level === level);
  }
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const logger = new Logger("TestRunner");
logger.log("Test started");
logger.warn("Missing test case");
logger.error("Unhandled exception");

console.log("Complete history:");
console.log(logger.getHistory());

console.log("\nWarnings only:");
console.log(logger.filterByLevel("warn"));

console.log("\nErrors only:");
console.log(logger.filterByLevel("error"));

export {};
