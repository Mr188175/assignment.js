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



// Assignment brickCalculator end



// Assignment tinyFriend start
 function tinyFriend(name) {
     var lowest = name[0];
     for (var i =0; i < name.length; i++) {
         var currentName = name[i];
         if (currentName < lowest) {
             lowest = currentName;
         }
     }
     return lowest;
 }

 var lowestName = tinyFriend(['shawon', 'shahadat', 'robin', 'anu', 'anup']);
 console.log(lowestName);
// Assignment tinyFriend end





