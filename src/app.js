/*
Zentai Pál
2022-10-23
SZOFT-II-N
*/
const oldalElem = document.querySelector("#oldal");
const alfaElem = document.querySelector("#alfaszog");
const szamitGomb = document.querySelector("#szamitGomb");
const sugarElem = document.querySelector("#sugar");
function szamolSugar(oldal, alfaszog) {
    return 1 / 2 * oldal * alfaszog;
}
szamitGomb === null || szamitGomb === void 0 ? void 0 : szamitGomb.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    let alfaszog = Number(alfaElem.value);
    let korSugar = szamolSugar(oldal, alfaszog);
    console.log(korSugar);
});
