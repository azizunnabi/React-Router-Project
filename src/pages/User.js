import { useParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  console.log(params.myId);
  return (
    <div>
      <h1 className="text-2xl">{params.myId}</h1>
    </div>
  );
};
export default User;
