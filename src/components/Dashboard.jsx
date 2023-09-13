import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://capstone-backend-liart.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((user) => (
        <h2 key={user.id}>{user.email}</h2>
      ))}
    </div>
  );
};

export default Dashboard;
