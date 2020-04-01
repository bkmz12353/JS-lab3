function q1() {
    let elem = document.getElementById('elem');
    let prev = elem.previousElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}
function q2() {
    let elem = document.getElementById('elem2');
    let prev = elem.nextElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}
function q3() {
    let elem = document.getElementById('elem3');
    let prev = elem.nextElementSibling.nextElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}