// input field function
const inputData = (inputFieldName) => {
        const inputField = getId(inputFieldName + "-input");
        let inputValue = parseInt(inputField.value);
        inputField.value = 0;
        if (inputValue >= 0) {
            return inputValue;
        } else {
            alert(`you are wrong data input in ${inputFieldName} .`);
        }

    }
    // function getid
const getId = (idName) => {
    let innerText = document.getElementById(idName);
    return innerText
};

// javascript events
getId('calculate-button').addEventListener('click', () => {
    const expensesBalance = getId('expenses-balance');
    expensesBalance.innerText = inputData('rent') + inputData('food') + inputData('clothes');
    const totalExpenses = parseInt(expensesBalance.innerText);
    // return balance 
    const balance = getId('balance');
    balance.innerText = inputData('income') - totalExpenses;
});

getId('save-button').addEventListener('click', () => {
    const balance = getId('balance')
    const saveBalance = getId('save-balance').innerText = Math.round(parseInt(balance.innerText) * inputData('save') / 100);
    getId('remaing-balance').innerText = Math.round(parseInt(balance.innerText) - saveBalance);

});