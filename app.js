
let position;
let speed;
let radius;
//we use radius to add the proper boncing effect
//if we don't add radius, then few of the pixels of the ball is not drawn
//while it bounces back and forth

let sound;

function preload() {
    sound = loadSound('drop.mp3');
}

// setup runs once
function setup()
{
    createCanvas(windowWidth, windowHeight);
    position = createVector(100,50);
    speed = createVector(5,5);
    radius = 50;
}

// it is run everytime, for each frame in loop
function draw()
{
    
    background("#0096FF55"); //last two digits represent the alpha channel values
    fill("#ffffff");
    noStroke();
    // draws a circle at location (30, 30) with diameter 20 pixels
    circle(position.x, position.y,radius * 2);

    // positionX += speedX; //this adds motion in X direction when each frame is rendered
    // positionY += speedY; //this adds motion in Y direction when each frame

    position.add(speed);
    // speed.mult(1.005);

    //however if we don't add constraints to the way we increment, it'll indefinitely move in the same direction
    if (position.y > windowHeight-radius || position.y < radius)
    {
        //positionY < 0 accounts for the reversing of direction when it reaches the top right corner of the screen
        speed.y *= -1; //this reverses the direction of the circle
        sound.play();
    }

    if(position.x > windowWidth-radius || position.x < radius)
    {
        speed.x *= -1;
        sound.play();
    }

    //to account for the sudden resizing of the windows
    //we need to constrain the bouncing of the circle within current windowwidth and windowHeight
    position.x = constrain(position.x, radius, windowWidth - radius)
    position.y = constrain(position.y, radius, windowWidth - radius)
    //1st parameter - the parameter to constrain
    //2nd parameter - low (min limit)
    //3rd parameter - high (max limit)
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}