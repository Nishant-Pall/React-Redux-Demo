import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import WeedContainer from './components/WeedContainer';
import HooksWeedContainer from './components/HooksWeedContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <WeedContainer />
        <HooksWeedContainer />
      </div>
    </Provider>
  );
};

export default App;
