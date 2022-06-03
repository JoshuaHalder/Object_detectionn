img="";
info="";
Objects=[];
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
 canvas=createCanvas(350,350);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(350,350);
 video.hide();
}

function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status - Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded");
    info=true;
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
         Objects=results;
    }
}

function draw(){
    image(video,0,0,500,500);
    if(info != ""){
        r=random(255);
        g=random(255);
        b=random(255);
        object_detector.detect(video,gotResult);
for(d=0;d<Objects.length;d++){
document.getElementById("status").innerHTML="Status - Objects Detected";
document.getElementById("number_of_objects").innerHTML="Number of objects detected - "+Objects.length;
fill(r,g,b);
confidence=floor(Objects[d].confidence*100);
text(Objects[d].label+confidence+"%",+Objects[d].x,+Objects[d].y);
noFill();
stroke(r,g,b);
rect(Objects[d].x,+" "+Objects[d].y,+" "+Objects[d].width,+" "+Objects[d].height);
}
    }
}

