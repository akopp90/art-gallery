import NavigationBar from "@/components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children} </main>
    </>
  );
};

export default Layout;
