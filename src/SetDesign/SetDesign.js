import React, {Component} from 'react';
import {themeDark} from "../Theme/ThemeDark";
import {Button, Grid, ThemeProvider, Paper,} from "@material-ui/core";
import { ImageList } from '@material-ui/core';

class SetDesign extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        const InlineStyles = {
            paper: {
                height: "100vh",
                background: "#111111",
            },
        }
        return (
            <ThemeProvider theme={themeDark}>
                <Paper style={InlineStyles.paper}>
                </Paper>
            </ThemeProvider>
        );
    }
}

export default SetDesign;
