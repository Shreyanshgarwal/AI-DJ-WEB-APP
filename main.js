    song="";
    song2="";
    songIsPlaying="";
    song2IsPlaying="";
    leftWristX=0;
    leftWristY=0;
    rightWristX=0;
    rightWristY=0;
    scoreleftWrist=0;
    
    function preload() {
        song=loadSound("music.mp3");
        song2=loadSound("music2.mp3");
    
        } 
    
    
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
   console.log('PoseNet is Initialised');
}

function gotPoses(results) {
    if(results.length > 0)
    {
     console.log(results);
      scoreleftWrist=results[0].pose.keypoints[9].score;
      console.log("scoreLeftWrist = "+ scoreleftWrist);

     leftWristX=results[0].pose.leftWrist.x;
     leftWristY=results[0].pose.leftWrist.y;
     console.log("leftWristX = "+ leftWristX +"leftWristY = " + leftWristY);

     rightWristX=results[0].pose.rightWrist.x;
     rightWristY=results[0].pose.rightWrist.y;
     console.log("rightWristX = "+ rightWristX +"rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video,0,0,600,500);
    songIsPlaying=song.isPlaying()
    fill("#067A8A");
    stroke("#067A8A");
    if (scoreleftWrist > 0.2) {
    circle(leftWristX,leftWristY,20);
    song2.stop()

    if (songIsPlaying= false) {
        song.play();
    }
    }

    song2IsPlaying=song.isPlaying()
    if (scoreRightWrist > 0.2) {
        circle(leWristX,leftWristY,20);
    song.stop()

    if (song2IsPlaying= false) {
        song2.play();
    }
}
}

function play() {
    song2.play();
}