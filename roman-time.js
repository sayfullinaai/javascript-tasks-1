/**
 * Created by sayfu on 04.10.2015.
 */
var arabic = [1, 4, 5 , 9, 10, 40, 50];
var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function convertToRoman(number){
    if(number == 0)
        return '--';
    var n = arabic.length-1;
    var result = '';
    while(number > 0){
        if(number >= arabic[n]){
            result += roman[n];
            number -= arabic[n];
        }
        else n--;
    }
    return result;
}

function isInputInteger(minutes, hours){
    return (hours == parseInt(hours)) && (minutes == parseInt(minutes));
}

function isInputValid(minutes, hours){
    return !(hours < 0 || hours > 23 || minutes < 0 || minutes > 59);
}

var hours = process.argv[2];
var minutes = process.argv[3];

if (! isInputInteger(minutes, hours))
    console.log('You have entered an invalid number. Numbers must be an integer.');
else if(! isInputValid(minutes, hours))
    console.log('Incorrect time.');
else
    console.log(convertToRoman(+hours)+':'+convertToRoman(+minutes));
