import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import {BRAIN_IN_A_VAT, WU_SONG_FIGHTS_THE_TIGER, SUDANESE_RUINS, ELON_MUSK, THE_APARTMENT, JAZZ_WITH_RYAN_GOSLING_LATE_NIGHT_SHOW, INCA_KEY, CONCEPT, GRAPHICS} from "../Assets/ImageAssets";
import Footer from '../Footer/Footer'
import styles from "../Home/index.module.css";
import {STORIES} from '../Assets/TextAssets'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemID: props.location.pathname,
            windowWidth: window.innerWidth,
        }
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ItemID: this.props.location.pathname});
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
        const MapGallery = {'/graphic-design':GRAPHICS, '/concept-art':CONCEPT,'/b1':BRAIN_IN_A_VAT,'/w1':WU_SONG_FIGHTS_THE_TIGER, '/e1': ELON_MUSK, '/a1':THE_APARTMENT, '/j1':JAZZ_WITH_RYAN_GOSLING_LATE_NIGHT_SHOW, '/i1':INCA_KEY ,'/s1':SUDANESE_RUINS}
        return MapGallery[ItemID]
    }
    render() {
        const {ItemID} = this.state;
        const ImageItems = this.findGallery(ItemID);
        const Text = STORIES[ItemID]
        /*default*/
        let InlineStyles = {
            Grid_1:{padding:'1rem 2rem 1rem 2rem'},
            Grid_2:{padding:'1rem 2rem 1rem 2rem'},
        }
        if(ItemID==='/graphic-design' || ItemID==='/concept-art'){
            /*For Non-Set Design Pages*/
            InlineStyles = {
                Grid_1:{padding:'0'},
                Grid_2:{padding:'0rem 2rem 1rem 2rem'},
            }
        }
        return (
            <div>
               <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
               >
                   <Grid item={true}>
                       <h3>{Text.title}</h3>
                   </Grid>
                   <Grid item={true} style={InlineStyles.Grid_1}>
                       <p className={styles.p}>{Text.src}</p>
                   </Grid>
                   <Grid item={true} style={InlineStyles.Grid_2}>
                       <p className={styles.p}>{Text.extra}</p>
                   </Grid>
                   {
                       ImageItems.map((item)=>(
                           <Grid item={true} key={item.id}>
                               <img src={item.src} style={{width:this.getImageDisplaySize()}}/>
                           </Grid>
                       ))
                   }
                   <Grid item={true} xs={12} style={{'margin':'2rem 0 1rem 0'}}>
                       <p className={styles.p}>MFA in Production Design from Chapman University, pursuing a career
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
