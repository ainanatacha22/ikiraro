import React from "react";
import "../css/Item.css"

const Item = ({ data }) => {
    return (
        <div className="pulse border-2 px-3">
            <h2 className="text-xl md:text-2xl font-bold"> {data.name} </h2>



            <img className="w-[130px] md:w-[150px] lg:w-[170px]" src={data.image} />

            <p className="para text-lg md:text-xl"> {data.price} $</p>
        </div>
    );
};

export default Item;
