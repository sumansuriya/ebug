import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { staffAdd } from "./Components/staffAdd";
import { useSelector } from "react-redux";
function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  // Will chekck from the storage
  // if (!state.authSuccess) {
  //   history.push("/user-signin");
  // }
  // const authSuccessFromStorage = localStorage.getItem("authSuccess");
  //  if (authSuccessFromStorage !== "1") {
  //    history.push("/admin-signin");
  //  }

  return (
    <>
      {/* {authSuccessFromStorage === "1" } */}
      <Route exact path="/staff-add" component={staffAdd} />
      </>
  );
}

export default App;
