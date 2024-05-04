import React from "react";
import { Avatar } from "@material-tailwind/react";

const Profile = () => {
  return (
    <div className="mx-2 my-4">
      <section>
        <h2>My Profile</h2>
        <div className="text-center my-2">
          <Avatar placeholder="hello" />
          <p>House seeker</p>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <div className="font-semibold">Viewed recently</div>
          <div className="text-gray-600 text-sm">view</div>
        </div>
      </section>
      <section>
        <div className="font-semibold">Property listings</div>
        <div>
            
        </div>
      </section>
    </div>
  );
};

export default Profile;
