import { getSessionData } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const HomeAdmin = () => {
  const [currentUser, setCurrentUser] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentUserData = getSessionData();
    setCurrentUser(currentUserData.userFirstName);
  }, [location]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Bem vindo</h1>
        <p className="lead text-capitalize">{currentUser}</p>
        <hr />
        <p>Sistema de gestão de PNR's do COLOG e Diretorias</p>
      </div>
    </div>
  );
};

export default HomeAdmin;
