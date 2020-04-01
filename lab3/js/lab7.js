function q1() {
    let elem = document.getElementById('elem');
    elem.insertAdjacentHTML('beforeBegin','<span>!!!</span>');
}
function q2() {
    let elem = document.getElementById('elem1');
    elem.insertAdjacentHTML('afterEnd','<span>!!!</span>');
}
function q3() {
    let elem = document.getElementById('elem2');
    elem.insertAdjacentHTML('afterBegin','<span>!!!</span>');
}
function q4() {
    let elem = document.getElementById('elem3');
    elem.insertAdjacentHTML('beforeEnd','<span>!!!</span>');
}