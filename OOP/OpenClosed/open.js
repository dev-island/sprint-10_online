//  "type" field was removed because we don't need it more.
function Square(_size) {
  const size = _size;
  
  function getArea() {
    return size * size;
  }

  return {
    getArea,
  };
}

function Circle(_radius) {
  const radius = _radius;
  
  function getArea() {
    return Math.PI * radius * radius;
  }

  return {
    getArea,
  };
}

function Rect(_width, _height) {
  const width = _width;
  const height = _height;
  
  function getArea() {
    return width * height;
  }

  return {
    getArea,
  };
}

function getTotalAreas(shapes) {
  return shapes.reduce((total, shape) => {
    return (total += shape.getArea());
  }, 0);
}

// We can add a new shape without having to refactor the code above.
getTotalAreas([new Square(4), new Circle(2), new Rect(4, 5)]); // 62.83185307179586
