const firstWord = prompt('Inerisci una parola');

const secondWord = prompt('Inerisci una seconda parola');

function wordLenght(a, b) {
    if (a.length == b.length)
        return true;
    else {
        return false;
    }
}

if (wordLenght(firstWord, secondWord)) {
    console.log(firstWord + ' ' + secondWord);
}
else if (firstWord.length > secondWord.length){
    console.log('la prima è più lunga');
}
else {
    console.log('la seconda è più lunga');
}