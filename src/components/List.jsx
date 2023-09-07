import React from "react";
import Item from "./Item";

// const List = ({ data, filtersValues }) => {
//     console.log("DATA", data)
//     console.log("FILTERSVALUE", filtersValues)
//     return (
//         <div>
//             {data
//                 .filter((item) => {
//                     if (
//                         filtersValues.type != null &&
//                         filtersValues.type != item.type
//                     ) {
//                         return false;
//                     }

//                     if (
//                         filtersValues.price != null &&
//                         filtersValues.price != item.price
//                     ) {
//                         return false;
//                     }
//                     if (
//                         filtersValues.color != null &&
//                         filtersValues.color != item.color
//                     ) {
//                         return false;
//                     }

//                     return true;
//                 })
//                 .map((item, key) => (
//                     <Item key={key} data={item} />
//                 ))}
//         </div>
//     );
// };





const List = ({ data, filtersValues, filtreChange }) => {
    console.log(filtersValues);
    console.log("data", data);
    const filteredData = data
        .filter(item => {
            return (
                (!filtersValues.type || filtersValues.type === item.type) &&
                (!filtersValues.price || filtersValues.price === String(item.price)) &&
                (!filtersValues.color || filtersValues.color === item.color) &&
                (!filtreChange || filtreChange == item.type || filtreChange == item.color || filtreChange == item.price)
            );
        });

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 ">
            {filteredData.map(item => (
                <Item data={item} key={item.id} />
            ))}
        </div>
    );
}

export default List;