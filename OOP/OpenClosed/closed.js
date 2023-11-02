function Square(_size) {
  const size = _size;
  const type = "square";

  return {
    size,
    type,
  };
}

function Circle(_radius) {
  const radius = _radius;
  const type = "circle";

  return {
    radius,
    type,
  };
}

function Rect(_width, _height) {
  const width = _width;
  const height = _height;
  const type = "rect";

  return {
    width,
    height,
    type,
  };
}

function getTotalAreas(shapes) {
  return shapes.reduce((total, shape) => {
    switch (shape.type) {
      case "square":
        return (total += shape.size * shape.size);
      case "circle":
        return (total += Math.PI * shape.radius * shape.radius);
      case "rect":
        return (total += shape.width * shape.height);
      default:
        return total;
    }
  }, 0);
}

// We would have to refactor the code above every time we add a new shape.
getTotalAreas([new Square(4), new Circle(2), new Rect(4, 5)]); // 62.83185307179586

// We can use the Open/Closed Principle to make this code more extensible.
// Path: OOP/OpenClosed/open.js
