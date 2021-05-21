import React  from "react";


const ItemView =() => {
    goods.forEach(good => {
        return(
            <div>
                <h1>Successfully Just4Giving </h1>
                <h4>Item name : {good.item_name}</h4>
                <h4>Description : {good.description}</h4>
                <h4>Category : {good.category}</h4>
                <h4>Quantity : {good.quantity}</h4>
                <h4>Quality : {good.quality}</h4>

            </div>
        )
    })

}


export default ItemView ;