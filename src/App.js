import AuthDetails from "./components/auth/AuthDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <div className="App center-hrz--col u-padding">
      <SignIn/>
      <br/>
      <br/>
      <SignUp/>
      <br/>
      <br/>
      <AuthDetails/>
    </div>
  );
}

export default App;
