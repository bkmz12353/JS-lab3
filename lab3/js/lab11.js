function q1() {


        let parent = document.getElementById('parent');
        let child = document.getElementById('child');
        parent.removeChild(child);

}
function q2() {
        let parent = document.getElementById('parent1');
        parent.removeChild(parent.lastElementChild);
}
function q3() {
let elem=document.getElementById('elem')
                elem.parentElement.removeChild(elem);
}
function q5() {
        let input = document.getElementById('input');
        let clone = input.cloneNode(true);
        input.parentElement.appendChild(clone);
}