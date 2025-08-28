console.log('connected');

// heart increase functionality 

let heartCount = parseInt(document.getElementById('heart-count').innerText);

const heartIcons =document.getElementsByClassName("fa-heart");
for(const heart of heartIcons){
 
 heart.addEventListener('click',function(e)
{

    heartCount+=1;
    document.getElementById('heart-count').innerText=heartCount;
    
})
 
}

// call functionality 


const callBtns = document.getElementsByClassName('call-btn');


for(const callBtn of callBtns){
   callBtn.addEventListener('click',function(e){
    const serviceName =e.target.parentNode.parentNode.getElementsByClassName('service-name')[0].innerText;
    
    const serviceNumber=e.target.parentNode.parentNode.getElementsByClassName('service-number')[0].innerText;
    
    
    let availableCoin =parseInt(document.getElementById('coin-count').innerText);
    if(availableCoin>=20)
    {
        alert('Calling '+ serviceName +" : "+ serviceNumber);
        availableCoin-=20;
        document.getElementById('coin-count').innerText=availableCoin;
    }
    else{
        alert("You do not have sufficient Balance. You need minimum 20 coins to make a call")
    }

        
        
   })
    
}








