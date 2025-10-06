import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <div className="text-gray-500 mt-2 text-sm">
        <p>
          {address.street}, {address.suite}
        </p>
        <p>{address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
