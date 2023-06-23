"use strict";

console.log("Cookie shop calculation");

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
  "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"
];

function CookieStore(name, maxCust, avgSale) {
  this.storeName = name;
  this.minCustPerHour = 0; // Set default value
  this.maxCustPerHour = maxCust;
  this.avgCookiesPerHour = avgSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}

CookieStore.prototype.calcCustomerEachHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNum(this.minCustPerHour, this.maxCustPerHour));
  }
};

CookieStore.prototype.calcCookiesEachHour = function() {
  this.calcCustomerEachHour();
  for (let i = 0; i < hours.length; i++) {
    const cookies = Math.round(this.customersEachHour[i] * this.avgCookiesPerHour);
    this.cookiesEachHour.push(cookies);
    this.totalDailyCookies += cookies;
  }
};

const container = document.getElementById("container");

const seattle = new CookieStore("Seattle", 5, 4);

seattle.calcCookiesEachHour();

const article = document.createElement("article");
container.appendChild(article);

const h3 = document.createElement("h3");
h3.textContent = seattle.storeName;
article.appendChild(h3);

const ul = document.createElement("ul");
article.appendChild(ul);

for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = hours[i] + ": " + seattle.cookiesEachHour[i] + " cookies";
  ul.appendChild(li);
}

const totalLi = document.createElement("li");
totalLi.textContent = "Total: " + seattle.totalDailyCookies + " cookies";
ul.appendChild(totalLi);

// Once Seattle is working well, I will invoke the other stores.
const lima = new CookieStore("Lima", 23, 6.3);

lima.calcCookiesEachHour();

const limaArticle = document.createElement("article");
container.appendChild(limaArticle);

const limaH3 = document.createElement("h3");
limaH3.textContent = lima.storeName;
limaArticle.appendChild(limaH3);

const limaUl = document.createElement("ul");
limaArticle.appendChild(limaUl);

for (let i = 0; i < hours.length; i++) {
  const limaLi = document.createElement("li");
  limaLi.textContent = hours[i] + ": " + lima.cookiesEachHour[i] + " cookies";
  limaUl.appendChild(limaLi);
}

const limaTotalLi = document.createElement("li");
limaTotalLi.textContent = "Total: " + lima.totalDailyCookies + " cookies";
limaUl.appendChild(limaTotalLi);
