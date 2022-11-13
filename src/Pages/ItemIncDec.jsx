import React, { useState } from 'react'

function ItemIncDec({ modifyQty, id }) {

    const [count, setCount] = useState(1);

    return (
        <div>

            {/* button for decrement */}
            <button onClick={() => {
                setCount(count - 1);
                modifyQty(id, 1);
            }}>-</button>

            {/* button to show count */}
            <button>{count}</button>

            {/* button for increment */}
            <button onClick={() => {
                setCount(count + 1);
                modifyQty(id, 1);
            }}>+</button>

        </div>
    )
}

export default ItemIncDec;