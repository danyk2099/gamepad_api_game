/**
 * Created by danielkopel on 02/05/2017.
 */

let myGamepadApi = (function(){
  let characterPosition_H = 0;
  let characterPosition_V = 0;
  let gameCharacters = [];
  let isGameLoopRunning = false;
  let pinkyBubbleElem;

  const mainContainer = document.querySelector('body');
  const mainContainerWidth = mainContainer.offsetWidth;

  function appendCharacterBox() {
    const characterBox = document.createElement('div');
    characterBox.classList.add('character-box');
    characterBox.id = `game_character_${gameCharacters.length + 1}`;
    gameCharacters.push(characterBox);

    pinkyBubbleElem = powerBubble.createPowerBubble();
    characterBox.appendChild(pinkyBubbleElem);

    mainContainer.appendChild(characterBox);
  }


  function expandBubble(sizeThreshold, domElem, animInterval){
    const animationInterval = setInterval(function(){
      let currentWidth = parseInt(domElem.style.width);

      if(parseInt(currentWidth) >= sizeThreshold){
        clearInterval(animationInterval);
      }

      domElem.style.width = (currentWidth + 10) + 'px';
      domElem.style.height = domElem.style.width;

    }, animInterval);
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

    gameCharacters[0].style.left = `${characterPosition_H}px`;

    if(navigator.getGamepads()[0].buttons[12].pressed){
      characterPosition_V--;
    }
    else if(navigator.getGamepads()[0].buttons[13].pressed){
      characterPosition_V++;
    }

    gameCharacters[0].style.top = `${characterPosition_V}px`;

    if(navigator.getGamepads()[0].buttons[0].pressed){
      console.log('Pinky Laser!');
      gameCharacters[0].classList.add('fire');
      laserShot.fireLaser(characterPosition_H, characterPosition_V, gameCharacters[0].offsetWidth);
    }
    else{
      gameCharacters[0].classList.remove('fire');
    }


    if(navigator.getGamepads()[0].buttons[6].pressed){
      console.log('Pinky Bubble!', navigator.getGamepads()[0].buttons[6].value);

      powerBubble.inflateBubble(pinkyBubbleElem, navigator.getGamepads()[0].buttons[6].value, 200);
    }
    else{
      powerBubble.inflateBubble(pinkyBubbleElem);
    }

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