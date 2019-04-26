/**
 * Perform a deposit or withdrawal from a bank account
namespace org.acme.moneytransfer
 * @param {org.acme.tradenetwork.AccountTransaction} transaction
 * @transaction
 */

function execTransaction(transaction) {   
    // initialize array of transactions if none exist

    if(transaction.account.transactions == null) {
        transaction.account.transactions = [];
    }

    // determine whether this is a deposit or withdrawal and execute accordingly

    if(transaction.operation == 'Withdraw') {
        transaction.account.balance -= transaction.amount;
    } else if(transaction.operation == 'Deposit') {
        transaction.account.balance += transaction.amount;
    }

    // add the current transaction to the bank account's transaction history

    transaction.account.transactions.push(transaction);
    


    // update the registry 

    return getAssetRegistry('org.acme.moneytransfer.BankAccount')
    .then(function(regBankAccount) {
        return regBankAccount.update(transaction.account);
    });
}