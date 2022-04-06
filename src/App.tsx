import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
