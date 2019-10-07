import React from 'react';
import cx from 'classnames';
import SliderContext from '../context'
import './Item.scss'
import Selection from '../Selection/Selection'
import ExpandDetails from '../Expand/Expand';

const Item = ({ movie }) => (
    <SliderContext.Consumer>
        {({ onSelectSlide, currentSlide, elementRef }) => {
            const isActive = currentSlide && currentSlide.id === movie.id;

            return (
                <div
                    ref={elementRef}
                    className={cx("item", {
                        "item--open": isActive
                    })}
                >
                    <img src={movie.image} alt="" />
                    {isActive && <Selection />}
                    <ExpandDetails onClick={() => onSelectSlide(movie)} />
                </div>
            );
        }}
    </SliderContext.Consumer>
);

export default Item;