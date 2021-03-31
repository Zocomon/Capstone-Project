class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 300,
        }
// this.sling1 = loadImage("sprites/sling1.png");
//this.sling2 = loadImage("sprites/sling2.png");
//this.sling3 = loadImage("sprites/sling3.png");




        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

   /* fly(){
        this.sling.bodyA = null;
    }/
      
    attach(body){
this.sling.bodyA = body;
    }*/

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
         

        
                push();
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           stroke(49,23,8);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop()
          
} 
}