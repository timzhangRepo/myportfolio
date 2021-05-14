import React, {Component} from 'react';
import {Button, Grid, ThemeProvider, Paper,} from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styles from './index.module.css';
import {themeDark} from '../Theme/ThemeDark';
import YouTube from "react-youtube";
import {NavLink} from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            intro_video_id: 'EYJDIFxpssE',
            youtube_channel: 'http://www.youtube.com/channel/UCCu-4MIbwuUDjwyLbRvuL7g',
            instagram_channel: 'https://www.instagram.com/jazzyjoker3/',
            email_address: 'mailto:linyongkai3@gmail.com',
        }
    }

    componentDidMount() {
    }

    render() {
        const InlineStyles = {
            buttonStyle: {
                borderRadius: "20px",
                color: 'black',
                backgroundColor: 'white'
            },
            paperStyle: {
                height: "100vh",
                background: "#111111"
            },
            opts:{
                height: '720px',
                width: '1280px',
                playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                    loop: 1,
                }
            }
        }
        return (
            <ThemeProvider theme={themeDark}>
                <Paper style={InlineStyles.paperStyle}>
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
                                opts={InlineStyles.opts}
                                className={styles.video}
                            />
                        </Grid>
                        <Grid item={true} xs={12} className={styles.item}>
                            <NavLink to="/set-design"><Button variant="contained" size="large" style={InlineStyles.buttonStyle}>CLICK HERE TO SEE MY WORK </Button></NavLink>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <p className={styles.p}>MFA in Production Design from Chapman University, pursuing a career
                                in Film and TV Art Department, currently based in Los Angeles.</p>
                        </Grid>
                        <Grid item={true} xs={12} className={styles.item}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={4}
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
