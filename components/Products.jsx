import React from 'react';
import Product from './Product';

export default function Products({ products }) {
  return <section className='grid sm:grid-cols-3 gap-5'>
    {
      products ?
        products.map(product => <Product product={product} key={product.name} />)
        :
        "vacio"
    }
  </section>;
}
