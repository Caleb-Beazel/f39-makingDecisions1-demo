let jonSnowAttack = 25
let jamieLannisterAttack = 35

if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has a better attack than Jamie")
} else if(jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie has a better attack than Jon")
} else {
    console.log("Jon and Jamie have the same attack")
}

let jonSnowHealth = 100
let jonSnowDefense = 0 

if(jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon has been slain.")
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log("Jon's health is down to " + jonSnowHealth)
}

let coinLandsHeads = false

if(coinLandsHeads === true){
    console.log("The fight continues")
} else {
    console.log("Jon is allowed to run away")
}

// for(let i = 0; i < 5; i++){
    
//     if(jonSnowHealth <= 0){
//         console.log("Jon snow is slain");
//     } else {
//         jonSnowHealth -= jamieLannisterAttack
//         console.log(`Jon's health is ${jonSnowHealth}`)

//     }   
// }

while(jonSnowHealth > 0){
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon's health is ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log("Jon has been slain.")
    }
    
}