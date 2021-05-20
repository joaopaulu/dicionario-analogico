import { getSessionData } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const HomeAdmin = () => {
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentUserData = getSessionData();
    setCurrentUser(currentUserData.userName);
  }, [location]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Bem vindo</h1>
        <p className="lead text-capitalize">{currentUser}</p>
        <hr />
        <p>Administração do Dicionário Analógico</p>
      </div>
    </div>
  );
};

export default HomeAdmin;
