// TASK 5
console.log(' \nTASK 5\n ');

var sentence = 'Привет, студент! Студент... Как дела, студент? Привет, студент. Пока, студент';
var sentence2 = 'Hello! My name is Tim, I am 30 years old... What about you?';

function countWords(par) {
    var arrOfWords = par.toLowerCase().trim().split(/[0-9-!"#$%&'()* ,./:;<=>?@[\\\]_`{|}~]/);
    var objKeys = {};
    var biggerKeyName = '';
    var biggerKey = 0;

    for (var i = 0; i < arrOfWords.length; i++) {
        var counter = 0;

        if (arrOfWords[i].length > 1) {
            arrOfWords.map(function (el) {
                if (arrOfWords[i] === el) {
                    counter++;
                    objKeys[el] = counter;
                }

                return objKeys;
            })
        }
    }

    for (var key in objKeys) {
        if (biggerKey < objKeys[key]) {
            biggerKeyName = key;
            biggerKey = objKeys[key];
        }

        if (biggerKey <= 2) {
            biggerKeyName = '- (нет таких слов)';
            biggerKey = 0;
        }
    }

    return 'В предложении: ' + par + '\n\nМаксимальное число повторений у слова "' + biggerKeyName + '" - ' + biggerKey;

}

console.log(countWords(sentence));
console.log(countWords(sentence2));