// Handling Event for Deposit Button

const depositButton = document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //deposit handling
    const depositInput = document.getElementById("deposit-input-field");
    const depositValueInNUmber = parseInt(depositInput.value);
    if (isNaN(depositValueInNUmber) || depositValueInNUmber < 0) {
      depositInput.value = "";
      return window.alert("enter a valid number");
    }
    depositInput.value = "";
    const deposit = document.getElementById("deposit-total");
    const depositInNumber = parseFloat(deposit.innerText);
    const totalDepositCalc = depositValueInNUmber + depositInNumber;

    deposit.innerText = totalDepositCalc;
    // current balance handling

    const getBalance = document.getElementById("balance-total");
    const balanceInNumber = parseFloat(getBalance.innerText);
    const totalBalanceCalc = totalDepositCalc + balanceInNumber;

    getBalance.innerText = totalBalanceCalc;
  });
//Event handling for withdraw button
const withdrawButton = document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // total withdraw handling
    const withdrawInput = document.getElementById("withdraw-input-field");
    const withdrawInputInNumber = parseFloat(withdrawInput.value);
    //catching current balance id and converting it in a number
    const getBalance = document.getElementById("balance-total");
    const balanceInNumber = parseFloat(getBalance.innerText);

    if (isNaN(withdrawInputInNumber) || withdrawInputInNumber < 0) {
      withdrawInput.value = "";
      return window.alert("Enter a valid Number");
    }
      else if(withdrawInputInNumber > balanceInNumber){

        withdrawInput.value='';
        return window.alert('insufficient funds');
      }
    
    //current withdraw
    const withdraw = document.getElementById("withdraw-total");
    const withdrawInNumber = parseFloat(withdraw.innerText);
    const totalWithdrawCalc = withdrawInNumber + withdrawInputInNumber;
    withdraw.innerText = totalWithdrawCalc;
    withdrawInput.value = "";

    // handling balance

    const currentBalanceCalc = balanceInNumber - withdrawInputInNumber;
    getBalance.innerText = currentBalanceCalc;
  });
