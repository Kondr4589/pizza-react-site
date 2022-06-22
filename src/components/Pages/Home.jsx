import React, {useEffect, useState} from 'react';

import Categories from "../Categories";
import Sort from "../Sort";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../Pagination";


const Home = ({searchValue}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const [categoryActiveId, setCategoryActiveId] = useState(0)
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    })


    useEffect(() => {
        setIsLoading(true)

        const sortBy = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        const category = categoryActiveId > 0 ? `category=${categoryActiveId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://629f69d9461f8173e4e901aa.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
        )
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryActiveId, sortType, searchValue, currentPage])
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={categoryActiveId}
                    onChangeCategory={(id) => setCategoryActiveId(id)}
                />
                <Sort
                    sortValue={sortType}
                    onChangeSort={(id) => setSortType(id)}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </div>
    );
};

export default Home;