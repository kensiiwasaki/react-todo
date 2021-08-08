import React from 'react';
import className from 'classname';

const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

function Filter({ value, onChange }) {
    const handClick = (key, e) => {
        e.preventDefault();
        onChange(key);
    };

    return (
        <div className="panel-tabs">
            {['ALL', 'TODO', 'DONE'].map(key => (
                <a 
                key={key}
                href={`#${key}`}
                onClick={handleClick.bind(null, key)}
                className={className({ 'is-active': value === key })}
                >
                    {capitalize(key)}
                </a>
            ))}
        </div>
    );
}

export default Filter;