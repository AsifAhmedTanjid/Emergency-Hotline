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





