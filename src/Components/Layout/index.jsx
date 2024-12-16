// Handle Layout
// Imports
import Footer from "../Footer";
import Header from "../Header";
// React Component
const Layout = ({ children,basket }) => {
  return (
    <>
      <Header basket={basket} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
