function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,430);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#808080');
}
function modelLoded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
