let positionX, positionY;
let speedX, speedY;
let radius;
//we use radius to add the proper boncing effect
//if we don't add radius, then few of the pixels of the ball is not drawn
//while it bounces back and forth

// setup runs once
function setup()
{
    createCanvas(windowWidth, windowHeight);
    positionX = 100;
    positionY = 50;
    speedX = 5; // 5 pixels per frame
    speedY = 5;
    radius = 50;
}

// it is run everytime, for each frame in loop
function draw()
{
    background("#fe934b55"); //last two digits represent the alpha channel values
    fill("#ffffff");
    noStroke();
    // draws a circle at location (30, 30) with diameter 20 pixels
    circle(positionX, positionY,radius * 2);

    positionX += speedX; //this adds motion in X direction when each frame is rendered
    positionY += speedY; //this adds motion in Y direction when each frame

    //however if we don't add constraints to the way we increment, it'll indefinitely move in the same direction
    if (positionY > windowHeight-radius || positionY < radius)
    {
        //positionY < 0 accounts for the reversing of direction when it reaches the top right corner of the screen
        speedY *= -1; //this reverses the direction of the circle
    }

    if(positionX > windowWidth-radius || positionX < radius)
    {
        speedX *= -1;
    }
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}