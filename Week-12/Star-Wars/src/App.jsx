import { Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import { StarshipProvider } from "./context/StarshipContext";


function App() {


  return (
    <>

      <StarshipProvider>
        <Switch>
          <Route path="/detail/:url">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </StarshipProvider>
    </>
  )
}

export default App
