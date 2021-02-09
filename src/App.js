import MainPage from './components/competitive/MainPage';
import PracticePage from './components/practice/PracticePage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Route, BrowserRouter as Router } from "react-router-dom";

library.add(fab, far);

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/practice" component={PracticePage}/>
    </Router>
  );
}

export default App;
