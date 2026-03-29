import React, { Component } from "react";

import css from './ActualImageModal.module.css';

export class ActualImageModal extends Component {
	render() {
	const {images, briefName} = 	this.props;
	console.log('Images: ', images);
    return (
			<div className={css.imageContainer}>
				{images.map((item, i) => (
					<img
						key={i}
						src={item}
						alt={`${briefName} actual view ${i + 1}`}
						className={css.actualImage}
					/>
				))}
			</div>
		)
	};
};