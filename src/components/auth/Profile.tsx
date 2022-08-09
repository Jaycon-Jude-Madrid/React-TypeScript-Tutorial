import React from "react";

export interface ProfileProps {
  name: string;
}
const Profile = ({ name }: ProfileProps) => {
  return <div>Profile {name}</div>;
};

export default Profile;
