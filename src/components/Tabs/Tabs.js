import React, { useContext} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {UserContext} from '../../App'
import {  useTheme, withStyles } from '@material-ui/core/styles';
export const FeatureTabs = (props) => {
    const rootContext =  useContext(UserContext)
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        rootContext.dispatch({"type": 'select-tab',"value": newValue})
    }
    
    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
      }
      
      const AntTabs = withStyles({
        root: {
            backgroundColor: "#000000",
        },
        indicator: {
            backgroundColor: "#e056fd",
            height: "6px",
            top: "0px",
            borderRadius: "8px 8px 0px 0px",
        },
      })(Tabs);
      
      const AntTab = withStyles((theme) => ({
        root: {
            textTransform: 'none',
            maxWidth: '100%',
            height: 12,
            marginRight: theme.spacing(1),
            backgroundColor: "#1F242B",
            color: "#e056fd",
            borderRadius: "8px",
            borderColor: "#e056fd",
            borderWidth: "5px 5px 5px",
            textAlign:'center',
            fontSize:'large',
          
        },
        selected: {},
      }))((props) => <Tab disableRipple {...props} />);
    
    return (
        <div>
    <AntTabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"

                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <AntTab label="Online Presence" {...a11yProps(0)} />
                        <AntTab label="Business Operations" {...a11yProps(1)} />
                        <AntTab label="Provisional Services" {...a11yProps(2)} />
                        <AntTab label="Technology & IT" {...a11yProps(3)} />
                        <AntTab label="Academy" {...a11yProps(4)} />
                        
                    </AntTabs>
                    </div>
    )
}
  