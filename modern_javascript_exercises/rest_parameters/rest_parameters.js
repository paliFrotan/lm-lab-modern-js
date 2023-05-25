// Instructions can be found in rest_parameters.md

export const add = (...theArgs) =>{
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
 // return a + b;
}

//add(1, 2, 3, 4, 5);

//module.exports = add;
