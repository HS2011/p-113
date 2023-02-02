function preload(){
dogecoin = loadImage("Doge.jpg")
}
function setup(){
createCanvas(700,500)

}
function draw(){
fill("red")
circle(50,50,100)
circle(50, 450, 100)
circle(650,50,100)
circle(650, 450, 100)
noFill()
fill("green")
rect(100,40,500,20)
rect(100,440,500,20)
rect(640,100,20,300)
rect(40,100,20,300)
image(dogecoin, 200, 100, 300, 300)
}