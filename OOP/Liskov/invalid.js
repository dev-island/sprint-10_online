// T
class Bird {
  fly() {
    console.log('I can fly')
  }
}

// S
class Duck extends Bird {
  quack() {
    console.log('I can quack')
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('I can\'t fly')
  }

  swim() {
    console.log('I can swim')
  }
}

function makeBirdFly(bird) {
  bird.fly()
}

const duck = new Duck()
const penguin = new Penguin()

makeBirdFly(duck)
// This fails because penguins can't fly, this violates the Liskov Substitution Principle
// Because we can't substitute a penguin for a bird
makeBirdFly(penguin)
