// Assignment feetToMile start 

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var myFeet = feetToMile(500000);
console.log(myFeet);

// Assignment feetToMile end



// Assignment woodCalculator start

function woodCalculator(chair,table,bed) {
   var chairCount = chair * 1;
   var tableCount = table * 3;
   var bedCount = bed * 5;
   var total = chairCount + tableCount + bedCount;
   return total;
}

var totalWood = woodCalculator(10,5,2);
console.log(totalWood);

// Assignment woodCalculator end


// Assignment brickCalculator start
function brickCalculator(floor) {
    var totalHeight = 0;
    var totalBricks = 0;
  for(var i = 1; i <= floor; i++) {
    if(i <= 10) {
      totalHeight = totalHeight + 15;
    }
    if(i > 10 && i <= 20) {
      totalHeight = totalHeight + 12;
    }
    if(i > 20 && i <= 45) {
      totalHeight = totalHeight + 10;
    }
  }
  totalBricks = totalHeight * 1000;
  return totalBricks;
}
console.log(brickCalculator(17));
console.log(brickCalculator(24));


// Assignment brickCalculator end


// Assignment tinyFriend start

function tinyFriend(name) {
  var arr = name;
  arr = ["shaown", "shahadat", "opu", "kiron", "anup"];
  return arr.reduce((a, b) => a.length <= b.length ? a : b);
}

console.log(tinyFriend());

// Assignment tinyFriend end







