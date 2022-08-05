let positionX, positionY;
let speedX, speedY;

// setup runs once
function setup()
{
    createCanvas(windowWidth, windowHeight);
    positionX = 100;
    positionY = 50;
    speedX = 5; // 5 pixels per frame
    speedY = 5;
}

// it is run everytime, for each frame in loop
function draw()
{
    background("#fe934b55"); //last two digits represent the alpha channel values
    fill("#ffffff");
    noStroke();
    // draws a circle at location (30, 30) with diameter 20 pixels
    circle(positionX, positionY,20);

    positionX += speedX; //this adds motion in X direction when each frame is rendered
    positionY += speedY; //this adds motion in Y direction when each frame

    //however if we don't add constraints to the way we increment, it'll indefinitely move in the same direction
    if (positionY > 400)
    {
        speedY *= -1; //this reverses the direction of the circle
    }
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}