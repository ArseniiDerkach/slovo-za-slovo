var $letters = new Array();
function fillLetters() {
  for (var i = 0; i < 25; i++) {
    $letters[i]=$('#'+i).val();
  };
};
function clearLetters() {
  for (var i = 0; i < 25; i++) {
    $letters[i]='';
  };
}
function getCoordinates(cell) {
  $x = cell % 5;
  $y = Math.floor(cell/5);
  return [$x,$y];
}
function getIdFromCoordinates(c) {
  return c[0]+c[1]*5;
}
function getLetterById(id) {
  return $('#'+id).val();
}
/* Ищет всех соседей по горизонтали, вертикали и диагонали  */
function findNearest(cell) {
  $coordinates = getCoordinates(cell);
  x = $coordinates[0];
  y = $coordinates[1];
  $nearestCoordinates = [
    [x-1,y-1],
    [x,y-1],
    [x+1,y-1],
    [x-1,y],
    [x+1,y],
    [x-1,y+1],
    [x,y+1],
    [x+1,y+1]
  ];
  var $near = new Array();
  for (var j = 0; j < $nearestCoordinates.length; j++) {
    x1 = $nearestCoordinates[j][0];
    y1 = $nearestCoordinates[j][1];
    $currentId = getIdFromCoordinates($nearestCoordinates[j]);

    if ( !(x1<0) && !(x1>4) && !(y1<0) && !(y1>4) ) {
      $near.push(getLetterById($currentId));
    };
  };
  return $near;
};

// function twoLetters(id) {
//
// }

// function findAllPaths(length) {
//   var $words = new Array();
//
//   for (var i = 1; i < length; i++) {
//     for (var j = 0; j < 24; i++) {
//
//     }
//   }
//
//   }
