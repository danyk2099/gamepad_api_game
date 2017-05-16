/**
 * Created by danielkopel on 17/05/17.
 */
let powerBubble = (function(){

  function createPowerBubble(){
    let powerBubble = document.createElement('div');
    powerBubble.classList.add('power-bubble');

    return powerBubble;
  }


  function inflateBubble(bubbleElem, multiplier = 0, finalSize = 0) {
    const squareDimension = multiplier * finalSize;

    if(bubbleElem.offsetWidth >= finalSize){
      bubbleElem.classList.add('full-charge');

     // return;
    }

   // bubbleElem.classList.remove('full-charge');

    bubbleElem.style.width = `${squareDimension}px`;
    bubbleElem.style.height = `${squareDimension}px`;
    bubbleElem.style.margin = `-${squareDimension/2}px`;
  }

  return {
    createPowerBubble,
    inflateBubble
  };
}());