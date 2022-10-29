const List = (props) => {
  return (
    <div className={`mt-2 ${props.ml ? props.ml : ""}`}>
      <span className="capitalize text-base text-gray-500">{props.label}</span>
      <h1 className="text-xl font-medium capitalize">{props.value}</h1>
    </div>
  );
};

export default List;
