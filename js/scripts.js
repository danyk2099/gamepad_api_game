/**
 * Created by danielkopel on 02/05/2017.
 */

let myGamepadApi = (function(){
    let characterPosition_H = 0;
    let characterPosition_V = 0;
    let gameCharacters = [];
    let isGameLoopRunning = false;

    const mainContainer = document.querySelector('body');
    const mainContainerWidth = mainContainer.offsetWidth;

    function appendCharacterBox() {
        const characterBox = document.createElement('div');
        characterBox.classList.add('character-box');
        characterBox.id = `game_character_${gameCharacters.length + 1}`;
        gameCharacters.push(characterBox);

        mainContainer.appendChild(characterBox);
    }

    function appendLaser(){
        const laserInitTopPosition = characterPosition_V + 25;
        const laserInitLeftPosition = characterPosition_H + gameCharacters[0].offsetWidth + 10;

        console.log(`T: ${laserInitTopPosition}, L: ${laserInitLeftPosition}`);
        const laserBox = document.createElement('div');
        laserBox.classList.add('laser-box');
        laserBox.style.top = `${laserInitTopPosition}px`;
        laserBox.style.left = `${laserInitLeftPosition}px`;

        mainContainer.appendChild(laserBox);

        return laserBox;
    }

    function moveLaser(currentLaser){
        currentLaser.classList.add('move-trans');
    }

    function fireLaser(){
        console.log('Firing Pinkie Laser!!');
        const ponyLaser = appendLaser();
        moveLaser(ponyLaser);
    }

    function setEvents(){
        window.addEventListener('gamepadconnected', (evt) => {
            console.log('CONNECTED EVENT: ', evt);
            console.log('Gamepad Index: ', evt.gamepad.index);
            console.log('Gamepad ID: ', evt.gamepad.id);

            //alert('Gamepad Connected! Cherio!');

            if(!isGameLoopRunning){
                isGameLoopRunning = true;
                gameLoop();
            }
        });

        window.addEventListener('gamepaddisconnected', () => {
            cancelAnimationFrame(loopFrame);

            //alert('Gamepad Disconnected!!');
        });
    }

    let loopFrame;

    function gameLoop(){
        if(!navigator.getGamepads()[0]){
            return;
        }

        console.log('Looping!!');

        if(navigator.getGamepads()[0].buttons[15].pressed){
            characterPosition_H++;
        }
        else if(navigator.getGamepads()[0].buttons[14].pressed){
            characterPosition_H--;
        }

        if(navigator.getGamepads()[0].buttons[12].pressed){
            characterPosition_V--;
        }
        else if(navigator.getGamepads()[0].buttons[13].pressed){
            characterPosition_V++;
        }

        if(navigator.getGamepads()[0].buttons[0].pressed){
            console.log('Pinky Laser!');
            gameCharacters[0].classList.add('fire');
            fireLaser();
        }
        else{
            gameCharacters[0].classList.remove('fire');
        }

        gameCharacters[0].style.left = `${characterPosition_H}px`;
        gameCharacters[0].style.top = `${characterPosition_V}px`;

        loopFrame = requestAnimationFrame(gameLoop);
    }

    function init(){
        appendCharacterBox();
        setEvents();
        gameLoop();
    }

    return {
        init
    };
}());

myGamepadApi.init();