import { useEffect, useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);
  useEffect(
    function () {
      console.log("Run useEffect");
    },
    [count, state]
  );
  return (
    <div className="max-w-screen-lg mx-auto">
      {console.log("Run JSX")}
      <h1 className="mt-2 text-[40px] font-medium">Home page</h1>
      <button
        className="bg-rose-600 rounded px-4 py-3 text-white capitalize"
        onClick={() => setCount(count + 1)}
      >
        Inc {count}
      </button>
      <button
        onClick={() => setState(!state)}
        className="bg-green-600 rounded px-4 py-3 text-white capitalize"
      >
        {state ? "True" : "False"}
      </button>
    </div>
  );
};
export default Home;
