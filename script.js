var wrapperEle = document.body.querySelector(".wrapper");
var operationEle = document.body.querySelector(".operation");
var lastNoEle = document.body.querySelector(".lastNo");

var prompter1 = Number(prompt("Type a number"));

if(0<=prompter1){
  wrapperEle.innerHTML=prompter1;
}else if(0>=prompter1){
  wrapperEle.innerHTML=prompter1;
}else{
  wrapperEle.innerHTML="Reload the page dumb-dumb, I said type a number!";
}

var operationprompt = prompt("Provide an operation (ex. + - / *)");

if("+"==operationprompt){
  operationEle.innerHTML="+";
}else if("-"==operationprompt){
  operationEle.innerHTML="-";
}else if("/"==operationprompt){
  operationEle.innerHTML="/";
}else if("*"==operationprompt){
  operationEle.innerHTML="*";
}else{
  operationEle.innerHTML="Reload page and use a math operation!"
}

var prompter2 = Number(prompt("Type a number"));

if(0<=prompter2){
  lastNoEle.innerHTML=prompter2;
}else if(0>=prompter2){
  lastNoEle.innerHTML=prompter2;
}else{
  lastNoEle.innerHTML="Dumb-dumb, I said type a number, just a number. Do it right this time!"
}

var addition=(prompter1+prompter2)
var subtraction=(prompter1-prompter2)
var division=(prompter1/prompter2)
var multiplication=(prompter1*prompter2)

if("+"==operationprompt){
  document.body.querySelector(".answer").innerHTML=addition;
}else if("-"==operationprompt){
  document.body.querySelector(".answer").innerHTML=subtraction;
}else if("/"==operationprompt){
  document.body.querySelector(".answer").innerHTML=division;
}else if("*"==operationprompt){
  document.body.querySelector(".answer").innerHTML=multiplication;
}