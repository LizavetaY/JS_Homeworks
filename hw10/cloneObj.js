console.log('\n ***TASK 2: clone the obj*** \n ');
function deepClone(obj) {
    var objCopy = {};

    if (Array.isArray(obj)) {
        objCopy = [];
    }

    for (var key in obj) {
        if (typeof (obj[key]) !== 'object' || obj[key] === null) {
            objCopy[key] = obj[key];
        } else {
            objCopy[key] = deepClone(obj[key]);
        }
    }

    return objCopy;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);