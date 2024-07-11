//   OUR SHAPE CLASSES LISTED BELOW

class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

//  RENDER FOR OUR SQUARE SHAPE 

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`
    }
}

//  RENDER FOR OUR CIRCLE SHAPE

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

//   RENDER FOR OUR TRIANGLE SHAPE

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

//  EXPORTS OUR CLASSES 

module.exports = { Square, Circle, Triangle };