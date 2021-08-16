class Snow{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
        }
        this.image = loadImage("sprites/snow5.webp");
        this.body = Bodies.circle(x,y,this.radius, options);

        this.radius = 45;
        World.add (world,this.body);
    }

    changePosition(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:RandomSource(4,1400),y:RandomSource(0,50)});
        }
    }
    display(){
        push();

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();

    }
}