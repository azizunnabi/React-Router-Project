import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(function () {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (yourData) {
        setLoader(false);
        setUsers(yourData.data);
      })
      .catch(function (error) {
        setLoader(false);
        console.log(error);
      });
  }, []);
  console.log("last line");
  return (
    <div className="max-w-screen-lg mx-auto">
      {loader ? (
        "Loading..."
      ) : users.length > 0 ? (
        <table className="w-full my-10">
          <thead>
            <tr>
              <th className="border p-2 text-left uppercase">name</th>
              <th className="border p-2 text-left uppercase">username</th>
              <th className="border p-2 text-left uppercase">email</th>
              <th className="border p-2 text-left uppercase">website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr className="odd:bg-indigo-50">
                  <td className="border p-4">{user.name}</td>
                  <td className="border p-4">{user.username}</td>
                  <td className="border p-4">{user.email}</td>
                  <td className="border p-4">{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "No users"
      )}
    </div>
  );
};
export default Home;
