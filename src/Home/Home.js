import React, {Component} from 'react';
import {Button, Grid, ThemeProvider, Paper,} from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import styles from './index.module.css';
import YouTube from "react-youtube";
import {NavLink} from "react-router-dom";
import Footer from "../Footer/Footer";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            intro_video_id: 'EYJDIFxpssE',
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
            <div>
                    {/* Paper can make themeDark change */}
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{border:'none'}}
                        elevation={0}
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
                            <Footer/>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

export default Home;
