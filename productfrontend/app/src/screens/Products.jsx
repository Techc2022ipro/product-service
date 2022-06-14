import React from 'react';

const Products = () => {

    const [product, setProduct] = React.useState([]);

    React.useEffect (() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        fetch('http://localhost:2000/', requestOptions).then(res => { 
          if(res.ok) return res.json()
        }).then(data => { setProduct(data)})
    }, [])

      return (
          <div className="products">
            {
                product.map(product => (
                    <div style={{"border":"1px solid black","width":"200px", "margin-top": "10vh"}}>
                    <p>item type: { product.name }</p>
                    <p>brand: { product.brand }</p>
                    <p>desc: { product.description }</p>
                    <p>{ product.seller }</p>
                    </div>
                ))
            }
          </div>
        );
  
  }
  
  
  export default Products;
  