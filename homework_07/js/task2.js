let startPlay = confirm('Do u want to play a game?');
if(startPlay) {
    let limit = 6;
    let userPrize = 0;
    let startPrize = 10;
    let gamePrize = startPrize;
    do {
        startPlay = false;
        let winNumber = Math.floor(Math.random() * limit);
        console.log(winNumber);
        let userChoice;
        let win = false;
        for(let i = 3; i > 0; i--) {
            userChoice = prompt(`Choose a number in range [0: ${limit - 1}]
                                 Attempts left: ${i}
                                 totalPrize: ${userPrize}$
                                 Possible prize on current attempt: ${startPrize}$`);
            if(!userChoice) {
                startPrize = Math.floor(startPrize / 2);
                continue;
            } else userChoice = +userChoice;

            if(userChoice == winNumber) {
                userPrize += startPrize;
                win = true;
                break;
            }
            startPrize = Math.floor(startPrize / 2);
        }
        if(win) {
            startPlay = confirm(`Do u want to continue a game`);
            if(startPlay) {
                limit = (limit * 2) - 1;
                gamePrize *= 3;
                startPrize = gamePrize;
            } else {
                console.log(`Thank u for a game. Your prize is ${userPrize}$`);
                startPlay = confirm(`Do u want to play again?`);
            }
        } else {
            console.log(`Thank u for a game. Your prize is ${userPrize}$ `);
            startPlay = confirm(`Do u want to play again?`);
        }
    } while (startPlay);
} else console.log(`U did not become a millionaire`);
