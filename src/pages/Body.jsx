import React from "react";
import Filter from "../components/Filter";
import Image1 from "../assets/nike.webp";
import Image2 from "../assets/nike2.png";
import Image3 from "../assets/adidas.png";
import Image4 from "../assets/adidas2.png";
import Image5 from "../assets/converse1.jpg";
import Image6 from "../assets/converse2.jpg";
import List from "../components/List";
import { useState } from "react";
import Header from "./Header";

const Body = ({ change }) => {
    console.log(">>>>>>>>>>>>>>nnn", change);

    const donnes = [
        {
            name: "Nike",
            type: "nike",
            image: Image2,
            price: 64,
            color: "white",
        },
        {
            name: "Nike",
            type: "nike",
            image: Image1,
            price: 60,
            color: "black",
        },

        {
            name: "Adidas",
            type: "adidas",
            image: Image3,
            price: 60,
            color: "white",
        },
        {
            name: "Adidas",
            type: "adidas",
            image: Image4,
            price: 64,
            color: "black",
        },
        {
            name: "Converse",
            type: "converse",
            image: Image5,
            price: 60,
            color: "white",
        },
        {
            name: "Converse",
            type: "converse",
            image: Image6,
            price: 64,
            color: "black",
        }
    ];
    const [filtersValues, setFiltersValues] = useState({
        type: null,
        price: null,
        color: null,
    });
    return (
        <div className="md:flex  w-full">

            <div className="w-full md:w-1/4">
                <Filter
                    filtersValues={filtersValues}
                    setFiltersValues={setFiltersValues}
                />
            </div>
            <div className="w-full md:w-3/4">



                <List filtreChange={change} filtersValues={filtersValues} data={donnes} />

            </div>
        </div>
    );
};

export default Body;



