import Navbar from "./Navbar";
import checkUser from "@/lib/checkUser";

export default async function NavbarWrapper({ isAdminPage = false }) {
  const userData = await checkUser();
  const isAdmin = userData?.role === "ADMIN" || false;

  // Pass the user data as props to the client component
  return (
    <Navbar userData={userData} isAdmin={isAdmin} isAdminPage={isAdminPage} />
  );
}
