import { useTheme } from "@mui/material";
import { SvgIconColors } from "../../themes/palette";
import PropTypes from "prop-types";

const NormalContrast = ({contrastDefault}) => {
  const theme = useTheme();
  const iconColor = SvgIconColors(theme.palette.appSettings)
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" fill={contrastDefault ? `${iconColor.svgcolor[100]}` : '#637381'}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.1299 20.6213C9.59086 20.4566 8.12388 19.8832 6.88089 18.9607C5.63791 18.0383 4.66413 16.8002 4.06042 15.3747C4.04526 15.3389 4.03101 15.3029 4.01638 15.2669L11.1299 19.2499V20.6213ZM11.1299 17.7217L3.50026 13.4499C3.42001 12.9712 3.37975 12.4867 3.37988 12.0013C3.37988 11.726 3.39269 11.4527 3.4183 11.1816L11.1299 15.4993V17.7217ZM11.1299 13.9711L3.66401 9.79102C3.76825 9.39432 3.90072 9.00559 4.06042 8.6278C4.13729 8.44591 4.22016 8.26733 4.30905 8.09205L11.1299 11.9153V13.9711ZM11.1299 10.3866L5.0013 6.95138C5.27722 6.56735 5.5839 6.20639 5.9183 5.87205C6.02163 5.76871 6.12719 5.6683 6.23497 5.57084L11.1299 8.25191V10.3866ZM11.1299 6.73156L7.39455 4.68571C8.52175 3.96725 9.80052 3.52071 11.1299 3.38135V6.73156Z" fill={contrastDefault ? `${iconColor.svgcolor[100]}` : '#637381'}/>
    </svg>
  )
}

NormalContrast.propTypes = {
  contrastDefault: PropTypes.bool.isRequired,
};

export default NormalContrast