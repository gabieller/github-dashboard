import React, { PropsWithChildren} from "react";
import { NavBar } from "../NavBar";

 function Layout({ children }: PropsWithChildren) {

  // const [error, setError] = useState<boolean>(false);



  // const searchUser = async (userName: string): Promise<void> => {
  //   setError(false);

  //   try {
  //     // const data = await fetchUserTerm(userName);
  //     const data = await fetchRepoTerm(userName);

  //     // setSearcedhUser(data);
  //   } catch (error) {
  //     if (error.response?.status === 404) {
  //       setError(true);
  //     }
  //   }
  // };

  return (
    <>
      <NavBar  />
      <main>{children}</main>
    </>
  );
}
export default Layout;
