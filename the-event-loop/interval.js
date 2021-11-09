var count = 3;
var blastoff = setInterval(function () {
  if (count !== 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(blastoff);
    count = 3;
  }
}, 1000);
