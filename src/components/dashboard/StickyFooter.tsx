import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CopyRights from "./CopyRights"

const StickyFooter = () => {
  return (
    <Box 
        sx={
            {
                display: "flex", 
                flexDirection: "column" 
            }
        }
    >
        <CssBaseline />
        <Box 
        component="footer" 
            sx = {
                {
                    py: 3, 
                    px: 2, 
                    mt: 'auto', 
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
                }
            }
        >
            <Container maxWidth="sm">
                <CopyRights 
                    sx={
                        {
                            pt: 4
                        }
                    }
                />
            </Container>
        </Box>
    </Box>
  )
}
export default StickyFooter
