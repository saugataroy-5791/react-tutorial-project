import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "./styles.scss";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./utils/UserContext";
import { SearchProvider } from "./utils/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <UserProvider>
          <Outlet />
        </UserProvider>
      </SearchProvider>
      <Footer />
    </>
  );
}

export default App;
