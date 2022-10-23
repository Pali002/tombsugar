/*
Zentai Pál
2022-10-23
SZOFT-II-N
*/
const oldalElem = document.querySelector("#oldal");
const alfaszogElem = document.querySelector("#alfaszog");
const szamitGomb = document.querySelector("#szamitGomb");
function szamolSugar(oldal, alfaszog) {
    return (1 / 2) * oldal * alfaszog;
}
szamitGomb === null || szamitGomb === void 0 ? void 0 : szamitGomb.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    let alfa = Number(alfaszogElem.value);
    let sugar = szamolSugar(oldal, alfa);
    alert(sugar);
});
