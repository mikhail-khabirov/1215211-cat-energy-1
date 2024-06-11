const toggleButton = document.querySelector('.example__toggle-button');
const range = document.querySelector('.example__picture-wrapper');
const leftImage = document.querySelector('.example__image--before');
const rightImage = document.querySelector('.example__image--after');


toggleButton.onmousedown = function (e) {
  e.preventDefault();
  let shiftX = e.clientX - toggleButton.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);


  function onMouseMove(e) {
    let newLeft = e.clientX - shiftX - range.getBoundingClientRect().left;
    let newRight = e.clientX - shiftX - range.getBoundingClientRect().right;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newRight > 0) {
      newRight = 0;
    }


    let rightEdge = range.offsetWidth - toggleButton.offsetWidth;
    let leftEdge = toggleButton.offsetWidth - range.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    if (newRight < leftEdge) {
      newRight = leftEdge;
    }



    toggleButton.style.left = newLeft + 'px';
    toggleButton.style.right = newRight + 'px';

    leftImage.style.width = (newLeft + 4) + 'px';
    rightImage.style.width = (-newRight + 4) + 'px';


    if (window.innerWidth >= 1440) {

      if (newRight < -528) {
        rightImage.style.width = 528 + 'px';
        range.style.width = 528 + 'px';
      }
    }


  }

  function onMouseUp() {
    document.removeEventListener('moseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
}
