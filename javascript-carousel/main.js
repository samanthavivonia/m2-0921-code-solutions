var $img = document.querySelector('img');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $arrowRight = document.querySelector('.fa-chevron-right');
var $dot1 = document.querySelector('.dot1');
var $dot2 = document.querySelector('.dot2');
var $dot3 = document.querySelector('.dot3');
var $dot4 = document.querySelector('.dot4');
var $dot5 = document.querySelector('.dot5');

var autoCarousel = setInterval(goForward, 3000);

function dotStyleChange(dot) {
  $dot1.classList.remove('fas');
  $dot1.classList.add('far');
  $dot2.classList.remove('fas');
  $dot2.classList.add('far');
  $dot3.classList.remove('fas');
  $dot3.classList.add('far');
  $dot4.classList.remove('fas');
  $dot4.classList.add('far');
  $dot5.classList.remove('fas');
  $dot5.classList.add('far');
  dot.classList.remove('far')
  dot.classList.add('fas');
}

function goForward() {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/004.png');
    dotStyleChange($dot2);
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/007.png');
    dotStyleChange($dot3);
  } else if ($img.getAttribute('src') === 'images/007.png') {
    $img.setAttribute('src', 'images/025.png');
    dotStyleChange($dot4);
  } else if ($img.getAttribute('src') === 'images/025.png') {
    $img.setAttribute('src', 'images/039.png');
    dotStyleChange($dot5);
  } else if ($img.getAttribute('src') === 'images/039.png') {
    $img.setAttribute('src', 'images/001.png');
    dotStyleChange($dot1);
  }
}

function goBack() {
  if ($img.getAttribute('src') === 'images/001.png') {
    $img.setAttribute('src', 'images/039.png');
    dotStyleChange($dot5);
  } else if ($img.getAttribute('src') === 'images/039.png') {
    $img.setAttribute('src', 'images/025.png');
    dotStyleChange($dot4);
  } else if ($img.getAttribute('src') === 'images/025.png') {
    $img.setAttribute('src', 'images/007.png');
    dotStyleChange($dot3);
  } else if ($img.getAttribute('src') === 'images/007.png') {
    $img.setAttribute('src', 'images/004.png');
    dotStyleChange($dot2);
  } else if ($img.getAttribute('src') === 'images/004.png') {
    $img.setAttribute('src', 'images/001.png');
    dotStyleChange($dot1);
  }
}

$arrowLeft.addEventListener('click', function() {
  clearInterval(autoCarousel);
  goBack();
  autoCarousel = setInterval(goForward, 3000);
});
$arrowRight.addEventListener('click', function() {
  clearInterval(autoCarousel);
  goForward();
  autoCarousel = setInterval(goForward, 3000);
});

$dot1.addEventListener('click', function() {
  clearInterval(autoCarousel);
  $img.setAttribute('src', 'images/001.png')
  dotStyleChange($dot1);
  autoCarousel = setInterval(goForward, 3000);
});

$dot2.addEventListener('click', function () {
  clearInterval(autoCarousel);
  $img.setAttribute('src', 'images/004.png')
  dotStyleChange($dot2);
  autoCarousel = setInterval(goForward, 3000);
});

$dot3.addEventListener('click', function () {
  clearInterval(autoCarousel);
  $img.setAttribute('src', 'images/007.png')
  dotStyleChange($dot3);
  autoCarousel = setInterval(goForward, 3000);
});

$dot4.addEventListener('click', function () {
  clearInterval(autoCarousel);
  $img.setAttribute('src', 'images/025.png')
  dotStyleChange($dot4);
  autoCarousel = setInterval(goForward, 3000);
});

$dot5.addEventListener('click', function () {
  clearInterval(autoCarousel);
  $img.setAttribute('src', 'images/039.png')
  dotStyleChange($dot5);
  autoCarousel = setInterval(goForward, 3000);
});
