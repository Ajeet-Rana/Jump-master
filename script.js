
scoree=0;
let bgsound= new Audio('bgmusic.mp3');
let death=new Audio('ends.mp3');
size=window.innerWidth;


document.onkeydown = function(e){
    console.log("key code is : ", e.keyCode)
    if(e.keyCode == 13){
      bgsound.play();
      ani=document.querySelector('.jerry')
      jerry.classList.add('jerryanimation');
      btn=document.querySelector('.btn');
      btn.style.visibility='hidden';
    }
     if(e.keyCode == 38){
        
        
         
        tom=document.querySelector('.tom');
        tom.classList.add('tomanimated');
         setTimeout(() => {
            tom.classList.remove('tomanimated');
         }, 700);
     }
//      if(e.keyCode == 39){
//         tom=document.querySelector('.tom');
//         tomx=parseInt(window.getComputedStyle(tom,null).getPropertyValue('left'));
//         tom.style.left=tomx + 50 + "px";
        
//      }
//      if(e.keyCode == 37){
//         tom=document.querySelector('.tom');
//         tomx=parseInt(window.getComputedStyle(tom,null).getPropertyValue('left'));
//         tom.style.left=tomx - 50 + "px";
//      }
}

setInterval(() => {
    tom=document.querySelector('.tom');
    jerry=document.querySelector('.jerry');
    gameover=document.querySelector('.gameover');

    tx=parseInt(window.getComputedStyle(tom,null).getPropertyValue('left'));
    ty=parseInt(window.getComputedStyle(tom,null).getPropertyValue('top'));
    tr=parseInt(window.getComputedStyle(tom,null).getPropertyValue('right'));

    jx=parseInt(window.getComputedStyle(jerry,null).getPropertyValue('left'));
    jy=parseInt(window.getComputedStyle(jerry,null).getPropertyValue('top'));
    jr=parseInt(window.getComputedStyle(jerry,null).getPropertyValue('right'));

    x=Math.abs(tx-jx);
    y=Math.abs(ty-jy);
    z=Math.abs(tr-jr);
      console.log(x,y);
    
      
     
      


      if(size>1000){
    if(x < 150 && y < 60 && z < 150){
       jerry.classList.remove('jerryanimation');
       gameover.style.visibility = 'visible'; 
       jerry.style.left= '30vw';
       bgsound.pause();
       
       
       //death.pause();
       tom=document.querySelector('.tom');
       setTimeout(() => {
         tom.classList.remove('tomanimated');
      }, 700);
       
       
       
    
      }
   else if(jx < tx){
      scoree +=.24;
       update(scoree);
       setTimeout (()=>{
         jerryspeed=parseFloat(window.getComputedStyle(jerry,null).getPropertyValue('animation-duration'));
       newspeed=jerryspeed - 0.004;
       jerry.style.animationDuration = newspeed + 's';
       },500)
       
   }
      }
      else if (size > 690 && size < 1000){
         if(x < 70 && y < 60 && z<70){
            jerry.classList.remove('jerryanimation');
            gameover.style.visibility = 'visible'; 
            jerry.style.left= '30vw';
            bgsound.pause();
            
            
            //death.pause();
            tom=document.querySelector('.tom');
            setTimeout(() => {
              tom.classList.remove('tomanimated');
           }, 700);
            
            
            
         
           }
        else if(jx < tx){
           scoree +=.24;
            update(scoree);
            setTimeout (()=>{
              jerryspeed=parseFloat(window.getComputedStyle(jerry,null).getPropertyValue('animation-duration'));
            newspeed=jerryspeed - 0.005;
            jerry.style.animationDuration = newspeed + 's';
            },500)
            
        }
      }

      else{
         if(x < 30 && y < 60 && z<30){
            jerry.classList.remove('jerryanimation');
            gameover.style.visibility = 'visible'; 
            jerry.style.left= '30vw';
            bgsound.pause();
            
            
            //death.pause();
            tom=document.querySelector('.tom');
            setTimeout(() => {
              tom.classList.remove('tomanimated');
           }, 700);
            
            
            
         
           }
        else if(jx < tx){
           scoree +=.24;
            update(scoree);
            setTimeout (()=>{
              jerryspeed=parseFloat(window.getComputedStyle(jerry,null).getPropertyValue('animation-duration'));
            newspeed=jerryspeed - 0.005;
            jerry.style.animationDuration = newspeed + 's';
            },500)
            
        }
      }










}, 100);

function update(scoree){
   score.innerHTML = "YOUR SCORE : "  + parseInt(scoree);
}