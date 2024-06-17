import React from 'react';
import '../styles.css'; // Adjust the path as needed

const Filters = ({ filter, onChangeFilter }) => {
    return (
        <div className="filters">
            <input
                type="radio"
                id="all"
                value="all"
                checked={filter === 'all'}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
            <label htmlFor="all">All Companies</label>

            <input
                type="radio"
                id="withRemarks"
                value="withRemarks"
                checked={filter === 'withRemarks'}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
            <label htmlFor="withRemarks">Companies with Remarks</label>

            <input
                type="radio"
                id="withoutRemarks"
                value="withoutRemarks"
                checked={filter === 'withoutRemarks'}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
            <label htmlFor="withoutRemarks">Companies with No Remarks</label>
        </div>
    );
};

export default Filters;
