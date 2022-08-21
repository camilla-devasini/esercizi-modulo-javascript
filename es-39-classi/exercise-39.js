// Definire la classe `AreaCalculator` che, tramite un metodo statico, si occupa di calcolare
// l'area della figura passata come parametro.
// Il metodo deve essere capace di calcolare l'area del quadrato, rettangolo e cerchio.

class Square {
  constructor(side) {
    this.side = side;
  }
  area() {   
  return this.side * this.side;
    }
}


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}


class Circle {
  constructor(radius) {
    this.radius = radius;
   
  }
  area() {
    return this.radius * this.radius * Math.PI;
  }
}

class AreaCalculator {
  
    static calculate(figure) {
      return figure.area();
    }
}
  
const square = new Square(4); // square is an object with properties: side = 4, area = 4*4 = 16
const rectangle = new Rectangle(4, 2); //rectangle is an object with properties: width: 4, height: 2, area = 4*2 = 8
const circle = new Circle(5); // circle is an object with properties: radius = 5, area = 5*5*PI = 78.53

console.log(AreaCalculator.calculate(square)); // calculate refers to square object (cerated through Square class) --> returns square object method area() 
console.log(AreaCalculator.calculate(rectangle)); 
console.log(AreaCalculator.calculate(circle));