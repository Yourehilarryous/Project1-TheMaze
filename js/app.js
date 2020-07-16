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
        { enemyCategorey: "slime", name: "Henry", enemyType: "Small", greeting: "\"I will consume you and you will NOT be daijob\"" },
        { enemyCategorey: "Mutated Rat", name: "Gary", enemyType: "Small", greeting: "\"(Uncomforatable chittering)\"" }, 
        { enemyCategorey: "Decaying Wolf", name: "Dread", enemyType: "Mobile", greeting: "\"(Low blood-curdling growl)\"" }, 
        { enemyCategorey: "Skeletal Solider", name: "Francis", enemyType: "Mobile", greeting: "\"(bones clattering)\""},
        { enemyCategorey: "Stone Golem", name: "Hagrid", enemyType: "Stationary", greeting: "\"You're not Harry!\"" }, 
        { enemyCategorey: "Troll", name: "Za'thuk, the Flesh Renderer", enemyType: "Impassible", greeting: "\"Do you have something for me, mon?\""} // will need to set parameters for passing this enemy
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
let narative = document.querySelector(".display-screen p")

button1.addEventListener("click", () => {
    startMaze("Dagger")
})
button2.addEventListener("click", () => {
    startMaze("Cloak")
})

function startMaze (target) {
    player.utilityItem = target

    console.log(player.utilityItem)
    
    document.querySelector("h2").style.opacity = 0;
    narative.innerHTML = "24px" // does not work, will need to figure out how change the font size
    narative.innerHTML = "So you chose the " + target + "? Not my first choice, but sure. Now for the fun part! I mean... It's time fo you to begin the challenge (make sure to read this in a cool ominus voice)" 

    // Change both icons above the selection buttons

    button1.innerHTML = "Go left"
    button2.innerHTML= "Go right"
    
    firstRoom();
}

mazeEnemy = "";

const randomEnemy = () => {
    for (let i = 0; i < enemy.length; i++) {
        const swapEnemy = Math.floor(Math.random() * enemy.length)
        const currentEnemy = enemy[i]
        const theSwap = enemy[swapEnemy]
        enemy[i] = theSwap
        enemy[swapEnemy] = currentEnemy
    }
}



function firstRoom () {
    randomEnemy(enemy);

    narative.innerHTML = "Good job! Oh wait, looks like you ran into " + enemy[0].name + "!" + "<br />" + "<br />" + enemy[0].name + ": " + enemy[0].greeting

    
    
    // Display the enemy found in this room

    // Change the page elements to reflect the new room
}

// Create a function that will determine whether or not the player can pass based on the utility item.



