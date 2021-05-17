import React, {Component} from 'react';
import {Paper, GridListTile} from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {COVERS} from '../Assets/ImageAssets'
import styles from './index.module.css'

class SetDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth
        };
    }
    handleResize = (e) => {
        this.setState({windowWidth: window.innerWidth});
    };
    handleOnClick = (id) =>{
        console.log(id);
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }
    render() {
        const {windowWidth} = this.state;
        const numCol = windowWidth > 900 ? 2 : 1;
        const InlineStyles = {
            paper: {
                background: "#111111",
            },
            gridlist: {
                margin: '1rem'
            }
        }
        return (
            <div>
                <Paper style={InlineStyles.paper} elevation={0} square={false}>
                    <div className={styles.content}>
                        <GridList cellHeight={400} cols={numCol}>
                            {COVERS.map((item) => (
                                <GridListTile key={item.id} onClick={()=>this.handleOnClick(item.id)}>
                                    <img src={item.src}/>
                                    <GridListTileBar className={styles.GridListTileBar}
                                        title={item.title}>
                                    </GridListTileBar>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </Paper>
            </div>
        );
    }

}

export default SetDesign;
