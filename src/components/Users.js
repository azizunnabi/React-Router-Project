import { Link } from "react-router-dom";
const Users = (props) => {
  return (
    <table className="w-full my-10">
      <thead>
        <tr>
          <th className="border p-2 text-left uppercase">name</th>
          <th className="border p-2 text-left uppercase">username</th>
          <th className="border p-2 text-left uppercase">email</th>
          <th className="border p-2 text-left uppercase">website</th>
          <th>details</th>
        </tr>
      </thead>
      <tbody>
        {props.usersList.map((user) => {
          return (
            <tr className="odd:bg-indigo-50" key={user.id}>
              <td className="border p-4">{user.name}</td>
              <td className="border p-4">{user.username}</td>
              <td className="border p-4">{user.email}</td>
              <td className="border p-4">{user.website}</td>
              <td>
                <Link to={`/user/${user.id}`}>details</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Users;
