import React, {Component} from 'react';
import {Paper, GridListTile} from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {COVERS} from '../Assets/ImageAssets'
import styles from './index.module.css'
class SetDesign extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        const InlineStyles = {
            paper: {
                background: "#111111",
            },
            gridlist:{
                margin:'1rem'
            }
        }
        return (
            <div>
                <Paper style={InlineStyles.paper} elevation={0} square={false} >
                    <di className={styles.content} >
                    <GridList cellHeight={400} cols={2}>
                        {COVERS.map((item) =>(
                            <GridListTile key={item.id} >
                                <img src={item.src} className={styles.image}/>
                                <GridListTileBar
                                    title={item.title} style={{height:'100%',textAlign:'center' }}>
                                </GridListTileBar>
                            </GridListTile>
                        ))}
                    </GridList>
                    </di>
                </Paper>
            </div>
        );
    }
}

export default SetDesign;
