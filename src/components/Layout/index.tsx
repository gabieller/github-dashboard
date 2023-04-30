import React, { PropsWithChildren, useState } from "react";
import Navbar from "@/components/Navbar";
import { UserProps } from "@/types/User";
import { fetchUser } from "@/services/api";

const Layout = ({ children }: PropsWithChildren) => {
  const [searchedUser, setSearcedhUser] = useState<UserProps | null>(null);

  const [error, setError] = useState<boolean>(false);

  const searchUser = async (userName: string): Promise<void> => {
    setError(false);

    try {
      const data = await fetchUser(userName);

      const { id, avatar_url, login, name, followers, email } = data;

      const userData: UserProps = {
        id,
        avatar_url,
        email,
        login,
        name,
        followers,
      };

      setSearcedhUser(userData);
    } catch (error) {
      if (error.response?.status === 404) {
        setError(true);
      }
    }
  };
  return (
    <>
      <Navbar searchUser={searchUser} />
      {children}
    </>
  );
};
export default Layout;
