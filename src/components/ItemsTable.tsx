import { useState, useEffect } from 'react'
import axios from 'axios'
import {Table } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
export function ItemsTable(){
    
    const [products, SetProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
      axios("http://localhost:50111/api/Product")
        .then((response) => {
          SetProducts(response.data);
          setError(null);
        })
        .catch(setError);
    }, []);
    if (error) return <p>An error occurred</p>
    return (
      <div >
      <Table >
        <thead>
          <tr>
            <th>ProductName</th>
            <th>ProductPrice</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>   
        </thead>   
        <tbody>
          {
          products.map( (item,key) =>
          <tr key={key}>
              <td className='table-data'>{item.ProductName }</td>
              <td className='table-data'>{formatCurrency(item.ProductPrice)}</td>
              <td className='table-data'>{item.Quantity}</td>
              <td className='table-data'>{item.DateOfAdd}</td>
          </tr>
          )
        }
        </tbody>
      </Table>
    </div>
    );
}