import MainLayout from '@/layouts/MainLayout'
import HomePage from '@/pages/HomePage'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DeckContextProvider } from './contexts/deck'
import { PlayerContextProvider } from './contexts/player'

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <DeckContextProvider>
              <PlayerContextProvider>
                <HomePage />
              </PlayerContextProvider>
            </DeckContextProvider>
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App
