$('#convert').click(function () {
    $("#output").animate({
      left: '250px',
      opacity: '0.8',
      height: '150px',
      width: '150px'
    }, "slow");
    var input = document.getElementById('usr').value.toUpperCase();
    var output = document.getElementById('output');
    var natoAlphabet = {
      'A': 'Alfa',
      'B': 'Bravo',
      'C': 'Charlie',
      'D': 'Delta',
      'E': 'Echo',
      'F': 'Foxtrot',
      'G': 'Golf',
      'I': 'India',
      'H': 'Hotel',
      'J': 'Juliett',
      'K': 'Kilo',
      'L': 'Lima',
      'M': 'Mike',
      'N': 'November',
      'O': 'Oscar',
      'P': 'Papa',
      'Q': 'Quebec',
      'R': 'Romeo',
      'S': 'Sierra',
      'T': 'Tango',
      'U': 'Uniform',
      'V': 'Victor',
      'W': 'Whiskey',
      'X': 'X-ray',
      'Y': 'Yankee',
      'Z': 'Zulu',
    };
    var result = '';
    var kebabCase = document.getElementById('kcChkBox').checked;
    for (var i=0; i < input.length; i++){
      var letter = input[i];
      if(natoAlphabet[letter]){
        result += kebabCase ? natoAlphabet[letter].toLowerCase() + '-' : natoAlphabet[letter] + ' ';
      //  result += natoAlphabet[letter] + ' ';
      }
      else{
        result += letter + ' (Not in NATO alphabet) ';
      }
    }
      output.textContent = result;
    });
    
  $('#clear').click(function () {  
      document.getElementById('usr').value = '';
      document.getElementById('output').textContent = '';
  });