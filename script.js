const advices = {
    health:['health1','health2','health3'],
    money:['money1','money2','money3'] ,
    love: ['love1','love2','love3','love4','love5'] 
}

const randomNumber = num =>{
    return Math.floor(Math.random()*num);
}

let adviceToReturn=[];

for(let advice in advices){
    const randomIndex =randomNumber(advices[advice].length);   
    switch(advice){
        case 'health':
        adviceToReturn.push(`For health: ${advices[advice][randomIndex]}`);
        break;

        case 'money':
        adviceToReturn.push(`The advice on money is: ${advices[advice][randomIndex]}`);
        break;

        case 'love':
        adviceToReturn.push(`The advice for love is: ${advices[advice][randomIndex]}`);
        break;
    }
}

console.log(`Advice of the day: \n${adviceToReturn.join('\n')}`);


