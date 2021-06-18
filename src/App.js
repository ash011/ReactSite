import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
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
          <Route path="/dialogs" render={() => <Dialogs 
                                                    info={props.state.dialogsPage}
                                                    dispatch={props.dispatch}/>} />
          <Route path="/profile" render={() => <Profile 
                                                    info={props.state.profilePage} 
                                                    dispatch={props.dispatch}/>} />
          <Route path="/music" render={Music} />
          <Route path="/news" render={News} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
  );
}

export default App;
