import React, { useEffect, useState } from 'react';

const Sell = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API or use any other method to retrieve the data
    // Replace the API endpoint with the appropriate URL
    fetch('http://localhost/farmguide/register.php')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Sell Page</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              ID: {item.id}, Name: {item.name}, Address: {item.city}, Email:{' '}
              {item.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default Sell;
