
/*
Zentai Pál
2022-10-23
SZOFT-II-N 
*/

const oldalElem = document.querySelector("#oldal") as HTMLInputElement;
const alfaszogElem = document.querySelector("#alfaszog") as HTMLInputElement;
const szamitGomb = document.querySelector("#szamitGomb");


function szamolSugar(oldal: number, alfaszog: number):number {
    return (1/2)*oldal*alfaszog;
}

szamitGomb?.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    let alfa = Number(alfaszogElem.value);
    let sugar = szamolSugar(oldal, alfa);
    alert(sugar);
});