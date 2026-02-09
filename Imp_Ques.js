// 1. Declare an array
let arr = [];

// 2. Declare an array with more than 5 elements
let numbers = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of the array
console.log(numbers.length);

// 4. First, middle and last item
console.log(numbers[0]);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[numbers.length - 1]);

// 5. Array with different data types (>5 elements)
let mixedArray = [1, "Hello", true, null, 5.5, "JS"];
console.log(mixedArray.length);

// 6. Declare itCompanies array
let itCompanies = [
  "Facebook", "Google", "Microsoft",
  "Apple", "IBM", "Oracle", "Amazon"
];

// 7. Print the array
console.log(itCompanies);

// 8. Number of companies
console.log(itCompanies.length);

// 9. First, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print each company
for (let company of itCompanies) {
  console.log(company);
}

// 11. Print each company in uppercase
for (let company of itCompanies) {
  console.log(company.toUpperCase());
}

// 12. Print as a sentence
console.log(
  itCompanies.slice(0, -1).join(", ") +
  " and " +
  itCompanies[itCompanies.length - 1] +
  " are big IT companies."
);

// 13. Check if a company exists
let searchCompany = "Google";

if (itCompanies.includes(searchCompany)) {
  console.log(searchCompany);
} else {
  console.log("Company is not found");
}

// 14. Filter companies with more than one 'o' (without filter)
let companiesWithMoreThanOneO = [];

for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    companiesWithMoreThanOneO.push(company);
  }
}
console.log(companiesWithMoreThanOneO);

// 15. Sort the array
console.log(itCompanies.sort());

// 16. Reverse the array
console.log(itCompanies.reverse());

// 17. Slice first 3 companies
console.log(itCompanies.slice(0, 3));

// 18. Slice last 3 companies
console.log(itCompanies.slice(-3));

// 19. Slice middle company/companies
let middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies.slice(middleIndex, middleIndex + 1));

// 20. Remove the first company
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle company
let mid = Math.floor(itCompanies.length / 2);
itCompanies.splice(mid, 1);
console.log(itCompanies);

// 22. Remove the last company
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);
