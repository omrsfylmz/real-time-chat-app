"use client";
import { signOut } from "next-auth/react";

const Users = () => {
  return <button onClick={() => signOut()}>logout</button>;
};

export default Users;
