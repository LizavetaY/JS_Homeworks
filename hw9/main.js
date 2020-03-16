function Animal(name) {
    var foodAmount = 50;

    this.name = name;

    var self = this;

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма');
    }

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            throw new Error('Неверный объем');
        }

        foodAmount = amount;
    }
}

function Cat(name) {
    Animal.apply(this, arguments);

    this.name = name;

    var animalFeed = this.feed;

    this.feed = function () {
        animalFeed();
        console.log('Кот доволен ˆ_ˆ');
        return this;
    }

    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    }
}

console.log('***Object Animal***');
var kitty = new Animal('Kitty');
kitty.dailyNorm(78);
console.log(kitty);
console.log(kitty.feed());
console.log(kitty.dailyNorm());

// TASK 4
console.log('***Object Cat***');
var barsik = new Cat('Barsik');
barsik.dailyNorm(66);
console.log(barsik);
console.log(barsik.feed());
console.log(barsik.dailyNorm());

// TASK 5
console.log('***Chaining***');
barsik.stroke().feed().stroke().stroke().feed();