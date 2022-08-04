// setup runs once
function setup()
{
    createCanvas(windowWidth, windowHeight);
}

function draw()
{
    background("#fe934b55"); //last two digits represent the alpha channel values
    fill("#ffffff");
    noStroke();
    // draws a circle at location (30, 30) with diameter 20 pixels
    circle(mouseX, mouseY,20);
}

function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}