import { Expense, ExpenseWithoutId } from "../models/expense.model";


class ExpensesApi {

    private url = 'http://localhost:5000';

    getAllExpenses(){
        
    }

    createExpense(expense: ExpenseWithoutId){
        fetch(`${this.url}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(expense)
        })
        console.log(JSON.stringify(expense))
    }

    updateExpense(expense: any, id: string | undefined){
        fetch(`${this.url}/expenses/${id}`, {  // + id
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(expense)
        })
        console.log(JSON.stringify(expense))
    }

    deleteExpense(id: string){
        fetch(`${this.url}/expenses/${id}`, {  // + id
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            // },
        })
    }
}

export const expensesApi = new ExpensesApi();