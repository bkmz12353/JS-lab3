function q1() {
    let elem = document.querySelector('#elem');
    elem.classList.add('www');
}
function q2() {
    let elem = document.querySelector('#elem');
    elem.classList.remove('www');

}
function q3() {
    let elem = document.getElementById('elem');
    let checkClass = elem.classList.contains('www');
    if (checkClass==true){alert("Содержит");}
    else{alert("Не содержит");}

}
function q4() {
    let elem = document.getElementById('elem');
    let checkClass = elem.classList.contains('www');
    if (checkClass==true){elem.classList.remove('www');}
    else{elem.classList.add('www');}
}
function q5() {
    let elem = document.getElementById('elem');
    alert(elem.classList.length);
}
function q6() {
    let elem = document.getElementById('elem');
    for(let i = 0;i < elem.classList.length;i++){
        alert(elem.classList[i]);
    }
}
