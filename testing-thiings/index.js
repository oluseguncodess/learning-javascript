class Shape {
    constructor(name, sides, sideLength) {
         this.name = name
         this.sides = sides
         this.sideLength = sideLength
     }
     calcPerimeter() {
        let perimeter = this.sides * this.sideLength;
         console.log(perimeter);
     }
  
  }
  
  let triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter()

  class Square extends Shape {
    
    constructor(sideLength) {
        super("Square", 4)
        this.sideLength = sideLength
    }
    calcArea() {
        let area = Math.pow(this.sideLength, 2);
        console.log(area);
    }
  }

  let five = new Square(4);
  five.calcArea()


      