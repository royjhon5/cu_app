import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { Box, Button, Divider, Grow, Tab, useTheme } from '@mui/material';
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab'
import PerfectScrollbar from 'react-perfect-scrollbar';
import AnimateButton from '../../components/AnimatedButton/AnimateButton';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY  } from '../../store/actions';
import { gridSpacing } from '../../store/constant';
import { IconTextSize, IconDevices, IconSettings } from '@tabler/icons-react';
import SubCard from '../../components/cards/SubCard';
import CancelIcon from '@mui/icons-material/Cancel';


function valueText(value) {
  return `${value}px`;
}

const Customization = ({ toggleTheme }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState('0');
  const grow = true;

  const handleToggle = () => {
    setOpen(!open);
  };

  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
    localStorage.setItem('borderRadius', newValue);
  };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  useEffect(() => {
    const savedBorderRadius = localStorage.getItem('borderRadius');
    if (savedBorderRadius !== null) {
      setBorderRadius(parseInt(savedBorderRadius, 10));
    }
  }, []);

  const initialFont = localStorage.getItem('fontFamily') || 'Poppins';
  const [fontFamily, setFontFamily] = useState(initialFont);
  useEffect(() => {
    localStorage.setItem('fontFamily', fontFamily);
    dispatch({ type: SET_FONT_FAMILY, fontFamily });
  }, [dispatch, fontFamily]);

  const handleThemeToggle = () => {
    toggleTheme(customization.theme === 'light' ? 'dark' : 'light');
  };


  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };


  return (
    <>
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
                <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        elevation={0}
        open={open}
        PaperProps={{
          sx: {
            width: 375,
          }
        }}
      >
        <PerfectScrollbar component="div">
          <Box sx={{ p:3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="h5">App Customization</Typography>
              <CancelIcon fontSize='small' onClick={handleToggle} sx={{ cursor: 'pointer' }} />
          </Box>
          <Divider />
          <Box sx={{ maxWidth: 375,width: '100%' }}>
          <TabContext value={tabValue}>
            <Box sx={{ width: '100%' }}>
              <TabList onChange={handleChangeTab}>
                  <Tab  label={<IconDevices />} value="0" sx={{ width: '50%' }} />
                  <Tab label={<IconTextSize/>} value="1" sx={{ width: '50%' }} />
              </TabList>
            </Box>
            <TabPanel value="0" sx={{ width: '100%', p: 0 }}>
            
            <Button onClick={handleThemeToggle}>Toggle Theme</Button>
            </TabPanel>
            <TabPanel value="1" sx={{ width: '100%', p: 0 }}>
            <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
               <Grow in={grow} style={{ transformOrigin: '0 0 0' }}{...(grow ? { timeout: 1000 } : {})}>
               <SubCard title="Font Family">
                <FormControl>
                  <RadioGroup
                    aria-label="font-family"
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Roboto"
                      control={<Radio />}
                      label="Roboto"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                    <FormControlLabel
                      value="Poppins"
                      control={<Radio />}
                      label="Poppins"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                    <FormControlLabel
                      value="Inter"
                      control={<Radio />}
                      label="Inter"
                      sx={{
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                        '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                      }}
                    />
                  </RadioGroup>
                </FormControl>
                </SubCard>
               </Grow>
            </Grid>
            <Grid item xs={12}>
                <Grow in={grow} style={{ transformOrigin: '0 0 0' }}{...(grow ? { timeout: 1200 } : {})}>
                <SubCard title="Border Radius">
                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      4px
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Slider
                      size="small"
                      value={borderRadius}
                      onChange={handleBorderRadius}
                      getAriaValueText={valueText}
                      valueLabelDisplay="on"
                      aria-labelledby="discrete-slider-small-steps"
                      marks
                      step={2}
                      min={4}
                      max={24}
                      color="secondary"
                      sx={{
                        '& .MuiSlider-valueLabel': {
                          color: 'secondary.light'
                        }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="secondary">
                      24px
                    </Typography>
                  </Grid>    
                </Grid>
                </SubCard>
                </Grow>
            </Grid>
          </Grid>
            </TabPanel>
        </TabContext>
          </Box> 
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

Customization.propTypes = {
  toggleTheme: PropTypes.func
}

export default Customization;
