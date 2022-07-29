import React, { FC } from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
    currentPage: number;
    setCurrentPage: (value: number) => void;
    lastPage: number;
};

const Pagination: FC<PaginationProps> = ({ currentPage, setCurrentPage, lastPage }) => {
    return (
        <div className={styles.container}>
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className={currentPage === 1 ? styles.disabled : styles.button}
                disabled={currentPage === 1}>
                Prev
            </button>

            {Array(5)
                .fill(0)
                .map((item, index) => {
                    const page = currentPage - 2 + index;

                    if (page > 0 && page <= lastPage)
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(page)}
                                className={page === currentPage ? styles.active : styles.button}>
                                {page}
                            </button>
                        );
                })}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className={currentPage === lastPage ? styles.disabled : styles.button}
                disabled={currentPage === lastPage}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
