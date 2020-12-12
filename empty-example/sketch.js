var diam1=30;
function setup() { 
   createCanvas(600, 400); 
   background(0);      //bg only once
}

function draw() {   
   fill(233,0,0);   
   stroke(255,255,255);   
   strokeWeight(5);       
   ellipse(width/2,height/1,diam1,diam1);    
                       //half width & height = canvas center
   diam1=diam1+5;    //increase the size     
   if(diam1>300){       
      diam1=30;   
   }else{       
     diam1=diam1+5;   
   }
}