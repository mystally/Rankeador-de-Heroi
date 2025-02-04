function rank(victory, defeat){
    let victoryBalance = victory - defeat;
    let level;
    if (victoryBalance <= 10){
        level = "Iron";
    } else if(victoryBalance >= 11 && victoryBalance <=20){
        level = "Bronze";
    } else if(victoryBalance >= 21 && victoryBalance <=50){
        level = "Silver";    
    } else if(victoryBalance >= 51 && victoryBalance <=80){
        level = "Gold"; 
    } else if(victoryBalance >= 81 && victoryBalance <=90){
        level = "Diamond"; 
    } else if(victoryBalance >= 91 && victoryBalance <=100){
        level = "Legendary"; 
    } else if(victoryBalance >= 101){
        level = "Imortal";
    } 
    return `The Hero has a balance of ${victoryBalance} and is at the level of ${level}`;
}

console.log(rank(200,23));