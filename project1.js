alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alpha.split('');
var guess;
var hang;
count = 4;
imgCount = 1;

for (var i=0;i < alphabet.length; i++) {
  $('.buttons').append('<button>'+alphabet[i]+'</button>');

}
// 
//  function reset() {
//   lettersClicked = "";
// }
//
// $("button.letter1").on("click", function(){
//   console.log("Geeeeeez");
// })
// function to add letters(clicked) to input field text box
// function game (g) {
//   location.reload();
//
//   var letterClicked = "";
//   var letterGuessed = "";
//
//
// if (letterClicked.indexof(g) != -1) {
//   console.log(g);
//     return;
//   }
//
//
//
// $("button .#letter1").on("click", function(){
//   console.log("Geeeeeez");
// })
//
// lettersClicked += g;
// $("button .letter1").on("click", function(){
//   // console.log("letterGuessed");
//   // // $("#button").pop(letterGuessed)
//   // letterClicked.push('dom')
//   // $(".letters").append("dom");
//   console.log("letterGuessed");
//
// })
//   // buttons();
//   // play();
//   // $("button.letterA").on("click", function(){
//   //   $(".letterA");
//   //   console.log("You clicked Letter A");
//   // })
