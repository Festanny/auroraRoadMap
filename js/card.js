// first block
let $img = $('.card'),
    $img2 = $('.card2'),
    $img3 = $('.card3');

function move(x, y) {
  $img.addClass('card-active');

  let xser = $img.offset().left + $img.width() / 2;
  let yser = $img.offset().top + $img.height() / 2;

  let otnX = x - xser;
  let otnY = y - yser;

  let raznX = otnX / $img.width() * 100 * 2;
  let raznY = otnY / $img.height() * 100 * 2;

  let trX = raznY / 100 * 6 * -1;
  let trY = raznX / 100 * 6;

  trX = Math.round(trX * 1000) / 1000;
  trY = Math.round(trY * 1000) / 1000;

  $img.css('transform', 'rotateY(' + trY + 'deg) rotateX(' + trX + 'deg) rotateZ(0deg)');
}

function resetTransform() {
  $img.removeClass('card-active');
  $img.css('transform', 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)');
}

$img.mousemove(function(e) {
    move(e.pageX, e.pageY);
  })
  .mouseout(function(e) {
    resetTransform();
  });

// second block
function move2(x2, y2) {
  $img2.addClass('card-active');
  let xser2 = $img2.offset().left + $img2.width() / 2;
  let yser2 = $img2.offset().top + $img2.height() / 2;
  let otnX2 = x2 - xser2;
  let otnY2 = y2 - yser2;
  let raznX2 = otnX2 / $img2.width() * 100 * 2;
  let raznY2 = otnY2 / $img2.height() * 100 * 2;
  let trX2 = raznY2 / 100 * 6 * -1;
  let trY2 = raznX2 / 100 * 6;
  trX2 = Math.round(trX2 * 1000) / 1000;
  trY2 = Math.round(trY2 * 1000) / 1000;
  $img2.css('transform', 'rotateY(' + trY2 + 'deg) rotateX(' + trX2 + 'deg) rotateZ(0deg)');
}
function resetTransform2() {
  $img2.removeClass('card-active');
  $img2.css('transform', 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)');
}
$img2.mousemove(function(e) {
    move2(e.pageX, e.pageY);
  })
  .mouseout(function(e) {
    resetTransform2();
  });

// download block
function move3(x3, y3) {
  $img3.addClass('card-active');
  let xser3 = $img3.offset().left + $img3.width() / 2;
  let yser3 = $img3.offset().top + $img3.height() / 2;
  let otnX3 = x3 - xser3;
  let otnY3 = y3 - yser3;
  let raznX3 = otnX3 / $img3.width() * 100 * 2;
  let raznY3 = otnY3 / $img3.height() * 100 * 2;
  let trX3 = raznY3 / 100 * 6 * -1;
  let trY3 = raznX3 / 100 * 6;
  trX3 = Math.round(trX3 * 1000) / 1000;
  trY3 = Math.round(trY3 * 1000) / 1000;
  $img3.css('transform', 'rotateY(' + trY3 + 'deg) rotateX(' + trX3 + 'deg) rotateZ(0deg)');
}
function resetTransform3() {
  $img3.removeClass('card-active');
  $img3.css('transform', 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)');
}
$img3.mousemove(function(e) {
    move3(e.pageX, e.pageY);
  })
  .mouseout(function(e) {
    resetTransform3();
  });