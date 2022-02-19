// input field function
const inputData = (inputFieldName) => {
    const inputField = document.getElementById(inputFieldName + "-input");
    let inputValue = parseInt(inputField.value);
    inputField.value = 0;
    return inputValue;

}

// javascript events
document.getElementById('calculate-button').addEventListener('click', () => {
    const expensesBalance = document.getElementById('expenses-balance');
    expensesBalance.innerText = inputData('rent') + inputData('food') + inputData('clothes');
    const totalExpenses = parseInt(expensesBalance.innerText);
    // return balance 
    const balance = document.getElementById('balance');
    balance.innerText = inputData('income') - totalExpenses;
});