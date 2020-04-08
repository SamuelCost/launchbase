const user = {
    name: "Samuel",
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)
    if (transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    }

    if (transaction.type === 'debit'){
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(typeTransaction){
    let higherValue = 0
    for (let i = 0; i < user.transactions.length; i++){
        if (user.transactions[i].type === typeTransaction){
            if (user.transactions[i].value > higherValue){
                higherValue = user.transactions[i].value
            }
        }
    }
    console.log(`type: ${typeTransaction}, value: ${higherValue}`)
}

function getAverageTransactionValue(){
    let i
    let sum = 0
    for (i = 0; i < user.transactions.length; i++){
        sum = sum + user.transactions[i].value
    }
    const average = sum / (i+1)
    console.log(average)
}

function getTransactionsCount(){
    let countCredit = 0
    let countDebit = 0

    for (i = 0; i < user.transactions.length; i++){
        if (user.transactions[i].type == 'credit'){
            countCredit = countCredit + 1
        }
        if (user.transactions[i].type == 'debit'){
            countDebit = countDebit + 1
        }
    }
    console.log(`credit: ${countCredit}, debit: ${countDebit}`)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }