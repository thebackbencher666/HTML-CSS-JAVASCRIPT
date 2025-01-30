const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const addExpenseButton = document.getElementById("addExpense");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// Retrieve expenses from local storage or initialize an empty array
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to render expenses
function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach((expense, index) => {
        total += parseFloat(expense.amount);
        
        const li = document.createElement("li");
        li.innerHTML = `
            ${expense.name} - $${expense.amount} (${expense.category})
            <button class="delete-btn" onclick="deleteExpense(${index})">X</button>
        `;

        expenseList.appendChild(li);
    });

    totalAmount.textContent = total.toFixed(2);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Function to add a new expense
addExpenseButton.addEventListener("click", () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    expenses.push({ name, amount, category });
    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = 0;
    
    renderExpenses();
});

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}

// Initial rendering of expenses
renderExpenses();
