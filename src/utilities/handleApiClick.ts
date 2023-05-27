export function handleApiClick(jsonData:any) {
    
    fetch('http://localhost:50111/api/Product', { 

      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    })
}