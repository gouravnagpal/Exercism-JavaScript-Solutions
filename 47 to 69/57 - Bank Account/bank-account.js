export class BankAccount {
    constructor(deposit) {
        this.AccountStatus = false;
        this.AccountBalance = 0;
    }

    open() {
        if(this.AccountStatus){
            throw new ValueError;
        }
        else{
            this.AccountStatus = true;
            this.AccountBalance = 0;
        }
    }

    close() {
        if(this.AccountStatus){
            this.AccountStatus = false;
        }
        else{
            throw new ValueError;
        }
    }

    deposit(NewDeposite) {
        if(this.AccountStatus){
            if(NewDeposite < 0){
                throw new ValueError;
            }
            else{
                this.AccountBalance += NewDeposite
            }
        }
        else{
            throw new ValueError;
        }
    }

    withdraw(RequestedAmount) {
        if(this.AccountStatus){
            if(RequestedAmount > this.AccountBalance || RequestedAmount < 0){
                throw new ValueError;
            }
            else{
                this.AccountBalance -= RequestedAmount
            }
        }
        else{
            throw new ValueError;
        }
    }

    get balance() {
        if(this.AccountStatus){
            return this.AccountBalance;
        }
        else{
            throw new ValueError;
        }
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}