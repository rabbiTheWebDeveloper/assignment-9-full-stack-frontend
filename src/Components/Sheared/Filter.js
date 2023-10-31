import React from 'react';

const Filter = ({sortingOptions, selectedValue , setSelectedValue}) => {
  

    const handleChange = (e) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
    };
    return (
        <div className="best-selling-finter">
            <h4>Filter</h4>
            <select name="sorting" value={selectedValue} onChange={handleChange}>
                {sortingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;