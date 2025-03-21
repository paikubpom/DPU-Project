const Card = ({user}) => {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="font-bold text-lg">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>
      </div>
    );
  };
  
  export default Card;
  