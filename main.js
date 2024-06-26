function playGame(){
    let cpuChoiceNumber = Math.floor(Math.random() * 3) + 1;
    let userChoice = document.getElementById('userChoice').value;
    console.log(userChoice);
    
    let cpuChoice = '';
    switch(cpuChoiceNumber){
        case 1:
            cpuChoice = 'rock';
            break;
        case 2:
            cpuChoice = 'paper';
            break;
        case 3:
            cpuChoice = 'scissors';
            break;
    }

    console.log(cpuChoice);
    
    if(userChoice == cpuChoice){
        console.log('TIE');
        document.getElementById('cpuChoice').innerHTML = `${cpuChoice}`
        document.getElementById('winner').innerHTML = `TIE`
    }else if((userChoice == 'rock' && cpuChoice == 'scissors') || (userChoice == 'scissors' && cpuChoice == 'paper') || (userChoice == 'paper' && cpuChoice == 'rock')){
        console.log('USER WINS');
        document.getElementById('cpuChoice').innerHTML = `${cpuChoice}`
        document.getElementById('winner').innerHTML = `YOU WIN`
    }else{
        console.log('CPU WINS');
        document.getElementById('cpuChoice').innerHTML = `${cpuChoice}`
        document.getElementById('winner').innerHTML = "CPU";
    }
}