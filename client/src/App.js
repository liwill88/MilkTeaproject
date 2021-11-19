import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import SignupPage from './views/SignupPage';
import Main from './views/Main';
import Create from './views/Create';
import Detail from './views/Detail';
import LoginPage from './views/LoginPage';
import Edit from './views/Edit';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <SignupPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/milktea/new">
          <Create />
        </Route>

        <Route exact path="/milktea/:id">
          <Detail />
        </Route>
        <Route exact path="/milktea/:id/edit">
          <Edit />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
