import { AxiosRequestConfig } from 'axios';
import { User } from 'core/types/User';
import { SpringPage } from 'core/types/vendor/spring';
import { requestBackend } from 'core/utils/requests';
import { useEffect, useState } from 'react';

const Users = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/users',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then(response => {
      setPage(response.data);
    });
  }, []);

  return (
    <div>
      {page?.content.map(item => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
};

export default Users;
