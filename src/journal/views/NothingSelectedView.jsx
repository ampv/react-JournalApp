import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            position='center'
            className="animate__animated animate__fadeIn"
            sx={{ minHeight: 'calc(110vh - 110px)', backgroundColor: 'primary.main', borderRadius: 1 }}
        >

            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color='white' variant='h5'>Selecciona o crea una entrada</Typography>
            </Grid>
        </Grid>
    )
}
