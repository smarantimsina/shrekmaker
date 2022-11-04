noseX = 0;
noseY = 0;
leftEarX = 0;
leftEarY = 0;
rightEarX = 0;
rightEarY = 0;
function preload() {
    shrekmouth = loadImage("shrekmouth.png");
    shreakear = loadImage("shrekear.png");
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(shrekmouth, noseX-7.5, noseY+17, 80, 40);
    image(shreakear, leftEarX-100, leftEarY-80, 200, 100);
}
function takeSnapshot() {
    save('filterimage.png'); 
}

function modelLoaded() {
    console.log("posenet is initalized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 22;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x: "+ results[0].pose.nose.x + ", nose y: " + results[0].pose.nose.y);
        leftEarX = results[0].pose.leftEar.x - 22;
        leftEarY = results[0].pose.leftEar.y - 10;
        console.log("left ear x:" + results[0].pose.leftEar.x + ", left ear y:" + results[0].pose.leftEar.y);
        rightEarX = results[0].pose.rightEar.x - 22;
        rightEarY = results[0].pose.rightEar.y - 10;

    }
}