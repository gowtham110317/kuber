{
    console.log("Hello, World!");

    var oldstyle = "This is old way of creating a variable in js";

    let a = 10;
    let b = 20;

    let c = a + b;

    let ok = true;

    let name = "BMW Techworks";

    var oldstyle = "Again assigining a value to the string"; // recreating a variable

    {
        console.log(oldstyle);

        let name = "BMW Techworks, Tata is a part of it.";

        name = "BMW Techworks!, TATA is part of it."; // mutating the existing variable

        console.log(oldstyle, c, name);
    }

    const PI = 3.14;

    console.log(PI);

    // PI = 3.145; // this is mutating a value of a const which is an error

    console.log(10 / 0);

    let div = 0;

    console.log(a / div);

    let val;

    console.log(val);

    // ==========================
    // New Feature Function
    // ==========================
    function calculateArea(radius) {
        return PI * radius * radius;
    }

    let area = calculateArea(5);
    console.log("Area of Circle:", area);

    /*
        BUG EXAMPLE (inside multi-line comment)

        function buggyAddition(x, y) {
            return x - y; // BUG: should be x + y
        }

        console.log(buggyAddition(10, 20));
    */
}