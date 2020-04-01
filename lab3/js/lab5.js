
let i1=1;
let i2=2;
let i3=3;
let i4=3;

function q1() {
    let ul = document.getElementById('ul');
    let arr = [i1+' элемент', i2+' элемент', i3+' элемент'];
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        li.addEventListener('click',func);
        ul.appendChild(li);
    }
    function func() {
        alert(this.innerHTML);
    }
    i1=i1+i4;
    i2=i2+i4;
    i3=i3+i4;
}