import React, { Component } from 'react';


const products = [{
    productName: "moblie",
    productPrice: 30000
},
{ productName: "laptop", productPrice: 40000 }
]

class Day1 extends Component {

    render(){
        return(
     
            <div>
                <div>
                   <h1>{products[0].productName}</h1>
                    {products[0].productPrice}
                </div>
                <div>
                {products[1].productName}
                {products[1].productPrice}

                </div>
            </div>
        )
    }
 
}
export default Day1;