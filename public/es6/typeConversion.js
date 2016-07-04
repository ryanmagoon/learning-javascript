// Converting to numbers
const numStr = "33.3";
const num = Number(numStr);
console.log(`${numStr} was converted to ${num}.`);

const a = parseInt("16 volts", 10); // the " volts" is ignored, 16 is
                                    // parsed in base 10
const b = parseInt("3a", 16);       // parse hexadecimal 3a; result is 58
const c = parseInt("15.5 kph");     // the " kph" is ignored; parseFloat
                                    // always assumes base 10

const d = new Date();               // current date
const ts = d.valueOf();             // numeric value: milliseconds since
                                    // midnight, January 1, 1970 UTC

const b = true;
const n = b ? 1 : 0;

// Converting to String

const n = 33.5;
n;                      // 33.5 - a numbers
const s = n.toString();
s;                      // "33.5" - string

const arr = [1, true, "hello"];
arr.toString();                 // "1,true,hello"

//Converting to Boolean

const n = 0;            // "falsy" value
const b1 = !!n;         // false
const b2 = Boolean(n);  // false