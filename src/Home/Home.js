import React, {Component} from 'react';
import {Button, Grid, ThemeProvider, Paper,} from "@material-ui/core";
import {AccessAlarm, Instagram, ThreeDRotation} from '@material-ui/icons';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styles from './index.module.css';
import {themeDark} from '../Theme/ThemeDark';
import YouTube from "react-youtube";
class Home extends Component {
    constructor() {
        super();
        this.state={
            intro_video_id:'EYJDIFxpssE',
            youtube_channel:'www.youtube.com/channel/UCCu-4MIbwuUDjwyLbRvuL7g',
            instagram_channel:'https://www.instagram.com/jazzyjoker3/',
            email_address:'mailto:linyongkai3@gmail.com'
        }
    }
    render() {
        const opts = {
            height: '720px',
            width: '1280px',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };

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
                    <Grid item={true} xs={12} className={styles.item}>
                        <YouTube
                        videoId={this.state.intro_video_id}
                        opts={opts}
                        />
                    </Grid>
                    <Grid item={true} xs={12} spacing={3} className={styles.item}>
                        <Button variant="contained" style={{borderRadius:"20px"}}>check out my work in detail </Button>
                    </Grid>
                    <Grid item={true} xs={12} className={styles.name}>
                        <h1>YONGKAI LIN</h1>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <p className={styles.p}>Recently graduated with an MFA in Production Design from Chapman University,
                            I continue pursuing a career in Film and TV Art Department, currently based in Los Angeles.</p>
                    </Grid>
                    <Grid item={true} xs={12} className={styles.item}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing="4"
                        >
                            <Grid item={true} xs={4}>
                                <a href={this.state.youtube_channel}><YouTubeIcon></YouTubeIcon></a>
                            </Grid>
                            <Grid item={true} xs={4}>
                                <a href={this.state.instagram_channel}><InstagramIcon></InstagramIcon></a>
                            </Grid>
                            <Grid item={true} xs={4}>
                                <a href={this.state.email_address}><MailOutlineIcon></MailOutlineIcon></a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </ThemeProvider>
        );
    }
}
export default Home;
