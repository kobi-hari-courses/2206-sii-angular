import { Calculator } from "./calculator";

console.log('Hello World');

const btn = document.getElementById('button-ok') as HTMLButtonElement;

if (btn) {
    btn.addEventListener('click', ev => {
        const inp = document.getElementById('input-name') as HTMLInputElement;
        const name = inp.value;

        const span = document.getElementById('span-name') as HTMLSpanElement;
        span.innerText = name;
    });
}

const btn2 = document.getElementById('button-equals') as HTMLButtonElement;
if (btn2) {
    btn2.addEventListener('click', ev => {
        const a = document.getElementById('a') as HTMLInputElement;
        const b = document.getElementById('b') as HTMLInputElement;
        const span = document.getElementById('span-result') as HTMLSpanElement;
        const aValue = a.valueAsNumber;
        const bValue = b.valueAsNumber;

        const calc = new Calculator();
        const res = calc.add(aValue, bValue);

        span.innerText = res.toString();
    });
}