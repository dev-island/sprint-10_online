// The class has 2 reasons to change:

// if we want to change how we're enrolling in the course
// if we want to change how we notify the user

/* We can narrow this down to our notify function

What if we want to send an email or a push notification to notify the student instead of just printing the message in the console? We need to come back and make changes to the class.

What if we have 10 different classes and we want the notify functionality in them? We need to write the function 10 times.

And what if we want to change the function again? We need to make changes in 10 different places.

*/

class Student {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  enrollCourse(course) {
    this.courses.push(course);
    this.notify(course);
  }

  notify(course) {
    console.log(`${this.name}, you have successfully enrolled in ${course}.`);
  }
}

const Andrew = new Student("Andrew");
Andrew.enrollCourse("Physics");

// Output
// Andrew, you have successfully enrolled in Physics.
