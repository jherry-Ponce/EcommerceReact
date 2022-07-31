import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const  ImageGallaryComponent = () => {
   
        return (
            <div>     
                       
                <Carousel interval="5000" transitionTime="1000">
                    <div>
                        <img src="https://i.linio.com/p/77488b075798cddb165a9764840555fc-product.webp" />                       
                    </div>
                    <div>
                        <img src="https://i.linio.com/p/1fd6fdbc9979e3a280ab2a2ac8d1a464-product.webp" />                        
                    </div>
                    <div>
                        <img src="https://i.linio.com/p/501cd47fb8a233f88c1e489911bf4778-product.webp" />                        
                    </div>
                </Carousel>
            </div>
        )

}
export default ImageGallaryComponent; 