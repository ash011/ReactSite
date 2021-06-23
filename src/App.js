import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/profile" render={() => <Profile store={props.store}/>} />
          <Route path="/music" render={Music} />
          <Route path="/news" render={News} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
  );
}

export default App;
