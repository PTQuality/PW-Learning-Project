// your task:
// Build a system that tracks player results and creates rankings
//
// Requirements:
// 1. Create enum Level with values: Beginner, Intermediate, Advanced
//
// 2. Create interface PlayerData with fields:
//    - nickname: string
//    - score: number
//    - level: Level
//
// 3. Create class Player that implements the interface, stores data and has method:
//    - getScoreSummary() returning: "nickname (Level) - score pkt"
//
// 4. Create class Scoreboard that:
//    - Stores players
//    - Has method addPlayer(player: Player)
//    - Has method getTopPlayers(limit: number) that returns list of nicknames of players with highest scores
//
// 5. In Scoreboard class add method getAverageScore(level: Level) that calculates average score for given level
//
// Goal: Reinforcing knowledge about classes, enums, class methods, data aggregation and filtering
//
// Test data:
// new Player({ nickname: "Ala", score: 120, level: Level.Beginner })
// new Player({ nickname: "Zenek", score: 200, level: Level.Intermediate })
// new Player({ nickname: "Ola", score: 160, level: Level.Beginner })
// new Player({ nickname: "Tomek", score: 300, level: Level.Advanced })
// new Player({ nickname: "Ania", score: 100, level: Level.Beginner })
//
// For getTopPlayers(3) → ["Tomek", "Zenek", "Ola"]
// For getAverageScore(Level.Beginner) → (120+160+100)/3 = 126.67
//
// To test your solution in terminal, run:
// npm run bonus32

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// your code here 👇

enum Level {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

interface PlayerData {
  nickname: string;
  score: number;
  level: Level;
}

class Player implements PlayerData {
  readonly nickname: string;
  readonly score: number;
  readonly level: Level;

  constructor(playerData: PlayerData) {
    this.nickname = playerData.nickname;
    this.score = playerData.score;
    this.level = playerData.level;
  }

  getScoreSummary(): string {
    return `${this.nickname} (${this.level}) - ${this.score} pkt`;
  }
}

class Scoreboard {
  private players: Player[];

  constructor() {
    this.players = [];
  }
  addPlayer(player: Player): void {
    this.players.push(player);
  }
  getTopPlayers(limit: number): string[] {
    function compareNumbers(playerA: Player, playerB: Player) {
      return playerB.score - playerA.score;
    }
    return [...this.players]
      .sort(compareNumbers)
      .map(({ nickname }) => nickname)
      .slice(0, limit);
  }
  getAverageScore(level: Level): number {
    const array = this.players.filter(player => player.level === level);
    return array.reduce((sum, player) => sum + player.score, 0) / array.length;
  }
}

// ------------------------TEST CASES - DON'T TOUCH---------------------------

const scoreboard = new Scoreboard();

const player1 = new Player({
  nickname: "Ala",
  score: 120,
  level: Level.Beginner,
});
const player2 = new Player({
  nickname: "Zenek",
  score: 200,
  level: Level.Intermediate,
});
const player3 = new Player({
  nickname: "Ola",
  score: 160,
  level: Level.Beginner,
});
const player4 = new Player({
  nickname: "Tomek",
  score: 300,
  level: Level.Advanced,
});
const player5 = new Player({
  nickname: "Ania",
  score: 100,
  level: Level.Beginner,
});

scoreboard.addPlayer(player1);
scoreboard.addPlayer(player2);
scoreboard.addPlayer(player3);
scoreboard.addPlayer(player4);
scoreboard.addPlayer(player5);

console.log("Player summaries:");
console.log(player1.getScoreSummary()); // "Ala (Beginner) - 120 pkt"
console.log(player4.getScoreSummary()); // "Tomek (Advanced) - 300 pkt"

console.log("\nTop 3 players:");
console.log(scoreboard.getTopPlayers(3)); // ["Tomek", "Zenek", "Ola"]

console.log("\nAverage scores:");
console.log(`Beginner average: ${scoreboard.getAverageScore(Level.Beginner)}`); // 126.67
console.log(
  `Intermediate average: ${scoreboard.getAverageScore(Level.Intermediate)}`
); // 200
console.log(`Advanced average: ${scoreboard.getAverageScore(Level.Advanced)}`); // 300

export {};
