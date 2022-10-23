
/*
Zentai Pál
2022-10-23
SZOFT-II-N 
*/

const oldalElem = document.querySelector("#oldal") as HTMLInputElement;
const alfaElem = document.querySelector("#alfaszog") as HTMLInputElement;
const szamitGomb = document.querySelector("#szamitGomb");
const sugarElem = document.querySelector("#sugar");

function szamolSugar(oldal: number, alfaszog: number) {
    return 1/2*oldal*alfaszog;
}

szamitGomb?.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    let alfaszog = Number(alfaElem.value);
    let korSugar = szamolSugar(oldal, alfaszog);
    console.log(korSugar);
});