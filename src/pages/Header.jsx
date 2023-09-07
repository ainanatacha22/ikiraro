// import React from "react";

// const Header = () => {
//     return (
//         <div>
//             <input type="text" placeholder="Search..." />
//         </div>
//     );
// };

// export default Header;

import React, { useState } from 'react'

const Header = () => {
    const [change, setChange] = useState('')
    const handleChange = (e) => {
        setChange(e.target.value)
    }

    return (
        <div className='my-4 mx-4'>
            <input type="text" placeholder="Search......." onChange={e => handleChange(e)} />
        </div>
    );
};

export default Header;
