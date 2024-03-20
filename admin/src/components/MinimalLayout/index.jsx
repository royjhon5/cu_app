import Customization from '../../layout/Customization';
import { Outlet } from 'react-router-dom';

const MinimalLayout = () => {
  return (
    <>
    <Outlet />
    <Customization />
    </>
  )
}

export default MinimalLayout