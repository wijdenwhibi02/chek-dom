const butonmoins=document.querySelectorAll('.minus');
const butomplus=document .querySelectorAll('.plus');
const qtofItems=document.querySelectorAll('.quantity');
const totals=document.querySelector('#total-sum');
const priceofItems=document.querySelectorAll('.price');
const reseat=document.querySelectorAll('.delete');
const bigdivcontent=document.querySelectorAll('.card');

for (let i=0;i<butomplus.length;i++){
butomplus[i].addEventListener ('click',function(){
    qtofItems[i].innerHTML++;
    totals.textContent=parseInt(totals.textContent)+parseInt(priceofItems.textContent);
}

)};
for (let i=0;i<butonmoins.length;i++){
    butonmoins[i].addEventListener ('click',function(){
    
        if(qtofItems[i].innerHTML>0){
            qtofItems[i].innerHTML--; 
            totals.textContent=parseInt(totals.textContent)+parseInt(priceofItems.textContent);
        }
    }
    
    )};
    for(let i=0;i<reseat.length;i++){
     reseat[i].addEventListener('click',function(){
        bigdivcontent[i].remove();
        totals.innerHTML=parseInt(totals.innerHTML)-parseInt(priceofItems[i].innerHTML)*parseInt(qtofItems[i].innerHTML);
     });
     
    
    }

    


