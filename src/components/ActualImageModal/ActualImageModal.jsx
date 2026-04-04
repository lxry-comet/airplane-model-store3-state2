import React, { Component } from "react";

import Lightbox from "yet-another-react-lightbox";

import css from './ActualImageModal.module.css';
import "yet-another-react-lightbox/styles.css";

export class ActualImageModal extends Component {

	state = {
    open: false,
    index: 0
  };

  openLightbox = (i) => {
    this.setState({
      open: true,
      index: i
    });
  };

  closeLightbox = () => {
    this.setState({
      open: false
    });
  };

	render() {
	const {images, briefName} = 	this.props;
	
	const { open, index } = this.state;

	console.log('Images: ', images);

	 //! Масив об'єктів зображень для Lightbox
	const slides = images.map((src) => ({ src }));
	
    return (
			<div className={css.imageContainer}>
				{images.map((item, i) => (
					<img
						key={i}
						src={item}
						alt={`${briefName} actual view ${i + 1}`}
						className={css.actualImage}
						onClick={() => this.openLightbox(i)}
					/>
				))}
				<Lightbox
          open={open}
          close={this.closeLightbox}
          slides={slides}
          index={index}
				/>
			</div>
		)
	};
};