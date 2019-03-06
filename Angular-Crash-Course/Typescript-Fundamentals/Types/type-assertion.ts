//  By default, if you declare a variable without initialize it
//  the type of the variable will be 'any'

let message; // type any

//  After initialize the variable later in the code
//  the variable won't get access to the embedded methods of it's type
message = 'abc'; 

// The variable 'message', doesn't get the 'endsWith' method that any variable of type string gets
//  because if was previously declared without an initialization

let noEndsWith = message.endsWith('c'); // nop


// The solution to this problem is to use Type Assertion
//  basically you declare the type of the variable in order to use it's methods
let endsWithC = (<string>message).endsWith('c'); // most used
let alternativeWay = (message as string).endsWith('c');