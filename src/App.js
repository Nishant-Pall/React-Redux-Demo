import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer /> */}
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
