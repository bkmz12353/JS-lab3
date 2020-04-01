function q1() {
   let wrapper = document.getElementById('wrapper1');
    wrapper.firstElementChild.style.color = 'red';
}
function q2() {
    let wrapper = document.getElementById('wrapper2');
    wrapper.lastElementChild.style.color = 'red';
}
function q3() {
    let wrapper = document.getElementById('wrapper3');
    for(let i = 0;i<wrapper.children.length;i++){
        wrapper.children[i].innerHTML += '!';
    }
}