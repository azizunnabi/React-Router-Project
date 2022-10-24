import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
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
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  }, []);
  console.log(user);
  return (
    <div className="max-w-screen-lg mx-auto mt-5">
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <span className="capitalize text-base text-gray-500">name</span>
            <h1 className="text-xl font-medium capitalize">{user.name}</h1>
          </div>
          <div className="mt-2">
            <span className="capitalize text-base text-gray-500">username</span>
            <h1 className="text-xl font-medium capitalize">{user.username}</h1>
          </div>
          <div className="mt-2">
            <span className="capitalize text-base text-gray-500">email</span>
            <h1 className="text-xl font-medium capitalize">{user.email}</h1>
          </div>
          <div className="mt-2">
            <span className="capitalize text-base text-gray-500">phone</span>
            <h1 className="text-xl font-medium capitalize">{user.phone}</h1>
          </div>
          <div className="mt-2">
            <span className="capitalize text-base text-gray-500">website</span>
            <h1 className="text-xl font-medium capitalize">{user.website}</h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default User;
