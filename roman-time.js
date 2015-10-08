/**
 * Created by sayfu on 04.10.2015.
 */
var arabic = [1, 4, 5 , 9, 10, 40, 50];
var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];

function convertToRoman(number){
    if(number === 0){
        return '--';
    }
    var numberOfLength = arabic.length-1;
    var result = '';
    while(number > 0){
        if(number >= arabic[numberOfLength]){
            result += roman[numberOfLength];
            number -= arabic[numberOfLength];
        }
        else numberOfLength--;
    }
    return result;
}

function isValidInput(minutes, hours){
    return (hours == parseInt(hours, 10)) && (minutes == parseInt(minutes, 10));
}

function isValidInteger(minutes, hours){
    return !(hours < 0 || hours > 23 || minutes < 0 || minutes > 59);
}

var hours = process.argv[2];
var minutes = process.argv[3];

if (! isValidInput(minutes, hours))
    console.log('You have entered an invalid number. Numbers must be an integer.');
else if(! isValidInteger(minutes, hours))
    console.log('Incorrect time.');
else
    console.log(convertToRoman(hours)+':'+convertToRoman(minutes));
