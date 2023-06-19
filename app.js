// Create an object representing a location
var location = {
    minCustomers: 20,
    maxCustomers: 60,
    avgCookiesPerCustomer: 4.5,
    customersPerHour: [],
    cookiesPurchasedPerHour: [],
  
    // Method to generate a random number of customers per hour
    generateCustomersPerHour: function() {
      for (var hour = 0; hour < 14; hour++) {
        var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
        this.customersPerHour.push(customers);
      }
    },
  
    // Calculate and store the simulated amounts of cookies purchased for each hour
    calculateCookiesPurchasedPerHour: function() {
      for (var hour = 0; hour < 14; hour++) {
        var cookies = Math.round(this.customersPerHour[hour] * this.avgCookiesPerCustomer);
        this.cookiesPurchasedPerHour.push(cookies);
      }
    },
  
    // Display the values of the cookies purchased per hour as an unordered list in the browser
    displayCookiesPurchased: function() {
      var locationList = document.createElement('ul');
      for (var hour = 0; hour < 14; hour++) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Hour ' + (hour + 6) + ': ' + this.cookiesPurchasedPerHour[hour] + ' cookies';
        locationList.appendChild(listItem);
      }
      document.body.appendChild(locationList);
    }
  };
  
  // Generate the random number of customers per hour
  location.generateCustomersPerHour();
  
  // Calculate the cookies purchased per hour
  location.calculateCookiesPurchasedPerHour();
  
  // Display the values of cookies purchased per hour in the browser
  location.displayCookiesPurchased();
  
  // Create an object representing a location
var Location = function(name, minCustomers, maxCustomers, avgCookiesPerSale) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.customersPerHour = [];
    this.cookiesPurchasedPerHour = [];
    this.totalCookies = 0;
  };
  
  // Method to generate a random number of customers per hour
  Location.prototype.generateCustomersPerHour = function() {
    for (var hour = 0; hour < 14; hour++) {
      var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.customersPerHour.push(customers);
    }
  };
  
  // Calculate and store the simulated amounts of cookies purchased for each hour
  Location.prototype.calculateCookiesPurchasedPerHour = function() {
    for (var hour = 0; hour < 14; hour++) {
      var cookies = Math.round(this.customersPerHour[hour] * this.avgCookiesPerSale);
      this.cookiesPurchasedPerHour.push(cookies);
      this.totalCookies += cookies;
    }
  };
  
  // Display the values of the cookies purchased per hour as an unordered list in the browser
  Location.prototype.displayCookiesPurchased = function() {
    var locationList = document.createElement('ul');
    locationList.innerHTML = this.name;
  
    for (var hour = 0; hour < 14; hour++) {
      var listItem = document.createElement('li');
      listItem.textContent = (hour + 6) + 'am: ' + this.cookiesPurchasedPerHour[hour] + ' cookies';
      locationList.appendChild(listItem);
    }
  
    var totalItem = document.createElement('li');
    totalItem.textContent = 'Total: ' + this.totalCookies + ' cookies';
    locationList.appendChild(totalItem);
  
    document.body.appendChild(locationList);
  };
  
  // Create location objects
  var seattle = new Location('Seattle', 23, 65, 6.3);
  var tokyo = new Location('Tokyo', 3, 24, 1.2);
  var dubai = new Location('Dubai', 11, 38, 3.7);
  var paris = new Location('Paris', 20, 38, 2.3);
  var lima = new Location('Lima', 2, 16, 4.6);
  
  // Generate the random number of customers and calculate the cookies purchased for each location
  seattle.generateCustomersPerHour();
  seattle.calculateCookiesPurchasedPerHour();
  
  tokyo.generateCustomersPerHour();
  tokyo.calculateCookiesPurchasedPerHour();
  
  dubai.generateCustomersPerHour();
  dubai.calculateCookiesPurchasedPerHour();
  
  paris.generateCustomersPerHour();
  paris.calculateCookiesPurchasedPerHour();
  
  lima.generateCustomersPerHour();
  lima.calculateCookiesPurchasedPerHour();
  
  // Display the values of cookies purchased per hour for each location in the browser
  seattle.displayCookiesPurchased();
  tokyo.displayCookiesPurchased();
  dubai.displayCookiesPurchased();
  paris.displayCookiesPurchased();
  lima.displayCookiesPurchased();
  