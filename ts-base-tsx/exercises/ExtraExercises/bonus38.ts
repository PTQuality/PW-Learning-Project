// your task:
// Build a system that stores history of user data changes and allows reverting to previous versions
//
// Requirements:
// 1. Create object type to be stored with fields:
//    - id: object identifier (string)
//    - name: any name (string)
//    - data: contains other fields like email, role etc.
//
// 2. Create class VersionedStore that:
//    - allows saving object version
//    - returns save history for specific id
//    - allows restoring chosen version
//
// 3. Limit history to maximum 5 versions per id
//
// 4. Add method getLatest() that returns last saved version
//
// Example usage:
// type UserProfile = {
//   email: string;
//   role: "admin" | "user";
// };
//
// const store = new VersionedStore();
// store.save({ id: "u1", name: "Adam", data: { email: "adam@a.com", role: "user" } });
// store.save({ id: "u1", name: "Adam K", data: { email: "adam.k@a.com", role: "user" } });
// store.save({ id: "u1", name: "Adam K", data: { email: "admin@a.com", role: "admin" } });
// store.save({ id: "u1", name: "Adam Admin", data: { email: "admin@company.com", role: "admin" } });
// store.save({ id: "u1", name: "Adam A", data: { email: "a@a.com", role: "admin" } });
//
// console.log(store.getHistory("u1").length); // 5
// store.save({ id: "u1", name: "Adam Z", data: { email: "z@z.com", role: "admin" } });
// console.log(store.getHistory("u1").length); // still 5 (oldest removed)
//
// const oldest = store.restore("u1", 0);
// console.log(oldest?.name); // "Adam K" (oldest preserved)
// const latest = store.getLatest("u1");
// console.log(latest?.name); // "Adam Z"
//
// Goal: Practice creating versioning systems, data handling, array operations and length limiting
//
// To test your solution in terminal, run:
// npm run bonus38

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

type Entity = { id: string; name: string; data: UserProfile };

class VersionedStore {
  private readonly MAX_VERSIONS = 5;
  history: { [key: string]: Entity[] } = {};
  constructor() {}
  save(userToSave: Entity) {
    if (!this.history[userToSave.id]) {
      this.history[userToSave.id] = [];
    }
    if (this.history[userToSave.id]) {
      this.history[userToSave.id].push(userToSave);
    }
    if (this.history[userToSave.id].length > this.MAX_VERSIONS) {
      this.history[userToSave.id].splice(0, 1);
    }
  }
  getHistory(userId: string): Entity[] {
    return this.history[userId] || [];
  }
  restore(userId: string, version: number) {
    if (
      !this.history[userId] ||
      version >= this.history[userId].length ||
      version < 0
    ) {
      throw new Error(`Invalid version ${version} for user ${userId}`);
    }
    return this.history[userId][version];
  }
  getLatest(userId: string) {
    const history = this.history[userId];
    return history && history.length > 0
      ? history[history.length - 1]
      : undefined;
  }
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

type UserProfile = {
  email: string;
  role: "admin" | "user";
};

const store = new VersionedStore();

// Add versions for user "u1"
store.save({
  id: "u1",
  name: "Adam",
  data: { email: "adam@a.com", role: "user" },
});
store.save({
  id: "u1",
  name: "Adam K",
  data: { email: "adam.k@a.com", role: "user" },
});
store.save({
  id: "u1",
  name: "Adam K",
  data: { email: "admin@a.com", role: "admin" },
});
store.save({
  id: "u1",
  name: "Adam Admin",
  data: { email: "admin@company.com", role: "admin" },
});
store.save({
  id: "u1",
  name: "Adam A",
  data: { email: "a@a.com", role: "admin" },
});

console.log("History length after 5 saves:", store.getHistory("u1").length); // 5

// Add 6th version - should remove oldest
store.save({
  id: "u1",
  name: "Adam Z",
  data: { email: "z@z.com", role: "admin" },
});

console.log("History length after 6th save:", store.getHistory("u1").length); // still 5

// Test restore and getLatest
const oldest = store.restore("u1", 0);
console.log("Oldest preserved version:", oldest?.name); // "Adam K"

const latest = store.getLatest("u1");
console.log("Latest version:", latest?.name); // "Adam Z"

// Test with different user
store.save({
  id: "u2",
  name: "Bob",
  data: { email: "bob@b.com", role: "user" },
});
console.log("User u2 history length:", store.getHistory("u2").length); // 1

export {};
