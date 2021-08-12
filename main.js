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
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPose(results){
if(results.length > 0){
    console.log(results);
}
}
