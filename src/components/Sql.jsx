import React, { useEffect, useState } from "react";
 



const Sql =()=> {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id[1]}>
              <td>{u.id}</td>
              <td>{u.key}</td>
              <td>{u.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sql;
