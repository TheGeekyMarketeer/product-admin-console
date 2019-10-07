import React, { useState  } from 'react';
import cx from 'classnames';
import SliderContext from '../context';
import SliderContainer from '../SliderContainer/SliderContainer';
import useSizeElement from '../SizeCalc/sizeCalc';
import SliderButton from '../SlideButton/SliderButton';
import Content from '../../Presentation/Content/Content';
import useSliding from '../Sliding/sliding'
import './Slider.scss'

const Slider = ({ children, activeSlide }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide);
    const { width, elementRef } = useSizeElement();
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev
    } = useSliding(width, React.Children.count(children));

    const handleSelect = movie => {
        setCurrentSlide(movie);
    };

    const handleClose = () => {
        setCurrentSlide(null);
    };

    const contextValue = {
        onSelectSlide: handleSelect,
        onCloseSlide: handleClose,
        elementRef,
        currentSlide,
    };

    return (
        <SliderContext.Provider value={contextValue}>
            <SliderContainer>
                <div
                    className={cx('slider', { 'slider--open': currentSlide != null })}>
                <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
                </div>
                {hasPrev && <SliderButton onClick={handlePrev} type="prev" />}
                {hasNext && <SliderButton onClick={handleNext} type="next" />}
            </SliderContainer>
            {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
        </SliderContext.Provider>
    );
};

export default Slider;
