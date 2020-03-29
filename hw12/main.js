// TASK 1
console.log(' \nTASK 1\n ');
var arr = ['Vasya', 'Petya', 'Kolia', ''];

function changeArray(array) {
    return array.map(function (el) {
        var obj = {};

        obj.name = el;

        return obj;
    })
}

console.log(changeArray(arr));


// TASK 2
console.log(' \nTASK 2\n ');

var arrTime = ['00', '13', '24'];

function currentTime(array) {
    var editArr = array.map(function (el) {
        return ' : ' + el;
    });

    return 'Текущее время' + editArr.join('');
}

function currentTime1(array) {
    var editArr = array.reduce(function (r, el) {
        return r + ' : ' + el;
    });

    return 'Текущее время : ' + editArr;
}

console.log('Method map(): ' + currentTime(arrTime));
console.log('Method reduce(): ' + currentTime1(arrTime));


// TASK 3
console.log(' \nTASK 3\n ');

var sentence = 'Hello! My name is Tim, I\'m 30 years old... What about you?';

function countVowels(par) {
    var vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    var counter = 0;
    var arr = par.toLowerCase().split('').forEach(function (el) {
        for (var i = 0; i < vowelsArr.length; i++) {
            if (vowelsArr[i] === el) counter++;
        }
    });

    return 'In the sentence: "' + par + '"\n\nare ' + counter + ' vowels.';
}

console.log(countVowels(sentence));


// TASK 4
console.log(' \nTASK 4\n ');

var str = 'Привет, студент! Студент... Как дела, студент 99?';

function countSentencesLetters(par) {
    var words = par.split(/[!.?]/);
    var res = '';

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 1) {
            var letters = words[i].split(/[0-9-!"#$%&'()* ,./:;<=>?@[\\\]_`{|}~]/);
            res += words[i].trim() + ': Letters quantity is: ' + letters.join('').length + '\n';
        }
    }

    return '\n' + res + '\n';
}

console.log(countSentencesLetters(str));
console.log(countSentencesLetters(sentence));