import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context/Context";

function App() {
  const [theme, setTheme] = useState('')
  const { user } = useContext(Context); 
  
  function changeTheme(){
    if (theme){
      setTheme('')
    }else{
      setTheme('Dark')
    }
  }

  return (
    <Router>
      <TopBar theme={theme} changeTheme={changeTheme}/>
      <Switch>
        <Route exact path="/">
          <Home theme={theme}/>
        </Route>
        <Route path="/register">{user ? <Home theme={theme}/> : <Register theme={theme}/>}</Route>
        <Route path="/login">{user ? <Home theme={theme}/> : <Login theme={theme}/>}</Route>
        <Route path="/write">{user ? <Write theme={theme}/> : <Register theme={theme}/>}</Route>
        <Route path="/settings">{user ? <Settings theme={theme}/> : <Register theme={theme}/>}</Route>
        <Route path="/post/:postId">
          <Single theme={theme}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;