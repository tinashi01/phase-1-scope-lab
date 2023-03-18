var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'karen';

function upperCaseCustomerName() {
   return customerName=customerName.toUpperCase();
}

function setBestCustomer() {
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'kyle';
}