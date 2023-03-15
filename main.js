function preload()
{
    img = loadImage('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg')
}
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
}

function draw()
{
image(img,10,10,150,120)

stroke(0,128,0);
fill(0,128,0);
circle(350,50,70);
stroke(0,123,0);
fill(0,138,8);
rect(288,200,100,150)

}
