import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" Component={Homepage}  exact />
      <Route path="/chats" Component={Chatpage} />
      </Routes>
    </div>
  );
}

export default App;
