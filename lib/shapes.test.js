//  SETS OUR REQUIRED FILE TO TEST THAT LIVES IN THE SAME LEVEL IN OUR ROOT PYRAMID

const { Square, Circle, Triangle } =  require('./shapes');

//  TESTS OUR SQUARE RENDER

test('Square rendering', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
});

//   TESTS OUR CIRCLE RENDER

test('Cirlce rendering', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

//   TESTS OUR TRIANGLE RENDER

test('Triangle rendering', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});