import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
export const CreateUseEffect = () => {
  // useState with array
  const [users, seUsers] = useState([]);
  useEffect(
    () => {
      fetchUsers();
    },
    //Dependecy Array
    []
  );
  const fetchUsers = async () => {
    //Fetch is an browser API no need of packages
    const data = await (await fetch(url)).json();
    seUsers(data);
  };

  //  Without using UseEffect hook Which rerender every state change
  // fetchUsers();

  return (
    <div>
      <h3>User Details </h3>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>User</th>
          <th>Company</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
