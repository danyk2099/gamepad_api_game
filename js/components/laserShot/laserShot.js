/**
 * Created by danielkopel on 17/05/17.
 */
let laserShot = (function(){
  function createLaserBeam(horizontalPoint, verticalPoint, characterWidth){
    const laserInitTopPosition = verticalPoint + 25;
    const laserInitLeftPosition = horizontalPoint + characterWidth + 10;

    console.log(`T: ${laserInitTopPosition}, L: ${laserInitLeftPosition}`);
    const laserBox = document.createElement('div');
    laserBox.classList.add('laser-box');
    laserBox.style.top = `${laserInitTopPosition}px`;
    laserBox.style.left = `${laserInitLeftPosition}px`;

    return laserBox;
  }

  function moveLaser(currentLaser){
    currentLaser.classList.add('move-trans');
  }

  function fireLaser(){
    console.log('Firing Pinkie Laser!!');
    const ponyLaser = createLaserBeam();
    document.querySelector('body').appendChild(ponyLaser);

    moveLaser(ponyLaser);
  }

  return {
    fireLaser
  };
}());