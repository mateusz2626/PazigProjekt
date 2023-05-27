import React from "react";

export function handleApiClickDelete() {
    
    fetch('http://localhost:50111/api/Product', { 

      method: 'Delete', 
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
      },
      body:""
    })
}