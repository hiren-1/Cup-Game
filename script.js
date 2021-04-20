
var img = [0, 1, 2, 3, 4];
var cupImg = [];
var isCupDown = [true,true,true,true,true];
var ballLocation = Math.floor(Math.random() * 5);
var totalKeypressed = 0;
var isGameOver = false;


function preload(){
  
  for (let i = 0; i<5; i++){
    
  cupImg[i] = loadImage("images/cup_art.png");
  
  } 
}
function setup(){
 
  createCanvas(500,300);
  
}

function draw(){

   background(43, 227, 107);

  console.log(ballLocation);

    if (ballLocation === 0){
      fill(255, 204, 0);
      circle(60,150,60);
    }
      else if (ballLocation === 1){
        fill(255, 204, 0);
        circle(140,150,60);
      }
      else if (ballLocation === 2){
        fill(255, 204, 0);
        circle(220,150,60);
      }
      else if (ballLocation === 3){
        fill(255, 204, 0);
        circle(300,150,60);
      }
      else if (ballLocation === 4){
        fill(255, 204, 0);
        circle(380,150,60);
      }
  
  
  for (let i = 0; i<5; i++){
      
    if(isCupDown[i]){
      //draw the cup with a y of 100
     image(cupImg[i], 20 + (i*80), 100, 80, 80);
  
    }
    else{
      //draw the cup with a y postition of 50
     image(cupImg[i], 20 + (i*80), 50, 80, 80);
  
    }
      
      
      if (totalKeypressed >= 4){ 
       
        isGameOver = true;
        fill(255,99,71);
        text("Press r to Restart", 180, 240); 
        text("Total revealed cups =  " + totalKeypressed, 180, 260);

         
         while (isCupDown.length - 1){

          isCupDown.pop();

         }

      }  

    }
 }


function keyPressed(){
 
  if(key>='0' && key <= '4'){

      totalKeypressed = totalKeypressed + 1;

      console.log(totalKeypressed);

    let keyNum = Number(key);
     
      isCupDown[keyNum] = false;

  }


    else if (key === "r" || key === "R"){
      
      for (let i = 0; i<5; i++){
      isCupDown[i] = true;
      totalKeypressed = 0;
      }
        
      ballLocation = Math.floor(Math.random() * 5);
 
    }
    //keyNum is the number key that was pushed, between 0 and 4

}