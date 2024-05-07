import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import { SvgIconColors } from "../../themes/palette";
const SunIcon = ({lightModeActive}) => {
  const theme = useTheme();
  const iconColor = SvgIconColors(theme.palette.appSettings)
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9998 18.1111C15.3749 18.1111 18.1109 15.3751 18.1109 12C18.1109 8.62495 15.3749 5.88892 11.9998 5.88892C8.62471 5.88892 5.88867 8.62495 5.88867 12C5.88867 15.3751 8.62471 18.1111 11.9998 18.1111Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
      <g opacity="0.4">
        <path d="M10.1667 2.83333C10.1667 1.78189 10.8396 1.00805 11.891 1.00039C11.9266 1.00013 11.9629 1 12 1C12.0371 1 12.0734 1.00013 12.109 1.00039C13.1604 1.00805 13.8333 1.78189 13.8333 2.83333C13.8333 3.88481 13.1604 4.6586 12.109 4.6663C12.0734 4.66654 12.0371 4.66667 12 4.66667C11.9629 4.66667 11.9266 4.66654 11.891 4.6663C10.8396 4.6586 10.1667 3.88475 10.1667 2.83333Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M10.1667 21.1667C10.1667 22.2181 10.8396 22.9919 11.891 22.9996C11.9266 22.9999 11.9629 23 12 23C12.0371 23 12.0734 22.9999 12.109 22.9996C13.1604 22.9919 13.8333 22.2181 13.8333 21.1667C13.8333 20.1152 13.1604 19.3414 12.109 19.3337C12.0734 19.3335 12.0371 19.3333 12 19.3333C11.9629 19.3333 11.9266 19.3335 11.891 19.3337C10.8396 19.3414 10.1667 20.1152 10.1667 21.1667Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M17.1855 4.22184C17.9289 3.47836 18.9519 3.40695 19.7008 4.14502C19.7262 4.17002 19.7519 4.19562 19.7782 4.22184C19.8044 4.24806 19.83 4.27384 19.855 4.29921C20.593 5.04806 20.5216 6.07106 19.7782 6.81454C19.0347 7.55802 18.0117 7.62939 17.2628 6.89136C17.2375 6.86636 17.2117 6.84076 17.1855 6.81454C17.1592 6.78832 17.1336 6.76253 17.1086 6.73717C16.3706 5.98832 16.442 4.96532 17.1855 4.22184Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M4.22184 17.1855C3.47836 17.9289 3.40696 18.9519 4.14502 19.7008C4.17002 19.7262 4.19562 19.7519 4.22184 19.7782C4.24806 19.8044 4.27384 19.83 4.29921 19.855C5.04806 20.593 6.07106 20.5216 6.81454 19.7782C7.55802 19.0347 7.62939 18.0117 6.89136 17.2628C6.86636 17.2375 6.84076 17.2117 6.81454 17.1855C6.78832 17.1592 6.76253 17.1336 6.73717 17.1086C5.98832 16.3706 4.96532 16.442 4.22184 17.1855Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M2.83333 13.8333C1.78189 13.8333 1.00805 13.1604 1.00039 12.109C1.00013 12.0734 1 12.0371 1 12C1 11.9629 1.00013 11.9266 1.00039 11.891C1.00805 10.8396 1.78189 10.1667 2.83333 10.1667C3.88475 10.1667 4.6586 10.8396 4.6663 11.891C4.66654 11.9266 4.66667 11.9629 4.66667 12C4.66667 12.0371 4.66654 12.0734 4.6663 12.109C4.6586 13.1604 3.88475 13.8333 2.83333 13.8333Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M21.1667 13.8333C22.2181 13.8333 22.9919 13.1604 22.9996 12.109C22.9999 12.0734 23 12.0371 23 12C23 11.9629 22.9999 11.9266 22.9996 11.891C22.9919 10.8396 22.2181 10.1667 21.1667 10.1667C20.1152 10.1667 19.3414 10.8396 19.3337 11.891C19.3335 11.9266 19.3333 11.9629 19.3333 12C19.3333 12.0371 19.3335 12.0734 19.3337 12.109C19.3414 13.1604 20.1152 13.8333 21.1667 13.8333Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M4.22184 6.81454C3.47836 6.07106 3.40695 5.04806 4.14502 4.29921C4.17002 4.27384 4.19562 4.24806 4.22184 4.22184C4.24806 4.19562 4.27384 4.17002 4.29921 4.14502C5.04806 3.40695 6.07106 3.47836 6.81454 4.22184C7.55802 4.96532 7.62939 5.98832 6.89136 6.73717C6.86636 6.76253 6.84076 6.78832 6.81454 6.81454C6.78832 6.84076 6.76253 6.86636 6.73717 6.89136C5.98832 7.62939 4.96532 7.55802 4.22184 6.81454Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
        <path d="M17.1855 19.7782C17.9289 20.5216 18.9519 20.593 19.7008 19.855C19.7262 19.83 19.7519 19.8044 19.7782 19.7782C19.8044 19.7519 19.83 19.7262 19.855 19.7008C20.593 18.9519 20.5216 17.9289 19.7782 17.1855C19.0347 16.442 18.0117 16.3706 17.2628 17.1086C17.2375 17.1336 17.2117 17.1592 17.1855 17.1855C17.1592 17.2117 17.1336 17.2375 17.1086 17.2628C16.3706 18.0117 16.442 19.0347 17.1855 19.7782Z" fill={lightModeActive ? `${iconColor.svgcolor[100]}` : '#637381'} />
      </g>
    </svg>
  )
}

SunIcon.propTypes = {
  lightModeActive: PropTypes.bool.isRequired,
}

export default SunIcon