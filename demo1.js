{
    console.log("Hello, World!");

    var oldstyle = "This is old way of creating a variable in js";

    let a = 10;
    let b = 20;

    let c = a + b;

    let ok = true;

    let name = "BMW Techworks";

    var oldstyle = "Again assigning a value to the string"; // recreating a variable

    {
        console.log(oldstyle);

        let name = "BMW Techworks, Tata is a part of it.";

        name = "BMW Techworks!, TATA is part of it."; // mutating the existing variable

        console.log(oldstyle, c, name);
    }

    const PI = 3.14;

    console.log(PI);

    // PI = 3.145; // Error: Assignment to constant variable

    console.log(10 / 0);

    let div = 0;

    console.log(a / div);

    let val;

    console.log(val);

    // Array Example
    let cars = ["BMW", "Audi", "Mercedes"];
    console.log("Cars:", cars);

    // Array methods
    cars.push("Tesla");
    console.log("After push:", cars);

    // Object Example
    let employee = {
        id: 101,
        empName: "Gowtham",
        company: "BMW Techworks",
        isActive: true
    };

    console.log("Employee:", employee);

    // Function Example
    function add(x, y) {
        return x + y;
    }

    console.log("Addition:", add(15, 25));

    // Arrow Function
    const multiply = (x, y) => x * y;
    console.log("Multiplication:", multiply(5, 6));

    // Template Literals
    console.log(`Welcome ${employee.empName} to ${employee.company}`);

    // Conditional Statement
    if (ok) {
        console.log("Status: Active");
    } else {
        console.log("Status: Inactive");
    }

    // For Loop
    for (let i = 1; i <= 5; i++) {
        console.log("Count:", i);
    }

    // forEach Loop
    cars.forEach((car, index) => {
        console.log(`Car ${index + 1}: ${car}`);
    });

    // Destructuring
    let [car1, car2] = cars;
    console.log("First Car:", car1);
    console.log("Second Car:", car2);

    // Spread Operator
    let moreCars = [...cars, "Volvo", "Jaguar"];
    console.log("More Cars:", moreCars);

    // Map Example
    let numbers = [1, 2, 3, 4, 5];
    let squares = numbers.map(num => num * num);
    console.log("Squares:", squares);

    // Promise Example
    let promise = new Promise((resolve) => {
        resolve("Promise resolved successfully!");
    });

    promise.then(result => console.log(result));

    // Date Example
    let today = new Date();
    console.log("Current Date:", today);

    // Type Checking
    console.log(typeof a);
    console.log(typeof name);
    console.log(typeof ok);
    console.log(typeof employee);

    console.log("End of Program");
}

console.log("Hello");


console.log("Common feature");