var button = document.createElement("button");
var btnText = document.createTextNode("Generate Die");
button.appendChild(btnText);
this.document.body.appendChild(button);
var container = document.createElement('container');
document.body.appendChild(container);
container.className = "con";
var getRandomNumber = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div');
        this.num = getRandomNumber(1, 6);
        this.value = document.createTextNode('' + this.num);
        this.div.className = 'box';
        this.div.appendChild(this.value);
        container.appendChild(this.div);
        var reRoll = document.getElementById("Roll");
        reRoll.addEventListener('click', function () { return _this.rollDice(); });
    }
    Die.prototype.rollDice = function () {
        this.num = getRandomNumber(1, 6);
        this.value.nodeValue = ('' + this.num);
        this.div.appendChild(this.value);
    };
    return Die;
}());
button.addEventListener("click", function () {
    new Die();
});
