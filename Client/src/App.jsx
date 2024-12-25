import React, { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#845ec2] via-[#ff6f91] to-[#ffc75f] flex items-center justify-center">
      {user ? <ProfileCard user={user} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
