import React from 'react';
import className from 'classname';

function Task({ item, onCheck }) {
    const handleChange = () => onCheck(item);

    return (
        <label className="panel-block">
            <input
            type ="checkbox"
            checked={item.done}
            onChange={handleChange}
            />
            <span
             classNmae={classNmaes({
                 'has-text-grey-light': item.done
             })}
             >
                 {item.text}
             </span>
        </label>
    );
}

export default Task;