import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "./styles.scss";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./utils/context/UserContext";
import { SearchProvider } from "./utils/context/SearchContext";
import { Provider } from "react-redux";
import AppStore from "./utils/store/appStore";

function App() {
  return (
    <>
      <Provider store={AppStore}>
        <SearchProvider>
          <Header />
          <UserProvider>
            <Outlet />
          </UserProvider>
        </SearchProvider>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
