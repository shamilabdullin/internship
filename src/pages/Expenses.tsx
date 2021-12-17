import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Expense } from '../models/expense.model';
import { expensesApi } from '../sevices-api/expenses-api';
import { AddExpenseModal } from './AddExpenseModal';
import styles from './expenses.module.scss';
import { Button } from "react-bootstrap";
import { UpdateExpenseModal } from './UpdateExpense';


const initialExpenses: Expense[] = [
    {   _id: '',
        description: 'string',
        amount: 0,
        category: '',
        date: '',
        createdAt: '',
        updatedAt: ''
    }
];

export function Expenses(): JSX.Element {

    const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [showUpdateExpenseModal, setShowUpdateExpenseModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:5000/expenses'
        fetch(url)
            .then(res => res.json())
            .then(
                res => setExpenses(res),
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        console.log(expenses.length)
    }, [])
    
    const handleAddShow = () => {
        setShowAddExpenseModal(true);
    }

    const handleAddClose = () => {
        setShowAddExpenseModal(false);
    }

    const handleUpdateShow = () => {
        setShowUpdateExpenseModal(true);
    }

    const handleUpdateClose = () => {
        setShowUpdateExpenseModal(false);
    }

    const handleAdd = (event: React.FormEvent<HTMLFormElement>, id?: string) => {
        event.preventDefault()
        const target = event.currentTarget;
        // @ts-ignore
        const formElements = target.elements as typeof target.elements & {
          description: { value: string },
          amount: { value: number },
          category: { value: string },
        }
        if (true) {
        const date = new Date().toString()  
        const expense = {
            description: formElements.description.value,
            amount: formElements.amount.value,
            category: formElements.category.value,
            date: date,
        };
        expensesApi.createExpense(expense);
        //   addOrder(order);
        //   invalidName();
        //   invalidCar();
        //   invalidPhone();
          }
    };

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>, id: string) => {
        event.preventDefault()
        const target = event.currentTarget;
        // @ts-ignore
        const formElements = target.elements as typeof target.elements & {
          description: { value: string },
          amount: { value: number },
          category: { value: string },
        }

        const date = new Date().toString()  
        const expense = {
            description: formElements.description.value,
            amount: formElements.amount.value,
            //category: formElements.category.value,
            date: date,
            //_id: id
            };
        expensesApi.updateExpense(expense, id);

        //   addOrder(order);
        //   invalidName();
        //   invalidCar();

    };

    const handleDelete = (expenseId: string) => {
        setIsLoaded(true);
        expensesApi.deleteExpense(expenseId);
        setIsLoaded(false);
    }

    return(
        <div className={styles.expenses}>
            <Header />
            {error ? 
                <div>Error</div> :
                    isLoaded ? 
                        <div>Loading...</div> :
                        <>
                            <h1>List Of All Expenses</h1>
                            <AddExpenseModal 
                                handleClose={handleAddClose}
                                handleShow={handleAddShow}
                                show={showAddExpenseModal}
                                handleSubmit={handleAdd}
                            />
                            <ul>
                                {expenses.map((expense) => (
                                    <li key={expense._id}>
                                        {expense.description} - 
                                        {' ' + expense.amount}
                                        <UpdateExpenseModal 
                                            handleClose={handleUpdateClose}
                                            handleShow={handleUpdateShow}
                                            show={showUpdateExpenseModal}
                                            handleSubmit={(e) => handleUpdate(e, expense!._id)}
                                        />
                                        <Button variant="danger" onClick={(e) => handleDelete(expense._id)}>
                                            Delete
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </>
            }
        </div>
    );  
}