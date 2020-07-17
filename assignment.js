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









