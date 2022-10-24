/*
Zentai Pál
2022-10-23
SZOFT-II-N
*/
var oldalElem = document.querySelector("#oldal");
var alfaszogElem = document.querySelector("#alfaszog");
var szamitGomb = document.querySelector("#szamitGomb");
var eredmenyElem = document.querySelector("#eredmeny");
function szamolSugar(oldal, alfaszog) {
    return (1 / 2) * oldal * Math.sin(alfaszog);
}
szamitGomb === null || szamitGomb === void 0 ? void 0 : szamitGomb.addEventListener('click', function () {
    var oldal = Number(oldalElem.value);
    var alfaszog = Number(alfaszogElem.value);
    var sugar = szamolSugar(oldal, alfaszog);
    eredmenyElem.textContent = String(sugar);
});
