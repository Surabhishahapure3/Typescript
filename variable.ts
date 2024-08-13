/*
let a : any = "Surabhi"

console.log(a.toUpperCase())
export{}
*/


//unknown:  The unknown type is similar to any in that it can hold any value, but it is more type-safe. 
// You can't perform any operations on a value of type unknown without first narrowing its type through type checks or type assertions.
/*
let a : unknown = "Surabhi";

if(typeof a === "string")
{
    console.log(a.toUpperCase())
}
// export{}

*/

// NEVER:   never effectively throws an error whenever it is defined.
// It is used to indicate that a function or a variable never returns or holds a value, often because the function throws
//  an error, enters an infinite loop, or performs some other action that prevents it from finishing normally.
/*
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Something went wrong!");
export{}  
*/