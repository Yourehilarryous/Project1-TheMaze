// Objects to create

    let player = {
        utilityItem: ""
    }

    let mazeRoom = {
        // enemyPresent: (True of false)
            //will need a function to determine. Will be used to add non-enemy related rooms.
        // enemyType: (pulls one of the enemy object)
        // enemyStatus: (this is will indicate the state of the enemy (i.e sleeping, active, injured))
        // enemyName: (will be based on the name found in the object)
    }

    const enemy = [    
        { enemyCategorey: "slime", name: "Henry", enemyType: "Small", sorted: true, greeting: "\"I will consume you and you will NOT be daijob\"" },
        { enemyCategorey: "Mutated Rat", name: "Gary", enemyType: "Small", sorted: true, greeting: "\"(Uncomforatable chittering)\"" }, 
        { enemyCategorey: "Decaying Wolf", name: "Dread", enemyType: "Mobile",sorted: true,  greeting: "\"(Low blood-curdling growl)\"" }, 
        { enemyCategorey: "Skeletal Solider", name: "Francis", enemyType: "Mobile", sorted: true, greeting: "\"(bones clattering)\""},
        { enemyCategorey: "Stone Golem", name: "Hagrid", enemyType: "Stationary", sorted: true,greeting: "\"You're a wiz... You're not Harry!\"" }, 
        { enemyCategorey: "Troll", name: "Za'thuk, the Flesh Renderer", enemyType: "Impassible", sorted: true, greeting: "\"Do you have something for me, mon?\""} // will need to set parameters for passing this enemy
    ]


// Functions
    // Welcome screen
        // Prompt the user with a welcome message 
        // Allow the user to select one of the starting items
        // Move the user to the next room once the item is selected 

    // Diverging path
        // Prompt the user with a choice of two paths
            // Display text when hovering over the optoin

    // If player chooses the first path.  
        // Generate the first room 
        // Display the enemy being encounterd
            // Spawn a random enemy type. 
                // Set a conditional that will only spawn small and medium enemies in the first roomss 
                // The second room will spawn a medium to large enemy.

    //  If the user selects the second path 
        // Generate the second room 
        // Display the enemy being encounterd
            // Spawn a random enemy type. 
                // Set a conditional that will only spawn small and medium enemies in the first roomss 
                // The second room will spawn a medium to large enemy.

let option1 = document.querySelector(".option1")
let option2 = document.querySelector(".option2")
const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")
let narative = document.querySelector(".flavor-text p")
let mazeEnemy = ""
// let randomEnemy = enemy
let gameCount = 0


function checkGameDagger() {
    if (gameCount === 0){
        startMaze("Dagger")
        console.log(gameCount)
    } else if (gameCount === 1){
        firstRoom()
        console.log(gameCount)
    } else if (gameCount === 2 && daggerPreReqs() === true) {
        secondRoom()
        console.log(gameCount)
    } else if (gameCount === 3 && daggerPreReqs() === true){
        //thirdRoom
    } else {
        gameOver()
        return
    }
    gameCount++

}

function checkGameCloak() {
    if (gameCount === 0){
        startMaze("Cloak")
        console.log(gameCount)
    } else if (gameCount === 1){
        firstRoom()
        console.log(gameCount)
    } else if (gameCount === 2 && cloakPreReqs === true) {
        secondRoom()
        console.log(gameCount)
    } else if (gameCount === 3 && cloakPreReqs === true){
        //thirdRoom
    } else {
        gameOver()
        return
    }
    gameCount++
}


button1.addEventListener("click", checkGameDagger)
button2.addEventListener("click", checkGameCloak)





function startMaze (target) {
    player.utilityItem = target

    console.log(player.utilityItem)
    
    document.querySelector("h2").classList.toggle("hidden")
    narative.innerHTML = "24px" // does not work, will need to figure out how change the font size
    narative.innerHTML = "So you chose the " + target + "? Not my first choice, but sure. Now for the fun part!"+ "<br />" + "<br />" + "I mean... It's time fo you to begin the challenge" + "<br />" + "<br />" + "(make sure to read this in a cool ominus voice)" 

    // Change both icons above the selection buttons

    button1.innerHTML = "Go left"
    button2.innerHTML= "Go right"

    // button1.addEventListener("click", () => {
    //     firstRoom();
    // })
    // button2.addEventListener("click", () => {
    //     firstRoom();
    // })

}


const randomize = () => {
    for (let i = enemy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * enemy.length)
        const randomE = enemy[j]
        enemy[j] = enemy[i]
        enemy[i] = randomE
        if(randomE.sorted === true){
            randomE.sorted = false 
        }
    }
}



function firstRoom () {

    randomize();

    mazeEnemy = enemy.shift()
    console.log(mazeEnemy)

    document.querySelector("h2").classList.toggle("hidden")
    narative.innerHTML = "Good job! Oh wait, looks like you ran into " + mazeEnemy.name + "!" + "<br />" + "<br />" + mazeEnemy.name + ": " + mazeEnemy.greeting

    if (player.utilityItem === "Dagger"){
        daggerPreReqs()
    } else if (player.utilityItem === "Cloak"){
        cloakPreReqs()
    }

}

// Create a function that will determine whether or not the player can pass based on the utility item.

function daggerPreReqs() {
    if(mazeEnemy.enemyType === "Small") {
        return true
    } else if (mazeEnemy.enemyType === "Mobile"){
        return true
    } else if (mazeEnemy.enemyType === "Stationary"){
        return false
    } else {
        return false
    }
}



function cloakPreReqs(){
    if(mazeEnemy.enemyType === "Small") {
        secondRoom();
    } else if (mazeEnemy.enemyType === "Mobile"){
        gameOver();
    } else if (mazeEnemy.enemyType === "Stationary"){
        secondRoom();
    } else {
        gameOver();
    }
}

// // create game over function


function secondRoom () {
    document.querySelector("h2").classList.toggle("hidden")

    randomize();

    mazeEnemy = enemy.shift()
    console.log(mazeEnemy)

    narative.innerHTML = "Well <strong> THAT </strong> was close! Looks likes you were able to get past him."

    if (player.utilityItem === "Dagger"){
        daggerPreReqs()
    } else if (player.utilityItem === "Cloak"){
        cloakPreReqs()
    }
}

function gameOver(){
    document.querySelector("h2").classList.toggle("hidden")
    narative.innerHTML = "game over"
    console.log("still works!")
}

// add conditionals for naration depending on the enemy present.