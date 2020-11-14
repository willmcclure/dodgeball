// CODE PLAN
 
//  Create two classes, one to represent a person and one a dodgeball player
 
//  Transfer a person to being a dodgeball player then add that new player to an array of players. Allow users to select button to trasnfer that new dodgeball player to either red or blue team.
 
// TESTING
 
//  1) A new player object was created when a person is pulled from the arrOfPeople
//  2) The new player was added to the listOfPlayers[]
//  3) A new team member was created for both the red and blue teams

const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  // Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.
  class DodgeBallPlayer {
    constructor(name, id, age){
        this.name = name
        this.id = id
        this.age = age
        this.canThrowBall = true
        this.canDodgeBall = true
        this.hasPaid = true
        this.isHealthy = true
        this.yearsExperience = age - 10
    }
  }

  // Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor

  class Teammate extends DodgeBallPlayer {
    constructor(name, id, yearsExperience, skillSet, teamColor){
        super(name, id, yearsExperience)
        this.skillSet = skillSet
        this.teamColor = teamColor
    }
  }
  
  // take the ul for potential teammates while mapping the array. Create new li items for the new person. Creates a clickable button and adds the new person to the list

  const listPeopleChoices = () => {
    // take the ul list 'people' for potential teammates
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + "'s age is " + person.age + ". This person's special skill is " + person.skillSet))
      listElement.append(li)
    })
  }
  
  // Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
  const makePlayer = (person) => {
    console.log(`${person.name} was turned into a player`)
    // create new player
    let newPlayer = new DodgeBallPlayer (person.name, person.id, person.age)
    listOfPlayers.push(newPlayer)
    
    // let players = document.getElementById('players')

    // create button for each new player
    let li = document.createElement("li")

    // blue button
    let blueButton = document.createElement("button") 
    blueButton.className = "blue"
    blueButton.innerText = "Blue Team"
    blueButton.addEventListener("click", function() {addToTeam(newPlayer, "blue", this)});


    // red button
    let redButton = document.createElement("button")
    redButton.className = "red"
    redButton.innerText = "Red Team"
    redButton.addEventListener("click", function() {addToTeam(newPlayer, "red", this)});

    // add above people to HTML
    
    li.appendChild(blueButton);
    li.appendChild(redButton);
    li.appendChild(document.createTextNode(newPlayer.name + " has " + newPlayer.yearsExperience + "years experience playing dodgeball."))
    players.appendChild(li);
  }

  const addToTeam = (dodgeBallPlayer, color) => {

    console.log(`${dodgeBallPlayer.name} was added to ${color}'s team`)
      // new variables needed 
      let team
      let newTeammate

      // find out which team button was selected
      if (color === "blue") {
        newTeammate = new Teammate(dodgeBallPlayer.name)
        blueTeam.push(newTeammate)
        team = document.getElementById("blue")
      } 
      else {
        newTeammate = new Teammate(dodgeBallPlayer.name)
        redTeam.push(newTeammate)
        team = document.getElementById("red")
      }
    
      // create new li for new teammate
      let li = document.createElement('li')
      // add team with right color
      li.appendChild(document.createTextNode(newTeammate.name,))
      team.appendChild(li)
  }