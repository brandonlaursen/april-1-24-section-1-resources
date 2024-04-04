let balance = 10;

// sub problems
let transaction = function (type, amount) {
  if (type === "withdraw") {
    balance = withdraw(balance, amount);
  } else if (type === "deposit") {
    balance = deposit(balance, amount);
  } else {
    console.log("You did not choose a valid transaction type");
  }

  return "Balance: " + balance;
};

// sub problems specific handles only withdraw
let withdraw = function (initialBalance, amount) {
  if (initialBalance - amount > 0) {
    console.log("Withdrawing:", amount);
    initialBalance -= amount;
  } else {
    console.log("Unable to complete transaction, not enough funds");
  }
  return initialBalance;
};

let deposit = function (initialBalance, amount) {
  if (amount < 10000) {
    console.log("Depositing:", amount);
    initialBalance += amount;
  } else {
    console.log(
      "UNABLE TO COMPLETE TRANSACTION, PLEASE WAIT WHILE WE REVIEW THIS ACTIVITY"
    );
  }
  return initialBalance;
};




function addition(num1, num2){
  return num1 + num2;
}

// console.log(addition(12, 50));// 62

// let res = addition(12, 50);
// console.log(res);// 62


function calculator(num1, num2, operation) {
  if (operation === "add") {
    let sum = addition(num1, num2);
    console.log(sum);// 22
    return sum
  } else if (operation === "subtract") {
    return num1 - num2;
  }
}

console.log(calculator(10, 12, "add"));// 22

// console.log(calculator(10, 12, "subtract"));
