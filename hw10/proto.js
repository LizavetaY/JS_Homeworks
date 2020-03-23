console.log('\n ***TASK 1: proto*** \n ');
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        throw new Error('Неверный объем');
    }

    this._foodAmount = amount;
}

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ˆ_ˆ');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}

console.log('\n ***Object Animal*** \n ');
var kitty = new Animal('Kitty');
kitty.dailyNorm();
console.log(kitty);
console.log(kitty.feed());
console.log(kitty.dailyNorm());

console.log('\n ***Object Cat*** \n ');
var barsik = new Cat('Barsik');
barsik.dailyNorm(66);
console.log(barsik);
console.log(barsik.feed());
console.log(barsik.dailyNorm());

console.log('\n ***Chaining*** \n ');
barsik.stroke().feed().stroke().stroke().feed();
