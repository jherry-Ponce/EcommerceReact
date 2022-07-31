import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const  ImageGallaryComponent = (props) => {
   console.log(props);
        return (
            <div>     
                       
                <Carousel interval="5000" transitionTime="1000">
                  {
                   /*  <div>
                        <img src={} />                        
                    </div> */
                  }
                    
                </Carousel>
            </div>
        )

}
export default ImageGallaryComponent; 