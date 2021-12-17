import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { ICategory } from '../models/category.model';
import styles from './categories.module.scss';

const initialCategories: ICategory[] = [
    {   _id: '',
        title: ''
    }
];

export function Categories(): JSX.Element {

    const [categories, setCategories] = useState(initialCategories);

    useEffect(() => {
        const url = 'http://localhost:5000/categories'
        fetch(url)
            .then(res => res.json())
            .then(res => setCategories(res))
    })
    console.log(categories[0])
    return(
        <div className={styles.categories}>
            <Header />
            <h1>List Of All Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>
                        <p>Title - {category.title}    ID - {category._id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}