// Objects to create

    let player = {
        utilityItem: ""
    }

    const enemy = [    
        { 
            enemyCategorey: "slime", 
            name: "Henry", 
            enemyType: "Small",  
            greeting: "\"Everything is NOT daijoubu\"",
            image: "images/Slime.png"
        },
        { 
            enemyCategorey: "Mutated Rat", 
            name: "Gary", 
            enemyType: "Small",  
            greeting: "\"(Uncomforatable chittering)\"",
            image: "images/MutatedRat.png"
        }, 
        { 
            enemyCategorey: "Demon Bat", 
            name: "Rick", 
            enemyType: "Small", 
            greeting: "\"No, I'm not a pickle\"",
            image: "images/DemonBat.png"
        },
        { 
            enemyCategorey: "Zombie", 
            name: "Carl", 
            enemyType: "Mobile",  
            greeting: "\"I wanted to be in Resident Evil, but this was the only gig I could get.\"",
            image: "images/Zombie.png" 
        }, 
        { 
            enemyCategorey: "Grave Robber", 
            name: "Poncho", 
            enemyType: "Mobile", 
            greeting: "\"My phone died and now I can't click the next room function\"",
            image: "images/GraveRobber.png"
        },
        { 
            enemyCategorey: "Skeletal Solider", 
            name: "Francis", 
            enemyType: "Mobile",  
            greeting: "\"(bones clattering)\"",
            image: "images/SkeletalSoldier.png"
        },
        { 
            enemyCategorey: "Stone Golem", 
            name: "Hagrid", 
            enemyType: "Stationary", 
            greeting: "\"You're a wiz... You're not Harry!\"",
            image: "images/Golem.png" 
        }, 
        { 
            enemyCategorey: "Cursed Armor", 
            name: "Jarod", 
            enemyType: "Stationary", 
            greeting: "\"Dude stole my legs. Can you believe that?\"",
            image: "images/CursedArmor.png"
        },
        { 
            enemyCategorey: "Troll", 
            name: "Za'thuk, the Flesh Renderer", 
            enemyType: "Impassible",  
            greeting: "\"*Lunges at your head*\"",
            image: "images/Troll.png"
        } // will need to set parameters for passing this enemy
    ]

    //will need to create additional enemies 

    let option1 = document.querySelector(".option1")
    let option2 = document.querySelector(".option2")
    const button1 = document.querySelector("#btn1")
    const button2 = document.querySelector("#btn2")
    let narrative = document.querySelector(".flavor-text p")
    let enemyImage = document.querySelector(".enemy-img")
    let buttonImage = document.querySelector(".button-img")
    let buttonImage2 = document.querySelector(".button-img2")
    let mazeEnemy = ""
    let roomCount = 0
    const hideButton = document.querySelector(".button-container")
    let roomButton1 = document.createElement("button")
    let roombutton2 = document.createElement("button")
    const end = new Audio("Media/death.mp3")
    const endClear = new Audio("Media/victory.mp3")

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





function checkGameDagger() {
    if (roomCount === 0){
        startMaze("Dagger")
        console.log(roomCount)
    } else if (roomCount === 1){
        firstRoom()
        console.log(roomCount)
    } else if (roomCount === 2 && daggerPreReqs()) {
        secondRoom()
        console.log(roomCount)
    } else if (roomCount === 3 && daggerPreReqs()){
        thirdRoom()
        console.log(roomCount)
    } else if (roomCount === 4 && daggerPreReqs()){
        fourthRoom()
        console.log(roomCount)    
    } else if (roomCount === 5 && daggerPreReqs()){
        mazeClear()
    } else {
        gameOver()
        
    }
    roomCount++
}

function checkGameCloak() {
    if (roomCount === 0){
        startMaze("Cloak")
        console.log(roomCount)
    } else if (roomCount === 1){
        firstRoom()
        console.log(roomCount)
    } else if (roomCount === 2 && cloakPreReqs()) {
        secondRoom()
        console.log(roomCount)
    } else if (roomCount === 3 && cloakPreReqs()){
        thirdRoom()
        console.log(roomCount)
    } else if (roomCount === 4 && cloakPreReqs()){
        fourthRoom()
        console.log(roomCount)
    } else if (roomCount === 5 && cloakPreReqs()){
        mazeClear()
    } else {
        gameOver()
        
    }
    roomCount++
}

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
        return true
    } else if (mazeEnemy.enemyType === "Mobile"){
        return false
    } else if (mazeEnemy.enemyType === "Stationary"){
        return true
    } else {
        return false
    }
}

button1.addEventListener("click", checkGameDagger)
button2.addEventListener("click", checkGameCloak)
enemyImage.classList.toggle("hidden")



function startMaze (target) {
    document.querySelector("h2").classList.toggle("hidden")
    player.utilityItem = target

    console.log(player.utilityItem)
    
    narrative.innerHTML = "24px" // does not work, will need to figure out how change the font size
    narrative.innerHTML = "So you chose the " + target + "? Not my first choice, but sure. Now for the fun part!"+ "<br />" + "<br />" + "I mean... It's time fo you to enter the maze" + "<br />" + "<br />" + "(I said that in a cool and ominus voice by the way)"

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
        const randomEnemy = enemy[j]
        enemy[j] = enemy[i]
        enemy[i] = randomEnemy
    }
}


function firstRoom () {
    enemyImage.classList.toggle("hidden")

    randomize();

    mazeEnemy = enemy.shift()
    console.log(mazeEnemy)
    console.log(player.utilityItem)

    narrative.innerHTML = "Here we go. Oh wait, looks like you ran into a " + mazeEnemy.enemyCategorey + "!" + "<br />" + "<br />" + mazeEnemy.name + ": " + mazeEnemy.greeting
    enemyImage.setAttribute("src", mazeEnemy.image)
    buttonImage.setAttribute("src", "images/Doors.png")
    buttonImage2.setAttribute("src", "images/Doors.png")
}

// Create a function that will determine whether or not the player can pass based on the utility item.



// // create game over function


function secondRoom () {
    randomize();

    mazeEnemy = enemy.shift()
    enemyImage.setAttribute("src", mazeEnemy.image)


    console.log(mazeEnemy)
    console.log(player.utilityItem)

    narrative.innerHTML = "Well <strong> THAT </strong> was close. Looks likes you were able to get past him. Pretty sure you've got another problem though." + "<br />" + "<br />" + mazeEnemy.name + ": "+ mazeEnemy.greeting

    if (player.utilityItem === "Dagger"){
        daggerPreReqs()
    } else if (player.utilityItem === "Cloak"){
        cloakPreReqs()
    }
}




function thirdRoom (){ 
    randomize();

    mazeEnemy = enemy.shift()
    enemyImage.setAttribute("src", mazeEnemy.image)

    console.log(mazeEnemy)

    narrative.innerHTML = "Looks like you got past another one, you're pretty good at this." + "<br />" + "<br />" + "You can probably guess what happens next though." + "<br />" + "<br />" + mazeEnemy.name + ": " + mazeEnemy.greeting

    roomButton1.innerText = "Keep going"
    document.querySelector("div.flavor-text").appendChild(roomButton1)
    roomButton1.setAttribute("class", "confirmation")

    roombutton2.innerText = "Lay Down and wait for certain doom"
    document.querySelector("div.flavor-text").appendChild(roombutton2)
    roombutton2.setAttribute("class", "confirmation")

    roomButton1.onclick = function () {
        document.querySelector(".confirmation-message").innerText = "Let's do this then!"

        roomButton1.remove()
        roombutton2.remove()
    }
    roombutton2.onclick = function () {
        
        gameOver()

    }

    if (player.utilityItem === "Dagger"){
        daggerPreReqs()
    } else if (player.utilityItem === "Cloak"){
        cloakPreReqs()
    }
}

function fourthRoom() { 
    document.querySelector(".confirmation-message").innerText = ""
    

    randomize();

    mazeEnemy = enemy.shift()
    enemyImage.setAttribute("src", mazeEnemy.image)

    console.log(mazeEnemy)

    narrative.innerHTML = "I'm pretty sure you're almost out, Is that the light at the end of the tunnel?! Oh, its just " + mazeEnemy.name + "<br />" + "<br />" + mazeEnemy.name + ": " + mazeEnemy.greeting
}

function mazeClear() {
    document.querySelector("h2").classList.toggle("hidden")
    document.querySelector("h2").innerText = "Cleared!"
    enemyImage.setAttribute("src", "images/trophy.png")
    document.querySelector(".confirmation-message").innerText = ""

    narrative.innerHTML = "Well would you look at that, you actually made it out. " + "<br />" + "<br />" + "And no, you can't take the trophy with you."

    endClear.play()
    roomButton1.innerText = "Restart"
    document.querySelector("div.flavor-text").appendChild(roomButton1)
    roomButton1.setAttribute("class", "confirmation")
    roomButton1.onclick = function () {
        window.location.reload(false)
    }

    roombutton2.remove()

    document.querySelector("#btn1").classList.toggle("hidden")
    document.querySelector("#btn2").classList.toggle("hidden")
    document.querySelector(".button-img").classList.toggle("hidden")
    document.querySelector(".button-img2").classList.toggle("hidden")

}

function gameOver(){
    document.querySelector("h2").classList.toggle("hidden")
    enemyImage.setAttribute("src", "images/gameover.png")
    enemyImage.style.height = "75px"
    enemyImage.style.width = "75px"


    end.play()
    document.querySelector(".confirmation-message").innerText = ""
    document.querySelector("h2").innerText = "Game Over!"
    narrative.innerHTML = "Oof. Welp, can't say I didn't see that coming"

    roomButton1.innerText = "Restart"
    document.querySelector("div.flavor-text").appendChild(roomButton1)
    roomButton1.setAttribute("class", "confirmation")
    roomButton1.onclick = function () {
        window.location.reload(false)
    }

    roombutton2.remove()

    document.querySelector("#btn1").classList.toggle("hidden")
    document.querySelector("#btn2").classList.toggle("hidden")
    document.querySelector(".button-img").classList.toggle("hidden")
    document.querySelector(".button-img2").classList.toggle("hidden")
}

// add conditionals for naration depending on the enemy present.