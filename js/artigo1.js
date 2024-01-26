// Obter a referência para a div
var wrap = document.querySelector('.wrap');
let contain = document.querySelector(".contain div");


alteraAltura();

function alteraAltura() {
    // Obter o padding
    let paddingTop = parseFloat(window.getComputedStyle(wrap, null).getPropertyValue('padding-top'));
    let paddingBottom = parseFloat(window.getComputedStyle(wrap, null).getPropertyValue('padding-bottom'));

    /*let height = window.getComputedStyle(wrap, null).getPropertyValue('height');
    console.log(height);*/

    let height = wrap.clientHeight;

    let alturaDiv = 0;
    // Obter a altura da div
    //alturaDiv = height + 500 + paddingBottom + paddingTop;
    alturaDiv = height + "px";

    //paddingBottom + paddingTop

    // Exibir a altura no console (você pode fazer o que quiser com a altura neste ponto)
    console.log('Altura da Div:', alturaDiv);

    console.log(contain);
    /*contain.setAttribute("height", alturaDiv);*/
    contain.style.height = alturaDiv;
}

window.addEventListener('resize', alteraAltura);
