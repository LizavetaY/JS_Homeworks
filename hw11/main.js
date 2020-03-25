var arr = [-1, 0, 2, 34, -2];
console.log(arr);


// TASK 1
console.log(' \nTASK 1\nfilterNumbersArr()\n  ');

var newArr = arr.filter(function (el) {
    return el > 0;
});

console.log(newArr);


// TASK 2
console.log(' \nTASK 2\ngetPositiveNumber()\n ');

function getPositiveNumber(number) {
    return number > 0;
}

console.log(arr.find(getPositiveNumber));


// TASK 3
console.log(' \nTASK 3\nisPalindrome()\n ');

function isPalindrome(word) {
    var array = word.toLowerCase().split('');
    var arrCopy = word.toLowerCase().split('').reverse();

    for (var i = 0; i < array.length; i++) {
        return array[i] == arrCopy[i] ? true : false;
    }
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('Привет'));


// TASK 4
console.log(' \nTASK 4\nareAnagrams()\n ');

function areAnagrams(arg1, arg2) {
    var word1 = arg1.split('').sort();
    var word2 = arg2.split('').sort();

    if (word1.length != word2.length) {
        return false;
    }

    for (var i = 0; i < word1.length; i++) {
        return word1[i] == word2[i] ? true : false;
    }
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