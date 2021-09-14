import { AuthContext, AuthContextData } from 'AuthContext';
import 'beautiful-react-diagrams/styles.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from 'Routes';
import './app.scss';
import './core/assets/styles/custom.scss';

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default App;
