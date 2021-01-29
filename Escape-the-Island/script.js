let frames, score, count;
let choice1;
let speech;
let f, j;
let mySound, mySound2, mySound3, mySound4, mySound5, mySound6, mySound7;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound("text1.mp3");
  mySound2 = loadSound("text2F.mp3");
  mySound3 = loadSound("text2j.mp3");
  mySound4 = loadSound("text3f.mp3");
  mySound5 = loadSound("text3j.mp3");
  mySound6 = loadSound("text4.mp3");
  mySound7 = loadSound("text5.mp3");
}

function setup() {
  createCanvas(800, 500);
  colorMode(HSB, 360, 120, 100);
  frames = 0;
  score = 0;
  count = 0;
  textSize(12); 
  fill(0);
  var question = document.write("\nPress 'a' to start : ");
  let inp = createInput('');
  inp.input(userInput);
  //document.write(word.text1);
 // var question = document.write("\nPress 'f' or press 'j' : ");
  //inp = createInput('');
  //inp.input(userInput);
}

function draw() {
  displayScores();
  
}


function userInput() {
  if(this.value() === "a" && count == 0) {
  console.log("in preload")
  mySound.play();
  mySound.setVolume(0.3);
  console.log("leaving preload"); 
  document.write(word.text1);
  var question = document.write("\nPress 'f' or press 'j' : ");
  inp = createInput('');
  inp.input(userInput);
  count += 1
  }
  if(this.value() === "f" && count == 1) {
  document.write(word.text2F);
  score += 1;
  console.log("in preload")
  mySound2.play();
   mySound2.setVolume(0.3);
  console.log("leaving preload");
  count += 1;
  var question = document.write("\nPress 1 or press 2 : ");
  let inp = createInput('');
  inp.input(userInput)
  }
  
   else if (this.value() === "j" && count == 1) {
   document.write(word.text2J);
   score -= 1; 
   console.log("in preload")
   mySound3.play();
   mySound3.setVolume(0.3);
   console.log("leaving preload");
   count += 1;
   var question = document.write("\nPress 1 or press 2 : ");
   let inp = createInput('');
   inp.input(userInput);
  }
  else if (this.value() === "1" && count == 2) {
  document.write(word.text3F);
  score +=1;
  console.log("in preload")
  mySound4.play();
  mySound4.setVolume(0.3);
  console.log("leaving preload");
  count += 1;
  var question = document.write("\nPress '4' to see your score :");
  let inp = createInput('');
  inp.input(userInput);
  }
 
  else if (this.value() === "2" && count == 2) {
  document.write(word.text3J);
  score -= 1;
  console.log("in preload")
  mySound5.play();
  mySound5.setVolume(0.3);
  console.log("leaving preload");
  count += 1;
  var question = document.write("\nPress '4' to see your score : ");
  let inp = createInput('');
  inp.input(userInput);
  }

  if(this.value() === "4" && count == 3) {
   if(score > 0){
   document.write(word.text4);
   document.write(score);
    console.log("in preload")
    mySound6.play();
    mySound6.setVolume(0.3);
    console.log("leaving preload");
    }
       if(score <= 0){
       document.write(word.text5);
       console.log("in preload")
       mySound7.play();
       mySound7.setVolume(0.3);
       console.log("leaving preload");
  }
  }
 }


var word = {
  text1:"You were flying back home when suddenly a storm appeared out of nowhere.The pilot loses control and the plane begins to ascend rapidly.\n During the ascend you pass out.Once you wake up you realize you’re stranded on an island by yourself.Your goal is to survive. Not knowing\n how long your stay on the island will be, you have to scavenge for resources to sustain yourself. You look and you see the sight of the crash. You can either F: Search the plane for necessities OR J: Go find Shelter.",
  
  text2F:"You decided that searching would be a good place to start. You go towards the plane crash and begin looking. As you’re looking you find a first aid kit, some snacks, water, and a blanket\n You keep looking however everything else was destroyed. It’s about to start raining, you need to look for shelter.You search and search the island and finally after a while you come across a huge dark cave. This seems like a decent spot to stay the night you think to yourself.\n However in the distance you spot a vast amount of branches, shrubs, and leaves. This would make great material to build a makeshift house. You can either 1: build a house out of the branches, shrubs, and leaves OR 2: Take shelter in the cave. ",
  
  text2J:"You search and search the island and finally after a while you come across a huge dark cave. This seems like a decent spot to stay the night you think to yourself.\n However in the distance you spot a vast amount of branches, shrubs, and leaves. This would make great material to build a makeshift house. You can either 1: build a house out of the branches, shrubs, and leaves OR 2: Take shelter in the cave.",

  text3F:"You begin building your house out of the materials you found. It takes you all afternoon to build it.\n By the time you finish it is already nighttime.Exhausted from everything that has happened you go inside and lie down (you wrap yourself in your blanket) and begin to drift off.\n You go to sleep thinking about what is to  come in the following days and whether or not you’ll be able to get off the island.",
  
  text3J:"You go inside the cave thinking everything will be ok. Unfortunately, you’re not alone. You spot a group of bats hanging upside down.\n They all have their attention on you. The bats start flying towards you and you can’t help but run outside the cave.\n You’re too scared to sleep so you decide to walk for the rest of the night. You pass out from exhaustion.",

 text4: "Congratulations, you escaped the island.",

 text5: "Unfortunately you did not escape.", 



}



function displayScores() {
 textSize(20);
 fill(0);
 text(`Score: ${score}`, 200, 200);
}


