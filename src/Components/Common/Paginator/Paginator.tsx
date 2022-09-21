import React from 'react';
import {v1} from 'uuid';
import styles from './Paginator.module.css';

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount,pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(el => <span key={v1()}
                               className={currentPage === el ? styles.selectedPage : ''}
                               onClick={(event) => onPageChanged(el)}>{el}</span>)}
    </div>
}