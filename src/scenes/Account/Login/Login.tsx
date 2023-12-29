import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/Text';
import { selectUser } from '../../../services/redux/modules/user/selector';
import { getSpotifyLogUrl } from '../../../services/tools';
import s from '../index.module.css';

export default function Login() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div className={s.root}>
      <Text element="h1" className={s.title}>
        Login
      </Text>
      <Text className={s.welcome}>
        To access your personal dashboard, please login with your account
      </Text>
      <div>
        <a className={s.link} href={getSpotifyLogUrl()}>
          Login
        </a>
      </div>
    </div>
  );
}
