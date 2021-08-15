song=""
song2=""

function preload(){
    song= loadSound("Juice-WRLD-Come-Go-ft-Marshmello-(HipHopKit.com).mp3");
    song2=loadSound("Juice-WRLD-Lucid-Dreams-(HipHopKit.com).mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model is Loaded");
}
function draw(){
    image(video,0,0,600,500);
}

function PlayIt(){
    song.play();
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        LeftWristX= results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWristX="+LeftWristX+"LeftWristY="+LeftWristY);

        RightX= results[0].pose.rightWrist.x;
        RightY=results[0].pose.rightWrist.y;
        console.log("RightWristX="+RightX+"RightWristY="+RightY);
    }
}