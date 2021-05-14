import React, {Component} from 'react';
import {themeDark} from "../Theme/ThemeDark";
import {Button, Grid, ThemeProvider, Paper,} from "@material-ui/core";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import SetDesign from "../SetDesign/SetDesign";
import Home from "../Home/Home";
import styles from './index.module.css';

export function navgationItems() {
    return (
        <div className={styles.navgationItems}>
            <NavLink activeClassName={styles.activeNavigationItem} exact to="/">HOME</NavLink>
            <NavLink activeClassName={styles.activeNavigationItem} to="/set-design">SET DESIGN</NavLink>
            <NavLink activeClassName={styles.activeNavigationItem} to="/concept-art">CONCEPT ART</NavLink>
            <NavLink activeClassName={styles.activeNavigationItem} to="/graphic-design">GRAPHIC DESIGN</NavLink>
        </div>
    )
}

class NavBar extends Component
{
    constructor(props)
    {
        super();
        this.state = {
            displayNavigation: true,
        }
    }
    render()
    {
        let navigation;
        if (this.state.displayNavigation) {
            navigation = navgationItems();
        }
        return (
            <ThemeProvider theme={themeDark}>
                <Paper style={{background: '#111111'}}>
                    <BrowserRouter>
                        <div className={styles.navbar}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item={true} xs={4}>{navigation}</Grid>
                                <Grid item={true} xs={4} style={{textAlign: 'center'}}>
                                    <h1>YONGKAI LIN</h1>
                                </Grid>
                                <Grid item={true} xs={4} style={{textAlign: 'right'}}>
                                    {/*这里显示Hamburger Menu*/}
                                </Grid>
                            </Grid>
                        </div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/set-design" component={SetDesign}/>
                        </Switch>
                    </BrowserRouter>
                </Paper>
            </ThemeProvider>
        );
    }
}
export default NavBar;

