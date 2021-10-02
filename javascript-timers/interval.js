var $h1 = document.querySelector('h1');

function changeText() {
  if ($h1.textContent === '4') {
    $h1.textContent = '3';
  } else if ($h1.textContent === '3') {
    $h1.textContent = '2';
  } else if ($h1.textContent === '2') {
    $h1.textContent = '1';
  } else if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}

var interval = setInterval(changeText, 1000);
interval();
clearInterval(interval);
