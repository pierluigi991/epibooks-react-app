import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./MyComponents/MyNav";
import Welcome from "./MyComponents/Welcome";
import MyFooter from "./MyComponents/MyFooter";
import AllBooks from "./MyComponents/AllBooks";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllBooks />
      <MyFooter />
    </div>
  );
}

export default App;
