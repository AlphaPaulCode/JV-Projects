const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".incomeTotal");
const outcomeTotalEl = document.querySelector(".outcomeTotal");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

//select Btns
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//input Bts
const addExpense = document.querySelector(".addExpense");
const expenseTitle = document.querySelector("expenseTitleInput");
const expenseAmount = document.querySelector("expenseAmountInput");

const addIncome = document.querySelector(".addIncome");
const incomeTitle = document.querySelector("incomeTitleInput");
const incomeAmount = document.querySelector("incomeAmountInput");

//Variables 
let Entry_List = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";

//Event Listeners
expenseBtn.addEventListener("click", function(){
    show(expenseEl);
    hide([incomeEl, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
})
incomeBtn.addEventListener("click", function(){
    show(incomeEl);
    hide([expenseEl, allEl]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
})
allBtn.addEventListener("click", function(){
    show(allEl);
    hide([expenseEl, incomeEl]);
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
})

//Helpers
function show(element){
    element.classList.remove("hide");
}
function hide(elements){
    elements.array.forEach(element => {
        element.classList.add("hide")    
    });
}
function active(element){
    element.classList.add("active");
}
function inactive(elements){
    elements.array.forEach(element => {
        element.classList.remove("active");
    });
}
