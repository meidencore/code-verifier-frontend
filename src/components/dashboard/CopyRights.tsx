import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from "@mui/material/colors";

const CopyRights = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        <span>Made with </span>
        <FavoriteIcon 
            sx = {
                { 
                    color: red[500] 
                }
            } 
        /> 
        <span> by </span>
        <Link color="inherit" href="https://meidencore.github.io">meidencore</Link>
    </Typography>
  )
}
export default CopyRights
