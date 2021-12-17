export interface Expense{
    _id: string
    description: string,
    amount: number,
    category: string,
    date: string,
    createdAt?: string,
    updatedAt?: string
}

export interface ExpenseWithoutId {
    description: string,
    amount: number,
    category: string,
    date: string,
    createdAt?: string,
    updatedAt?: string
}