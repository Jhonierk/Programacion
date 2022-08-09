var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide(){
    var checkRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkRadio.value;
    if(currentClass){
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}

changeSide();

radioGroup.addEventListener('change', changeSide);