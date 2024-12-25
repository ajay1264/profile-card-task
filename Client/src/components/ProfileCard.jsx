import React from "react";

function ProfileCard({ user }) {
  const { picture, name, gender, phone } = user;

  return (
    <div className="max-w-4xl w-full h-[500px] bg-gradient-to-br from-[#845ec2] via-[#ff6f91] to-[#ffc75f] rounded-2xl shadow-lg p-1 hover:scale-105 transform transition-all">
      <div className="bg-white rounded-2xl p-8 flex items-center space-x-12 h-full shadow-xl">
        {/* Profile Image */}
        <img
          src={picture.large}
          alt={`${name.first} ${name.last}`}
          className="w-72 h-72 rounded-full object-cover border-4 border-gradient-to-br from-[#845ec2] via-[#ff6f91] to-[#ffc75f] p-1"
        />

        {/* Profile Details */}
        <div className="h-full flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold text-[#845ec2]">
            {name.first} {name.last}
          </h2>
          <p className="text-xl text-gray-600">
            <span className="font-medium text-[#ff6f91]">Gender:</span> {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </p>
          <p className="text-xl text-gray-600">
            <span className="font-medium text-[#ffc75f]">Phone:</span> {phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
