// Your task:
// 1. Create a class named `Player`.
//    - It should have two properties: `name` (string) and `position` (string).
// 2. Create a class named `Coach`.
//    - It should have two properties: `name` (string) and `experience` (number of years).
// 3. Create a class named `Team`.
//    - It should have three properties: `name` (string), `players` (array), and `coach` (object of type Coach).
//    - Add a method `getPlayersByPosition(position)` that returns all players matching the given position.
// 4. Create a team named "Orły".
// 5. Add the coach "Jan Kowalski" with 10 years of experience.
// 6. Add the following players:
//    - Piotr (bramkarz)
//    - Marek (obrońca)
//    - Adam (obrońca)
//    - Tomasz (napastnik)
//    - Kamil (napastnik)
// 7. Use `console.log()` to print:
//    - The team's name and coach's name with experience
//    - All players
//    - All players who play as "obrońca"

// To test your solution in terminal, run:
// npm run l01e16

//// TODO:
// here place your solution:

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class Coach {
  constructor(name, yearsOfExperience) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
  }
}

class Team {
  constructor(name, players, coach) {
    this.name = name;
    this.players = players;
    this.coach = coach;
  }
  getPlayersByPosition(position) {
    const arrayPlayersSortedByPosition = this.players.filter(
      p => p.position === position
    );
    return (
      positionLabels[position] +
      ": " +
      arrayPlayersSortedByPosition.map(player => `${player.name}`).join(", ")
    );
  }

  displayInformationsAboutTeam() {
    console.log(`Drużyna: ${this.name}`);
    console.log(
      `Trener: ${this.coach.name}, doświadczenie: ${this.coach.yearsOfExperience} lat`
    );

    const playersInArray = this.players.map(
      player => `${player.name} ` + `(${player.position})`
    );
    console.log(`Zawodnicy: ${playersInArray.join(", ")}`);
  }
}
const listOfPlayers = [
  new Player("Piotr", "bramkarz"),
  new Player("Marek", "obrońca"),
  new Player("Adam", "obrońca"),
  new Player("Tomasz", "napastnik"),
  new Player("Kamil", "napastnik"),
];

const positionLabels = {
  bramkarz: "Bramkarze",
  obrońca: "Obrońcy",
  napastnik: "Napastnicy",
};

const coach = new Coach("Jan Kowalski", 10);
const orlyTeam = new Team("Orły", listOfPlayers, coach);

orlyTeam.displayInformationsAboutTeam();
const filterAndDisplayPlayersByPosition =
  orlyTeam.getPlayersByPosition("obrońca");
console.log(filterAndDisplayPlayersByPosition);

//// DO NOT MODIFY CODE BELOW! (Example expected output):
// Drużyna: Orły
// Trener: Jan Kowalski, doświadczenie: 10 lat
// Zawodnicy: Piotr (bramkarz), Marek (obrońca), Adam (obrońca), Tomasz (napastnik), Kamil (napastnik)
// Obrońcy: Marek, Adam

//// TIPS – use if you get stuck:
/// Tip 1 – Use .filter() to extract players by position
/// Tip 2 – Use .map() and .join() to format lists as a string
/// Tip 3 – Use string interpolation in console.log()
