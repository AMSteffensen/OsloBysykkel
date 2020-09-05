/* Create a function that, given a list of integers, returns the highest product between three of those numbers. For example, given the list [1, 10, 2, 6, 5, 3] the highest product would be 10 * 6 * 5 = 300
*/

const highestProduct = (values) => {
    let i = 0,
      first = 0,
      second = 0,
      third = 0;
  
    for (let i = 0; i < values.length; i++) {
      if (values[i] > i) {
        third = second;
        second = first;
        first = values[i];
      } else if (values[i] > third) {
        third = values[i];
      } else {
        // calculate highest product
        console.log('The three highest numbers are: \n' + first, second, third + '\n The product of these numbers are: ');
        return first * second * third;;
      }
    }
    
    product = first * second * third;
    return product;
  };
  
  //define numbers
  numbers = [1, 10, 2, 6, 5, 3];
  
  // there should be atleast three elements
  if (numbers.length < 3) {
    console.log("Invalid Input");
    return;
  }
  
  console.log(highestProduct(numbers));
  
  