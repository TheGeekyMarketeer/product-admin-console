import React from 'react'
import './SkeletonContainer.scss'

const SliderSkeleton = () => (
    <div className="slider-skeleton-container">
        <div className= 'slider-skeleton'>
            <div className="slider-skeleton__container" >
                <div className= "skeleton-item">
                    <div  className= "placeholder">
                       
                    </div>
                </div>
                <div className="skeleton-item">
                    <div className="placeholder">

                    </div>
                </div>
                <div className="skeleton-item">
                    <div className="placeholder">

                    </div>
                </div>
                <div className="skeleton-item">
                    <div className="placeholder">

                    </div>
                </div>
                <div className="skeleton-item">
                    <div className="placeholder">

                    </div>
                </div>
                
               
            </div>
        </div>
    </div>
);

export default SliderSkeleton;
