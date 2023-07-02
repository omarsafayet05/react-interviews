import React, { useEffect, useState } from "react";

const MapAndFilter = () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let mappedArray = users.map((user) => user.id * 2);
    console.log(mappedArray);
  };
  const filterData = () => {
    let filteredArray = users.filter((user) => {
      //return user.name === "Leanne Graham";
      //return user.name.includes("a");
      return user.id > 5;
    });
    console.log(filteredArray);
    setUsers(filteredArray);
  };

  const squareData = () => {
    // let square = numbers
    //   .filter((number) => {
    //     return number <= 5;
    //   })
    //   .map((filtered) => {
    //     return filtered * filtered;
    //   });
    //or
    let square = numbers
      .map((filtered) => {
        return filtered * filtered;
      })
      .filter((number) => {
        return number <= 50;
      });
    setNumbers(square);
  };
  return (
    <div>
      <h1>Users</h1>
      <div className="card">
        {users.map((user) => (
          <div className="card-inner">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))}
      </div>
      <h2>Numbers</h2>
      <div>
        {numbers.map((number) => (
          <div>{number}</div>
        ))}
      </div>
      <button onClick={mapData}>mappedArray</button>
      <button onClick={filterData}>filteredArray</button>
      <button onClick={squareData}>squared Numbers</button>
    </div>
  );
};

export default MapAndFilter;
//https://jsonplaceholder.typicode.com/users
