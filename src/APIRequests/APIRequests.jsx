import axios from "axios";
import React, { useEffect, useState } from "react";

const APIRequests = () => {
  //POST,GET,PUT or PATCH,DELETE
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const postProfile = () => {
    axios.post("https://647cafc8c0bae2880ad1124f.mockapi.io/users", {
      name: "Safayet",
      age: 33,
      hobbies: ["Painting", "Reading books", "Travelling"],
    });
  };

  const typePost = (event) => {
    let name = event.target.value;
    setName(name);
  };
  const postData = () => {
    axios
      .post("https://647cafc8c0bae2880ad1124f.mockapi.io/users", {
        name: name,
        age: age,
        hobbies: ["Painting", "Reading books", "Travelling"],
      })
      .then((res) => {
        console.log(res);
      })
      .then((res) => {
        getUsers();
      })
      .catch((err) => {
        console.err(err);
      });
  };

  // by click without using useEffect.

  const getUsers = () => {
    axios
      .get("https://647cafc8c0bae2880ad1124f.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  //GET
  useEffect(() => {
    getUsers();
  }, []);

  //Update

  const updateData = (id) => {
    axios
      .put(`https://647cafc8c0bae2880ad1124f.mockapi.io/users/${id}`, {
        name: name,
        age: age,
        hobbies: ["Painting", "Reading books", "Travelling", "Hunting"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .then((res) => {
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`https://647cafc8c0bae2880ad1124f.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .then((res) => {
        getUsers();
      })
      .catch((err) => {
        console.err(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type Your Name"
        //onChange={(event) => setName(event.target.value)}
        onChange={typePost}
      />
      <input
        type="number"
        placeholder="Type Your Age"
        onChange={(event) => setAge(event.target.value)}
      />
      <button onClick={postData}>PostData</button>
      <button onClick={postProfile}>Post</button>

      {/* <div>
        {users.map((user) => {
          return (
            <>
              <h3>{user.name}</h3>
              <h2>{user.age}</h2>
            </>
          );
        })}
      </div> */}

      {/* <div>
        {users.map((user) => {
          return (
            <>
              <h2>{user.age}</h2>
            </>
          );
        })}
        <button onClick={getUsers}>Get</button>
      </div> */}
      <div>
        {users.map((user) => {
          return (
            <>
              {`${user.id}.${user.name}`}
              {`${user.age}`}
              <button onClick={() => updateData(user.id)}>Update</button>
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default APIRequests;
