import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom'
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import {useEffect} from "react";
import firebase from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {clearUser, setUser} from "./redux/actions/user_action";

function App() {
  const history = useHistory();
  let dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        history.push("/")
        dispatch(setUser(user))
      } else {
        history.push("/login")
        dispatch(clearUser())
      }
    });
  }, [history, dispatch])

  return (
    <Switch>
      <Route exact path="/" component={ChatPage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/register" component={RegisterPage}/>
    </Switch>

  );
}

export default App;
