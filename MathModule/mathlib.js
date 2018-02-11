module.exports = function (){
  return {
    add: function(num1, num2) { 
         return num1+num2; 
    },
    multiply: function(num1, num2) {
         return num1*num2;
    },
    square: function(num) {
         return num*num; 
    },
    random: function(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;

//  function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;}
// 
    

// // 0 -> 10
//   //console.log(Math.floor(Math.random() * 11));

// // 1 -> 10
//   // console.log(Math.floor(Math.random() * 10) + 1);

// // 5 -> 20
// //console.log(Math.floor(Math.random() * 16) + 5);

// // -10 -> (-2)
// console.log(Math.floor(Math.random() * 9) - 10);

    }
  }
};