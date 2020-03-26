var arr = [-1, 0, 2, 34, -2];
console.log(arr);


// TASK 1
console.log(' \nTASK 1\nfilterNumbersArr()\n  ');

function filterNumbersArr(numbers) {
    var array = numbers;

    if (!Array.isArray(array)) {
        return 'It\'s not an Array!';
    }

    var arrayPositive = array.filter(function (el) {
        return el > 0;
    });

    return arrayPositive;
}

console.log(filterNumbersArr(arr));


// TASK 2
console.log(' \nTASK 2\ngetPositiveNumber()\n ');

function getPositiveNumber(numbers) {
    var array = numbers;

    if (!Array.isArray(array)) {
        return 'It\'s not an Array!';
    }

    var numberPositive = array.find(function (el) {
        return el > 0;
    });

    return numberPositive;
}

console.log(getPositiveNumber(arr));


// TASK 3
console.log(' \nTASK 3\nisPalindrome()\n ');

function isPalindrome(word) {
    var word1 = word.toLowerCase();
    var word2 = word.toLowerCase().split('').reverse().join('');

    return word1 === word2 ? true : false;
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('Привет'));


// TASK 4
console.log(' \nTASK 4\nareAnagrams()\n ');

function areAnagrams(arg1, arg2) {
    var word1 = arg1.toLowerCase().split('').sort().join('');
    var word2 = arg2.toLowerCase().split('').sort().join('');

    if (word1.length != word2.length) {
        return false;
    }

    return word1 === word2 ? true : false;
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


// TASK 5
console.log(' \nTASK 5\ndivideArr()\n ');

function divideArr(array, divider) {
    var arr = array;
    var arrNew = [];

    if (!Array.isArray(arr)) {
        return 'It\'s not an Array!';
    }

    for (var i = 0; i < arr.length; i + divider) {
        arrNew.push(arr.splice(i, i + divider));
    }

    return arrNew;
}

console.log(divideArr(1, 2));
console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
