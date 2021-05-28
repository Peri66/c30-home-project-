class Polygon{
    /*constructor(x, y, width, height) {
        var options = {
                     
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.polygon(this.x, this.y, this.width, this.height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        //var pos= this.body.position;
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //rectMode(CENTER);
        image(this.image,x,y,0,0);
        pop();
      }
*/

	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		
		this.image=loadImage("polygon.png");
		this.body=Bodies.polygon(this.x, this.y, 50,50,options)
       
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			//ellipseMode(RADIUS)
			//image(this.image, 0,0,this.r*2, this.r*2)
            image(this.image, 0,0,50,50)
			pop()
			
	}

}
    