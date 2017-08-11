AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1_1paVDiTeC',
    Logins: {
      'cognito-idp.us-east-1.amazonaws.com/us-east-1_XXXXXXXXX': JSON.parse(localStorage.getItem('token'))
    }
});


$(document).ready(function(){
  randomQuote();
});


function randomQuote() {
  var Quotation=new Array();
  var Tag=new Array();
  Quotation[0] = '"Talk to me Goose!" - Top Gun';
  Tag[0] = 'Contact and other fun stuff like that below!';
  Quotation[1] = '"I feel the need... The need for speed!" - Top Gun';
  Tag[1] = 'Contact us and will get back to you quickly!';
  Quotation[2] = '"No. No, Mav, this is not a good idea... Sorry, Goose, but it\'s time to buzz the tower.!" - Top Gun';
  Tag[2] = 'It\'s ok you can buzz our Tower.';
  Quotation[3] = '"You were in a 4g inverted dive with a MiG28?" - Top Gun'
  Tag[3] = 'Tell us your story.'
  Quotation[4] = '"It\'s classified. I could tell you, but then I\'d have to kill you." - Top Gun'
  Tag[4] = 'You can tell us we won\'t hurt you.'
  Quotation[5] = '"You can be my wingman any time!" - Top Gun'
  Tag[5] = 'We will be your wingman.'

  var Q = Quotation.length;
  var whichQuotation=Math.round(Math.random()*(Q-1));
  var quote = Quotation[whichQuotation];
  var tag = Tag[whichQuotation];
  $('#quote_placeholder').html('<h3>'+quote+'</h3>'+'<h4>'+tag+'</h4>');
}


$('#signupbtn').on('click', function (e) {
  window.location = 'https://app.managersphone.com/register';
})










