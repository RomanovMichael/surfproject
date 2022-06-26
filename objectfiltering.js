//const mixedArray = [43, 13, 74, 14, 66, 15, 22, 4];


//for (let i=0; i<mixedArray.length; i++) {
//console.log(mixedArray[i]);
//}


//for ( let num of mixedArray) {
//    console.log(num)
//}
//mixedArray.forEach(function(person, index, pArr){
   // console.log(person)
    //console.log(index)
//})

//mixedArray.forEach(person => console.log(person))


//const isEven = mixedArray.map( person => {
 //   if( person )
//})






const string = "здравствуй жопа Аовый год?";
let getVowels = function (str) {
    let letter = '';
    const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]
    str =  str.toLowerCase()
    for (let char of str) {
        if (vowels.includes(char)) {
            letter += char
            
        }
    }
    return letter;
}

console.log(getVowels(string));