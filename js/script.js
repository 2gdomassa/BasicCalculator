$(document).ready(function(){
var numberRow=[];
/* Troca fonte dos botões */
$('.button.number').hover( 
function(){$(this).css('color','grey')},
function(){$(this).css('color','white')}
).click(function(){
    refreshInput($(this).prop('id'));
})

function soma(num1, num2){
    return num1 + num2;
}
function minus(num1,num2){
    return num1 - num2;
}
function multiplication(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}
function refreshInput(num2){
    let one = $("#iinnpp").val();
    $('#iinnpp').val(one+num2);
    
    
}




})

