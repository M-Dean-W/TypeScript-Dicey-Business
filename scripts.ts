
let button = document.createElement("button")
let btnText = document.createTextNode("Generate Die")

button.appendChild(btnText)
this.document.body.appendChild(button)

let container = document.createElement('container')
document.body.appendChild(container)

container.className = "con"


let getRandomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

class Die {
    div:HTMLDivElement;
    value:Node;
    num:number
    constructor() {
        this.div = document.createElement('div');
        this.num = getRandomNumber(1,6)
        this.value = document.createTextNode('' + this.num);
        this.div.className = 'box';
        this.div.appendChild(this.value)
        container.appendChild(this.div);
        let reRoll = document.getElementById("Roll") as HTMLButtonElement
        reRoll.addEventListener('click', () => this.rollDice())
    }

    rollDice() {
        
             this.num = getRandomNumber(1,6)
             this.value.nodeValue = ('' + this.num);
             this.div.appendChild(this.value)
    
    }

}

button.addEventListener("click", function () {
    new Die()
})


