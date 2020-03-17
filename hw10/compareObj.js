console.log('\n ***TASK 3: compare the obj*** \n ');
function compareObj(obj1, obj2) {
    if (obj1 !== null && obj2 !== null &&
        Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
    }

    for (var key in obj1) {
        if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
            return false;
        }

        if ((typeof (obj1[key]) !== 'object' || obj1[key] === null) &&
            typeof (obj1[key]) !== 'function') {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        } else if (typeof (obj1[key]) === 'function') {
            if (obj1[key].toString() != obj2[key].toString()) {
                return false;
            }
        } else {
            if (compareObj(obj1[key], obj2[key]) == false) {
                return false;
            }
        }
    }

    return true;
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

var otherObj = {
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

console.log(compareObj(initialObj, otherObj));