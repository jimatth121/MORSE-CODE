let morseCodeLibary ={'.-': "A", '-...':'B', '-.-.':'C', '-..':'D','.':'E',
'..-.':'F','--.':'G','....':'H','..':'I','.---':'J',
'-.-':'K','.-..':'L','--':'M','-.':'N','---':'O',
'.--.':'P','--.-':'Q','.-.':'R','...':'S','-':'T',
'..-':'U','...-':'V','.--':'W','-..-':'X','-.---':'Y',
'--..':'Z','':' '
}

let decodeMorse = function(morseCode) {
let output='' 
let morseToArray = morseCode.split(" ")
    console.log(morseToArray);
 
 for(let i in morseToArray){
   output +=  morseCodeLibary[morseToArray[i]]
 }
    let removeSpace = output.split('  ').join(" ")

    console.log(removeSpace)
};
decodeMorse('-- .- - - .... . .--   .. ...   .- .-- . ... --- -- .');
