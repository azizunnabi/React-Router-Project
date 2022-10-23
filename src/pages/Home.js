import { useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/Users";
import Spinner from "../components/Spinner";
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
    <div className="max-w-screen-lg mx-auto mt-5">
      {loader ? (
        <Spinner />
      ) : users.length > 0 ? (
        <Users usersList={users} />
      ) : (
        "No users"
      )}
    </div>
  );
};
export default Home;
