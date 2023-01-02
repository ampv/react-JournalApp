import { Grid, Typography } from "@mui/material"
import wave from '../../assets/wave.png'
import wa from '../../assets/logoWA.png'

export const AuthLayout = ({ children, title = '' }) => {
    return (

        <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh', backgroundColor: 'seconday.main', padding: 2 }} >

            <Grid item className="wave" >
                <img src={wave} />
            </Grid>

            <Grid item className="img" sx={{mb:10}}>
                <img src={wa} />
            </Grid>

            <Grid
                item
                className="box-shadow"
                xs={12}
                sx={{ width: { sm: '50' }, backgroundColor: 'white', padding: 4, borderRadius: 2 }} >

                <Typography variant="h5" sx={{ mb: 1 }}>
                    {title}
                </Typography>

                {children}

            </Grid>
        </Grid>
    )
}
