import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import List from "../components/List";
const User = () => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const params = useParams();
  console.log(params.myId);
  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.myId}`)
      .then((response) => {
        setLoader(false);
        setUser(response.data);
        console.log("data: ", response.data);
      })
      .catch((error) => {
        setLoader(false);
        console.log("Error: ", error);
      });
  }, []);
  console.log(user);
  console.log(loader);
  return (
    <div className="max-w-screen-lg mx-auto mt-5">
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <List label="name" value={user.name} />
          <List label="username" value={user.username} />
          <List label="email" value={user.email} />
          <List label="phone" value={user.phone} />
          <List label="website" value={user.website} />
          <List label="street" value={user?.address?.street} ml="ml-3" />
          <List label="city" value={user?.address?.city} ml="ml-3" />
          <List label="zip code" value={user?.address?.zipcode} ml="ml-3" />
        </div>
      )}
    </div>
  );
};
export default User;
