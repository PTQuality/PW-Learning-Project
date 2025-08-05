// your task:
// Build a simple event registration system for applications
//
// Requirements:
// 1. Create enum EventType with three values:
//    - LOGIN
//    - LOGOUT
//    - ERROR
//
// 2. Create class EventRegistry that:
//    - stores registered events in 'events' field as object with arrays
//    - handles any data (type any) as event content
//
// 3. Add method register(type: string, payload: any) that:
//    - adds entry to event list of given type
//    - if it's first event of given type - create array
//
// 4. Add method logAll() that:
//    - returns array of strings with information about all events
//    - each line should have format: [TYPE] { ... }, where {...} is event data in JSON format

//
// Goal: Practice working with objects, enums, strings, arrays and data output
//
// Test data:
// Register in order:
// { type: EventType.LOGIN, payload: { userId: "abc123" } }
// { type: EventType.LOGOUT, payload: { userId: "abc123", reason: "timeout" } }
// { type: EventType.ERROR, payload: { code: 404, message: "Not Found" } }
//
// Expected logging output:
// [LOGIN] {"userId":"abc123"}
// [LOGOUT] {"userId":"abc123","reason":"timeout"}
// [ERROR] {"code":404,"message":"Not Found"}
//
// To test your solution in terminal, run:
// npm run bonus37

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

enum EventType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  ERROR = "ERROR",
}

class EventRegistry {
  private events: { [key: string]: any[] };
  constructor() {
    this.events = {};
  }
  register(type: string, payload: any) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(payload);
  }
  logAll() {
    let log = "";
    for (let eventType in EventType)
      for (let event of this.events[eventType]) {
        log += `[${eventType}] ${JSON.stringify(event)}\n`;
      }
    return log;
  }
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const registry = new EventRegistry();

registry.register(EventType.LOGIN, { userId: "abc123" });
registry.register(EventType.LOGOUT, { userId: "abc123", reason: "timeout" });
registry.register(EventType.ERROR, { code: 404, message: "Not Found" });

console.log("All events:");
console.log(registry.logAll());

export {};
