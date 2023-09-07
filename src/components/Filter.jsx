import React, { useState } from "react";


const Filter = ({ filtersValues, setFiltersValues }) => {
    return (
        <div className="w-full">


            <div className="w-full m-auto flex flex-col items-center space-y-2 pt-2 pb-6 bg-neutral-300">
                <h1 className="font-bold">FILTER</h1>

                <select className="border rounded-lg bg-white w-52  px-2"
                    onChange={(e) => {
                        setFiltersValues({
                            ...filtersValues, type: e.target.value
                        })
                    }}>
                    <option disabled selected>Type</option>
                    <option value="nike">nike</option>
                    <option value="adidas">adidas</option>
                    <option value="converse">converse</option>
                </select>

                <select className="border rounded-lg bg-white w-52  px-2"
                    onChange={(e) => {
                        setFiltersValues({ ...filtersValues, price: e.target.value })
                    }}>
                    <option disabled selected>Price</option>
                    <option value="60">60</option>
                    <option value="64">64</option>
                </select>

                <select className="border rounded-lg bg-white w-52 px-2"
                    onChange={(e) => {
                        setFiltersValues({ ...filtersValues, color: e.target.value })
                    }}>
                    <option disabled selected>Color</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                </select>

            </div>
        </div>
    )
}

export default Filter
