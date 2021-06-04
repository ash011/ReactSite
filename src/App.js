import "./App.css";
import Profile from "./components/Profile";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
