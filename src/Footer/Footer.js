import {Grid} from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import React from "react";

export default function footer(){
    const links = {
        intro_video_id: 'EYJDIFxpssE',
        youtube_channel: 'http://www.youtube.com/channel/UCCu-4MIbwuUDjwyLbRvuL7g',
        instagram_channel: 'https://www.instagram.com/jazzyjoker3/',
        email_address: 'mailto:linyongkai3@gmail.com',
    }
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
            <Grid item={true} xs={4}>
                <a href={links.youtube_channel}><YouTubeIcon></YouTubeIcon></a>
            </Grid>
            <Grid item={true} xs={4}>
                <a href={links.instagram_channel}><InstagramIcon></InstagramIcon></a>
            </Grid>
            <Grid item={true} xs={4}>
                <a href={links.email_address}><MailOutlineIcon></MailOutlineIcon></a>
            </Grid>
            </Grid>
        </div>
    )
}
