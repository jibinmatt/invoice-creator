/* 
1. Array to hold services requested
2. Buttons to add services to array
3. Place to display data from array - updated every time the array changes
4. Don't charge > once for some services
5. Total cost stays updated
6. Button to "send invoice" (reset)
Stetch: remove items after adding
*/

const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
const listUl = document.getElementById("list");
const priceUl = document.getElementById("prices");
const note = document.getElementById("notes");
const size = document.querySelector(".end");
const total = document.getElementById("total");
const invoiceBtn = document.getElementById("invoice-btn");

let listArr = [];
let priceArr = [];
let sum = 0;

size.style.width = "666px";

washCarBtn.addEventListener("click", function () {
  listArr.push("Wash Car");
  listUl.innerHTML += `<li>${listArr}</li>`;
  listArr = [];

  priceArr.push("$10");
  priceUl.innerHTML += `<li>${priceArr}</li>`;
  priceArr = [];

  sum += 10;
  total.innerHTML = `<span>$${sum}</span>`;

  note.textContent = "We accept cash, credit card, or PayPal";
  size.style.width = "500px";

  washCarBtn.disabled = true;
});

mowLawnBtn.addEventListener("click", function () {
  listArr.push("Mow Lawn");
  listUl.innerHTML += `<li>${listArr}</li>`;
  listArr = [];

  priceArr.push("$20");
  priceUl.innerHTML += `<li>${priceArr}</li>`;
  priceArr = [];

  sum += 20;
  total.innerHTML = `<span>$${sum}</span>`;

  note.textContent = "We accept cash, credit card, or PayPal";
  size.style.width = "500px";

  mowLawnBtn.disabled = true;
});

pullWeedsBtn.addEventListener("click", function () {
  listArr.push("Pull Weeds");
  listUl.innerHTML += `<li>${listArr}</li>`;
  listArr = [];

  priceArr.push("$30");
  priceUl.innerHTML += `<li>${priceArr}</li>`;
  priceArr = [];

  sum += 30;
  total.innerHTML = `<span>$${sum}</span>`;

  note.textContent = "We accept cash, credit card, or PayPal";
  size.style.width = "500px";

  pullWeedsBtn.disabled = true;
});

invoiceBtn.addEventListener("click", function () {
  arr = [];
  listUl.innerHTML = `<li>${listArr}</li>`;
  sum = 0;
  total.innerHTML = `<span>$${sum}</span>`;
  priceArr = [];
  priceUl.innerHTML = `<li>${priceArr}</li>`;

  washCarBtn.disabled = false;
  mowLawnBtn.disabled = false;
  pullWeedsBtn.disabled = false;
});
