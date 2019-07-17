var el = document.createElement('h2');
var text = document.createTextNode('Belajar programming online');
var box = document.getElementById('box1');

// Menambah
el.appendChild(text);
box.appendChild(el);

// menghapus
// box.removeChild(el);

// mengedit
var el2 = document.createElement('h3');
var text2 = document.createTextNode('belajar sekarang!');
el2.appendChild(text2);
var p1 = document.getElementById('p1')
box.replaceChild(el2, p1);