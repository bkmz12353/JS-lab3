function q1() {
    let ul = document.getElementById('ul');
    let test = document.getElementById('elem');

   let li = document.createElement('li');
    li.innerHTML = '!!!';

    ul.insertBefore(li, test);
    }
