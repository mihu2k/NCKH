import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { HomePage } from './pages/HomePage';
import { PlantDisease } from './pages/PlantDisease';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/du-doan' component={PlantDisease} />
      </Switch>
    </Router>
  );
}
