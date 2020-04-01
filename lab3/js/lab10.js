function q1() {
    let elem = document.getElementById('elem');
    elem.parentElement.style.color = 'red';
}
function q2() {
    let elem = document.getElementById('elem1');
    elem.parentElement.parentElement.style.color = 'red';
    elem.parentElement.style.color = 'gray';

}