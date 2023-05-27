import { Button } from 'react-bootstrap';
import { ItemsTable } from '../components/ItemsTable';
import { handleApiClickDelete } from '../utilities/handleApIClickDelete';

export function About() {
  return ( 
    <>
    <h1>My Orders</h1>
    <Button variant="danger" onClick={()=>handleApiClickDelete()}>Delete orders</Button>
    <ItemsTable/>
    </>
  )
}
