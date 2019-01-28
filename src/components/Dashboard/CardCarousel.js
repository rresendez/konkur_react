import React, { Component } from 'react'
import Slide from './Slide'
import AutoRotatingCarousel  from './AutoRotatingCarousel'
import { withStyles } from '@material-ui/core/styles'

const CustomCarousel = withStyles({
            root:{
                textAlign: 'center',
                alignItems: 'center'   
            },
            content:{
                width: '90%',
                maxWidth: 1200,
                maxHeight: 700
                //color:'white',
               // fontSize:14, 
                //fontWeight: 'bold',            
            },
            arrowIcon:{
                color:'red'      
            }
             
        }    
        )(AutoRotatingCarousel);

class CardCarousel extends Component{
    //constructor(){
     //   super()
     //   this.state={
     //       message : AutoRotatingCarousel.label

      //  }

        
    //}
    
    
    render(){
        //console.log(CustomCarousel);
        

        return(
           // <div style={{ position: 'relative', width: '100%', height: 500, backgroundColor:'white' }}>
               // TEST
                <CustomCarousel 
                    open={true} 
                    autoplay={false}
                    style={{ position: 'absolute'}} 
                >
                    
                    <Slide  />
                    <Slide />
                    <Slide />
                </CustomCarousel>
          //  </div>
        );
    }
}

export default CardCarousel;