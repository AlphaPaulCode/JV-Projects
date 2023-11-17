let totalamount = document.getElementById("totalAmount");
let useramount = document.getElementById("userAmount");
const checkAmountButton = document.getElementById("checkAmount");
const totalAmountButton = document.getElementById("totalAmountButton");
const productTitle = document.getElementById("productTitle");
const errorMessage = document.getElementById("budgetError");
const productTitleError = document.getElementById("productTitleError");
const productCostError = document.getElementById("productCostError");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditureValue");
const list = document.getElementById("list");
let tempAmount = 0;

totalAmountButton.addEventListener("click", () => {
    tempAmount = totalamount.value;
    //empty or negative input
    if(tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    }else {
        errorMessage.classList.add("hide");
        //setBudget
        amount.innerHTML = tempAmount;
        //setBalance
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        //Clear Input Box
        totalamount.value = "";
    }
})