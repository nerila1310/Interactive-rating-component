const options = document.querySelectorAll('.numbers span');
let previusSelected = document.querySelector('.selected');
const contentOptions = document.querySelector('.content')
const contentThank = document.querySelector('.thank-you');
const btnSubmit = document.querySelector('#submit');
let viewSeleccion = document.querySelector('.selection');
let contentSelected = '5';

document.addEventListener('DOMContentLoaded', ()=>{
    contentThank.classList.add('hide');

    addEvents(options);
});

function addEvents(spans) {
    spans.forEach(span => {
        span.addEventListener('click', () => {
            if(previusSelected && previusSelected.classList.contains('selected')) 
                previusSelected.classList.remove('selected')
            span.classList.add('selected');
            previusSelected = span;
            contentSelected = span.textContent;
        })
    });

    btnSubmit.addEventListener('click', () => {
        contentOptions.classList.add('hide');
        contentThank.classList.remove('hide');
        viewSeleccion.innerHTML = `You selected ${contentSelected} out of 5`
    });
}
