let screenvalue="";
let buttons=document.querySelectorAll('button');

let screen=document.getElementById('screen');

for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttomText=e.target.innerText;
        if(buttomText == '=')
        {
           screen.value=eval(screenvalue);
           screenvalue=screen.value;
        }
        else if(buttomText=='AC')
        {
            screenvalue="";
            screen.value=screenvalue;
        }
        else{
            screenvalue += buttomText;
            screen.value = screenvalue;
        }
    })
}