// reversing word(s) keep the same format
// return true or false

function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
  }
   
  console.log(isPalindrome("Mum Dad"));
