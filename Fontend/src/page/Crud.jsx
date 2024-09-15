import { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  let [crud, setCrud] = useState([]);
  useEffect(() => {
    async function usersData() {
      try {
        let response = await axios.get("http://localhost:8000/api/crudlist");
        // console.log(response.data); // Log the userList array
        setCrud(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    usersData();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        {Array.isArray(crud) && crud.length > 0 ? (
          crud.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <button>Update</button>
                <button>Delet</button>
              </td>
            </tr>
          ))
        ) : (
          <li>No users found</li>
        )}
      </table>
    </div>
  );
};

export default Crud;
