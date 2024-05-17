class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        const isConfirmed = confirm(`Ви хочете виконати дію ${znak} з ${X} і ${Y}?`);
        if (isConfirmed) {
            this.performOperation(X, Y, znak);
        } else {
            this.input();
        }
    }

    input() {
        const X = this.getNumberInput("Введіть значення X:");
        const Y = this.getNumberInput("Введіть значення Y:");
        const znak = this.getValidZnak();
        this.performOperation(X, Y, znak);
    }

    getNumberInput(message) {
        let value;
        while (true) {
            value = parseFloat(prompt(message));
            if (!isNaN(value)) break;
            alert("Невірне число. Спробуйте ще раз.");
        }
        return value;
    }

    getValidZnak() {
        let znak;
        const validZnak = ['+', '-', '/', '*', '%'];
        while (true) {
            znak = prompt("Введіть операцію (+, -, /, *, %):");
            if (validZnak.includes(znak)) break;
            alert("Невірна операція. Спробуйте ще раз.");
        }
        return znak;
    }

    performOperation(X, Y, znak) {
        let result;
        switch (znak) {
            case '+':
                result = X + Y;
                break;
            case '-':
                result = X - Y;
                break;
            case '*':
                result = X * Y;
                break;
            case '/':
                result = X / Y;
                break;
            case '%':
                result = X % Y;
                break;
        }
        alert(`Результат: ${result}`);
    }
}

const obj = { X: 12, Y: 3, znak: '/' };
const p = new SuperMath();
p.check(obj);