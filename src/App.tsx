import './App.css'
import BaseLayout from './layout/Base'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddTask from './pages/AddTask'

function App() {

  return (
    <>
      <BaseLayout />
      <Switch>
        <Route path={"/task"}>
          <AddTask />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
