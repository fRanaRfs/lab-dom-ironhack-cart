// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceElement = product.querySelector('.price span');
  let price = Number (priceElement.innerHTML);

  let quantityElement = product.querySelector('.quantity input')
  let quantity = Number (quantityElement.value)
  let subtotal = price * quantity
  let subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerHTML = subtotal
  return subtotal

}

function calculateAll()  {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelectorAll('.product');
  //updateSubtotal(singleProduct);
  // end of test



//// For each para recorrer updateSubtotal ////
 let allItems = document.querySelectorAll('.product');
 allItems.forEach((item)=>{updateSubtotal(item)});
//////////////////////////////////////////////
let productsElements = document.querySelectorAll('.product');
let total = updateSubtotal(productsElements[1]);
let totalElement = document.querySelector('#total-value span');
totalElement.innerText = total;




//let totalValueElement = document.querySelector('#total-value span');
//let totalValue = Number (totalValueElement.value);
//let total = totalValue + totalValueElement.innerText;
//return total;


  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
