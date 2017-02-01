alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alpha.split('');
var guess;
var hang;
count = 4;
imgCount = 1;

for (var i=0;i < alphabet.length; i++) {
  $('.buttons').append('<button>'+alphabet[i]+'</button>');

}
