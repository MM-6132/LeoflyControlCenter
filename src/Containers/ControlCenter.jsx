import {Button, Container, Grid, Typography} from "@mui/material";
import AppWidgetSummary from "../Components/AppWidgetSummary";
import Chart from "../Components/Chart";

export const ControlCenter = () => {

    return (
        <div className="ControlCenter">
            <Button variant="contained" component="label" color="success">
                Import python file
                <input hidden accept="*" multiple type="file" />
            </Button>
            <Container className="ContainerControlCenter" maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Centre de controle
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={2.4}>
                        <AppWidgetSummary title="Temperature" total={24.2 + ' C'} icon={'mdi:temperature-lines'} />
                    </Grid>

                    <Grid item xs={2.4}>
                        <AppWidgetSummary title="Pressure" total={1 + ' Pa'} color="info" icon={'carbon:pressure-filled'} />
                    </Grid>

                    <Grid item xs={2.4}>
                        <AppWidgetSummary title="Gaz 1" total={1723315} color="warning" icon={'material-symbols:co2-rounded'} />
                    </Grid>

                    <Grid item xs={2.4}>
                        <AppWidgetSummary title="Accelerometer" total={1 + ' G'} color="error" icon={'fluent:fast-acceleration-20-filled'} />
                    </Grid>
                    <Grid item xs={2.4}>
                        <AppWidgetSummary title="UV" total={234 + ' µW/lm'} color="warning" icon={'tabler:uv-index'} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={12}>
                        <Chart/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}