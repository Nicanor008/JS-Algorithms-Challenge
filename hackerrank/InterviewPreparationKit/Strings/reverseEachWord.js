function reverseEachWord(str, sep) {
    return str.split(sep).reverse().join(sep);
}

var string = 'Welcome to this Javascript Guide!'

var reverseEntireSentence = reverseEachWord(string, "");

console.log(reverseEachWord(reverseEntireSentence, ' '))
