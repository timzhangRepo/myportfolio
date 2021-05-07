import React, {Component} from 'react';
import {Button, createMuiTheme, Grid, ThemeProvider, Paper, Borders,} from "@material-ui/core";
import style from './index.module.css';
import {themeDark} from '../Theme/ThemeDark';

class Home extends Component {
    render() {
        return (
            <ThemeProvider theme={themeDark}>
            <Paper style={{height:"100vh", background:"#111111"}}>
                {/* Paper can make themeDark change */}
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid Item xs={12}>This is where we will show video</Grid>
                    <Grid Item xs={12}>
                        <Button variant="contained" style={{borderRadius:"20px"}}>check out my work in detail </Button>
                    </Grid>

                    <Grid Item>
                        <h2>YONGKAI LIN</h2>
                    </Grid>
                    <Grid>
                        <p>Recently graduated with an MFA in Production Design from Chapman University,
                            I continue pursuing a career in Film and TV Art Department, currently based in Los Angeles.</p>
                    </Grid>
                    <Grid Item>
                        Social
                    </Grid>
                </Grid>
            </Paper>
            </ThemeProvider>
        );
    }
}
export default Home;