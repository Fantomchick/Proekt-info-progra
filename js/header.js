// $(document).ready(
// 	() => $("header").height($(window).height())
// );
const modalcrusok = document.querySelector('#crusokalert');
const modalcena = document.querySelector('#cenaalert');
const modalonas = document.querySelector('#onasalert');
const btn = document.querySelector('#crusok');
const btn1 = document.querySelector('#cena');
const btn2 = document.querySelector('#onas');
const close = document.querySelector('#close');
const close1 = document.querySelector('#close1');
const close2 = document.querySelector('#close2');
const info = document.querySelector('#what');
const infor= document.querySelector('#info');
const close3 = document.querySelector('#close3');
const infor1 = document.querySelector('#info1');
const infor2 = document.querySelector('#info2');


btn.onclick = function () {
    modalcrusok.style.display = 'block';
};

btn1.onclick = function () {
    modalcena.style.display = 'block';
};

btn2.onclick = function () {
    modalonas.style.display = 'block';
};

close.onclick = function () {
    modalcrusok.style.display = 'none';
};

close1.onclick = function () {
    modalcena.style.display = 'none';
};

close2.onclick = function () {
    modalonas.style.display = 'none';
};
info.onclick=function(){
    infor.style.display = 'block'
    close3.style.display = 'block'
    infor1.style.display = 'block'
    infor2.style.display = 'block'

}

close3.onclick = function () {
    infor.style.display = 'none'
    close3.style.display = 'none'
    infor1.style.display = 'none'
    infor2.style.display = 'none'


}
infor1.onclick = function(){
    window.location.href = "index1.html";

}

