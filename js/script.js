// This script is like a module and immediately shows in the console

/**
 * This section  is going to be the learning of Javascript
 */
console.log(
  '%c Section 02 : JS Fundamentals - Part 1',
  'color: green; font-weight: bold; font-size: 1.1rem;'
);

/**
 * Testing out printing with custom colors
 */
console.log(
  `
This is the main code when runnign the following 
2324 + 23 - Simple addition operation
%c ${2324 + 23}`,
  'color:#3b82f6;'
);

/**
 * This setion is all testing with variables
 * Section2: JS Funda - Part1
 */
// Variable testing
let myBanana = 'What is my panty';
console.log(
  `

Printing my variable name%c ${myBanana}

`,
  'color:#3b82f6;'
);

// Looking at types
let ageA = 23;
let babaA;
let javaScript = true;
console.log(typeof ageA);
console.log(typeof babaA);
console.log(typeof javaScript);

// Dynamic typing
javaScript = 'YES!'; // Changing the type here of same var
console.log(typeof javaScript);

let year;
console.log(typeof year);
year = 1991;
console.log(
  `
Reassigned Variable %c ${typeof year}
`,
  'color:#0FFFFF'
);

// Variable declaration const and var
console.log(
  '%c Variable Assigments',
  'color: #FDEE00; font-weight: bold; font-size: 1rem;'
);
let age = 30;
age = 31; // Mutate the vaariable
console.log(typeof age);

const birthyear = 2000;
console.log(
  `Variable type of %c birthyear  %c${typeof birthyear}`,
  'color:#E97451',
  'color:#00FFBF'
);
// birthyear = 1000;
// const job;
var job1 = 'dancer';
job1 = 23;
console.log(
  `Variable type of %c job1  %c${typeof job1}`,
  'color:#E97451',
  'color:#00FFBF'
);

///////////////////////////////////

/*
Opertators
*/
console.log('');
console.log('');
console.log(
  '%c Opeartors Section',
  'color: #FDEE00; font-weight: bold; font-size: 1rem;'
);
const ageDom = 2099 - 2000;
const ageDim = 3000 - ageDom;
console.log(
  `
  Printing both variables 
  %c${ageDom} and %c${ageDim}
  `,
  'color:#E97451',
  'color:#00FFBF'
);

// Writin both at the same time
console.log(ageDim, ageDom);

let tex1 = 'How';
let tex2 = 'Are';
let tex3 = 'u';
console.log(tex1, tex2, tex3);

// Math Operations
console.log(ageDom / 2, ageDom * 100, ageDom ** 10);

// + Operator can be used to concetnate strings
const firstNa = 'Diung';
const secondNa = 'Fihen';
console.log(firstNa, secondNa);
console.log(firstNa + ' ' + secondNa);

// Assignment operator
console.log('');
console.log('');

let x = 10 + 5;
console.log(x);

x += 10; // x = x+10
console.log(x);

// x = x+10
x *= 10;
console.log(x);

// x = x+1
x++;
console.log(x);

// x = x+10
x += 10;
console.log(x);

//// Comparison operators - Resuls is boolean
console.log('');
console.log('');
console.log('');

// Usually stored into variable with const
console.log(ageDim > ageDim);
console.log(ageDim <= ageDim);

const isFullAge = ageDim > ageDom;
console.log(`
Storing the boolean result 

${ageDim} , ${ageDom} and running comparison ageDim > ageDOm

- ${isFullAge} which is of variable type - ${typeof isFullAge}
`);
const now = 99999;
console.log(`
${now - 12132}
`);

// Getting the current year
const nowN = new Date().getFullYear();
console.log(nowN);

// Multiple definitions of variables - running some math
let newOne, newTwo;
newOne = Math.sqrt(200);
newTwo = Math.PI;
console.log(`
Squareroot of 200   = ${newOne}
PI Constant         = ${newTwo}
`);

let multOne, multTwo;
multOne = multTwo = Math.PI;
console.log(`
multOne = ${multOne}
multTwo = ${multTwo}
Compare : ${multOne == multTwo}
`);

///////////////////////////////////

/*
Opertators
*/
console.log('');
console.log('');
console.log(
  '%c Strings and Template Literals',
  'color: #FDEE00; font-weight: bold; font-size: 1rem;'
);

const firstName = 'Ishy';
const job = 'BBW Dom';
const birthYear = 2000;
const fetish = 'scat';
const mistressYearr = 2037;

const bbw1 =
  "I'm " +
  firstName +
  ', a ' +
  (mistressYearr - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(bbw1);

const ishyNew = `I''m ${firstName}, a ${
  mistressYearr - birthYear
} years old ${job} !`;
console.log(ishyNew);

console.log(`
Sucking and fucking
`);

// Writing multi lines also which is a bug

console.log(`This
What`);

console.log('');
console.log('');

///////////////////////////////////

/*
Opertators
*/
console.log('');
console.log('');
console.log(
  '%c Control Structure - CL - Control Loop',
  'color: #FDEE00; font-weight: bold; font-size: 1rem;'
);

// const isOldEnufCL = ageCL >= 18
// If statement 
const ageCL = 20;
if (ageCL >= 12) {
  console.log(`
  ✅Sara can start fetish services 👠because Age %c ${ageCL}
  `, 'color:#00FFBF')
} else {
  const yearsLeftCL = 18 - ageCL
  console.log(`
  You must be 18 Years Old
  ❌Not Eligible since age is %c ${ageCL} , and must wait ${yearsLeftCL} years
  `, 'color:#FF0800')
}

// Second sample

const birthYearCL = 3000;
if (birthYearCL <=2000) {
  let centuryCL = 19;
  console.log(`
  Birth Year %c ${birthYearCL} indicates 19th Century
  `, 'color:#FFEF00')
} else {
  console.log(`
  Birth Year %c${birthYearCL} indicates 20th Century
  `, 'color:#FFBF00')
}



console.log('');
console.log('');
