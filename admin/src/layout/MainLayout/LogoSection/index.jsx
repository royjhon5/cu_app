import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBase } from '@mui/material';
import config from '../../../config';
import { MENU_OPEN } from '../../../store/actions';
import Logo from '../../../assets/images/origlogo.png'

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      <img src={Logo} width="60" />
    </ButtonBase>
  );
};

export default LogoSection;
