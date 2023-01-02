import { AppBar, Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import logo from '../../assets/LogoWA120.png';
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidht = 240 }) => {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidht }, flexShrink: { sm: 0 } }}>

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidht }
                }}>

                <Toolbar>
                    <Typography variant="h6" noWrap component='div' >
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <Scrollbars>
                    <List sx={{ mb: 2, pb: '50px' }}>
                        {
                            notes.map(note => (
                                <SideBarItem key={note.id} {...note} />
                            ))
                        }
                    </List>
                </Scrollbars>


                <AppBar position="fixed" color="background" sx={{ top: 'auto', bottom: 0, width: drawerWidht, left: 0, alignItems: 'center' }}>
                    <Toolbar>
                        <img
                            src={logo}
                            position='center'
                        />
                    </Toolbar>
                </AppBar>
            </Drawer>
        </Box>
    )
}
