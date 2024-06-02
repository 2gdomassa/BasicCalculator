$(document).ready(function(){
/* Troca fonte dos botões */
$('.button.number').hover( 
function(){$(this).css('color','grey')},
function(){$(this).css('color','white')}
).click(function(){
    refreshInput($(this).prop('id'));
})

let op;
let n1;
let n2;

$('.operator').click(function(){
    if($(this).text() === '+'){
        op = '+';
        n1 = parseInt($('#iinnpp').val());  
        $("#iinnpp").val('');     
    } 
    if($(this).text() === '-'){
        op = '-';
        n1 = parseInt($('#iinnpp').val());       
        $("#iinnpp").val('');
    } 
    if($(this).text() === 'X'){
        op = 'X';
        n1 = parseInt($('#iinnpp').val());       
        $("#iinnpp").val('');
    } 
    if($(this).text() === '/'){
        op = '/';
        n1 = parseInt($('#iinnpp').val());       
        $("#iinnpp").val('');
    } 
    
    
    
});

$('#btnCalc').click(function(){
  n2 = parseInt($('#iinnpp').val());
  if (op === '+'){
$('#iinnpp').val(n1+n2);
  }
  if(op === '-'){
  $("#iinnpp").val(n1-n2)  
}
if(op === 'X'){
    $("#iinnpp").val(n1*n2)  
  }
  if(op === '/'){
    $("#iinnpp").val(n1/n2)  
  }
})



function refreshInput(num2){
    let one = $("#iinnpp").val();
    $('#iinnpp').val(one+num2);    
}




})

