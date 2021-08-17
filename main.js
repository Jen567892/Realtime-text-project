nosex = 0;
nosey = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(400,400)
    canvas.center();

    video = createCapture(VIDEO)
    video.size(400,400)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
background("#A3EDFF");
fill("#A54CED")
//square(nosex,nosey,difference)
textSize(difference)
text("Jenny Kitty", nosex, nosey)

}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPose(results){
if(results.length > 0){
    console.log(results);
    nosex =  results[0].pose.nose.x ;
    nosey =  results[0].pose.nose.y ;
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    difference = leftWristX-rightWristX;
}
}


