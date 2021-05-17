import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import {BRAIN_IN_A_VAT, WU_SONG_FIGHTS_THE_TIGER} from "../Assets/ImageAssets";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'
import styles from "../Home/index.module.css";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemID: props.location.pathname,
            windowWidth: window.innerWidth,
        }
    }
    handleResize = (e) => {
        this.setState({windowWidth:window.innerWidth})
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }
    getImageDisplaySize(){
        const {windowWidth} = this.state;
        if(windowWidth>1200) return 1200;
        else if(windowWidth<300) return 300;
        else return (windowWidth-200);
    }
    findGallery=(ItemID)=>{
        const MapGallery = {'/b1':BRAIN_IN_A_VAT,'/w1':WU_SONG_FIGHTS_THE_TIGER}
        return MapGallery[ItemID]
    }
    render() {
        const {ItemID} = this.state;
        const ImageItems = this.findGallery(ItemID);
        return (
            <div>
                {/*https://www.npmjs.com/package/react-lazy-load-image-component*/}
               <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
               >
                   <Grid item={true}>
                       <h1>{/**这里放description**/}</h1>
                   </Grid>
                   {
                       ImageItems.map((item)=>(
                           <Grid item={true}>
                               <img src={item.src} style={{width:this.getImageDisplaySize()}}/>
                           </Grid>
                       ))
                   }
                   <Grid item={true} xs={12} style={{'margin-top':'2rem'}}>
                       <p>MFA in Production Design from Chapman University, pursuing a career
                           in Film and TV Art Department, currently based in Los Angeles.</p>
                   </Grid>
                   <Grid item={true}>
                       <Footer/>
                   </Grid>
               </Grid>

            </div>
        );
    }
}

Gallery.defaultProps = {
    itemID:'',
}
export default Gallery;
