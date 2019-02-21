
// Studing variable scope 

// Implementing a function using the 'var' keyword
function doSomething() {
    // the variable 'i' scope looks for the closest function
    // which means that the variable is avaible to every element on this function
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally ' + i);
}

doSomething();

function doAnotherThing() {
    //  let variables look for the closest block
    //  so the variable declared in this for is ONLY available INSIDE the block
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally ' + i); // catches an error
}

doAnotherThing();