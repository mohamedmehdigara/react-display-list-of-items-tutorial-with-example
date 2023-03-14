import React from 'react';
 
function App() {
  const users = [
    {
      id: '01',
      name: 'John Deo',
      email: 'john@gmail.com',
      phone: '202-555-0163'
    },
    {
      id: '02',
      name: 'Brad Pitt',
      email: 'fightclud@gmail.com',
      phone: '202-555-0106'
    },
  ];
 
  const joinList = [users, users];
 
  return (
    <div>
        <ul>
            {joinList.map((nestedItem, i) => (
              <ul key={i}>
                <h3> List {i} </h3>
                {nestedItem.map(data => (
                  <li key={data.id}>
                    <div>{data.id}</div>
                    <div>{data.name}</div>
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                  </li>
                ))}
              </ul>
            ))}
          </ul>       
    </div>
  );
}
 
export default App;