// Material List components
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

// Material Icons components
import DashboardIcon from "@mui/icons-material/Dashboard"
import PeopleIcon from "@mui/icons-material/People"
import BarChartIcon from "@mui/icons-material/BarChart"

const MenuItems = (
    <>
    {/*Dashboard to Katas Button */}
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Katas"/>
        </ListItemButton>
    {/*Dashboard to Users Button */}
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users"/>
        </ListItemButton>
    {/*Dashboard to Ranking Button */}
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Rankings"/>
        </ListItemButton>
    </>
)
export default MenuItems