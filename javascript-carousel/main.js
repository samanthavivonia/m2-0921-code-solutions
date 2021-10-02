var $img = document.querySelector('img');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $arrowRight = document.querySelector('.fa-chevron-right');
var $dot1 = document.querySelector('.dot1');
var $dot2 = document.querySelector('.dot2');
var $dot3 = document.querySelector('.dot3');
var $dot4 = document.querySelector('.dot4');
var $dot5 = document.querySelector('.dot5');

function goForward() {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/004.png');
    $dot1.classList.remove('fas');
    $dot1.classList.add('far');
    $dot2.classList.remove('far');
    $dot2.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/007.png');
    $dot2.classList.remove('fas');
    $dot2.classList.add('far');
    $dot3.classList.remove('far');
    $dot3.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/007.png') {
    $img.setAttribute('src', 'images/025.png');
    $dot3.classList.remove('fas');
    $dot3.classList.add('far');
    $dot4.classList.remove('far');
    $dot4.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/025.png') {
    $img.setAttribute('src', 'images/039.png');
    $dot4.classList.remove('fas');
    $dot4.classList.add('far');
    $dot5.classList.remove('far');
    $dot5.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/039.png') {
    $img.setAttribute('src', 'images/001.png');
    $dot5.classList.remove('fas');
    $dot5.classList.add('far');
    $dot1.classList.remove('far');
    $dot1.classList.add('fas');
  }
}

function goBack() {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/039.png');
    $dot1.classList.remove('fas');
    $dot1.classList.add('far');
    $dot5.classList.remove('far');
    $dot5.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/039.png') {
    $img.setAttribute('src', 'images/025.png');
    $dot5.classList.remove('fas');
    $dot5.classList.add('far');
    $dot4.classList.remove('far');
    $dot4.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/025.png') {
    $img.setAttribute('src', 'images/007.png');
    $dot4.classList.remove('fas');
    $dot4.classList.add('far');
    $dot3.classList.remove('far');
    $dot3.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/007.png') {
    $img.setAttribute('src', 'images/004.png');
    $dot3.classList.remove('fas');
    $dot3.classList.add('far');
    $dot2.classList.remove('far');
    $dot2.classList.add('fas');
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/001.png');
    $dot2.classList.remove('fas');
    $dot2.classList.add('far');
    $dot1.classList.remove('far');
    $dot1.classList.add('fas');
  }
}

$arrowLeft.addEventListener('click', goBack);
$arrowRight.addEventListener('click', goForward);

setInterval(goForward, 3000);
