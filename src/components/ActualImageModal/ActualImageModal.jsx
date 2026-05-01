import React, { Component } from "react";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//? Додавання плагінів Yet Another React Lightbox
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import css from './ActualImageModal.module.css';

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
		
	const {
		images,
		imagesFull, 
		briefName, 
		nameFull, 
		description,
    templateImage
	} = 	this.props;
	
	const { open, index } = this.state;

	// console.log('Images: ', images);

	 //! Масив об'єктів зображень для Lightbox
	// const slides = images.map((src) => ({ src }));
	
  // if (imagesFull.length === 0) imagesFull.push(...images); 
  // //todo: тимчасово, бо немає всіх imagesFull

  
  console.log('Template: ', templateImage);

	const slides = (imagesFull.length ? imagesFull : images).map((src) => ({ 
			src,
      title: nameFull,
      description: description,
	}));
  //! Перевірка: Якщо у нас images це масив, то використовуємо images.map((item, i) => (), якщо ні то template
    return (
			<div className={css.imageContainer}>
				{images.map((item, i) => (
					<img
						key={i}
						src={item}
						alt={`${briefName} actual view ${i + 1}`}
						className={
              images[0] === templateImage
              ? `${css.actualImageTemplate}`
              : `${css.actualImage}`
            }
						// onClick={() => this.openLightbox(i)} 
						onClick = {
              images[0] === templateImage

              ? null
              : () => this.openLightbox(i)
            }
					/>
				))}
				<Lightbox
          open={open}
          close={this.closeLightbox}
          slides={slides}
          index={index}
					counter={{
              container: {
                style: {
                  top: "6vh",
                  bottom: "unset",
                  left: "4vw",
                  fontSize: "1.25em",
                  fontWeight: 900,
                  color: "red",
                }
              }
            }}
					captions={{
              showToggle: true,
              descriptionTextAlign: "center",
              descriptionMaxLines: 3
          }}
					thumbnails={{
              position: "bottom",
              width: 120,
              height: 80,
              border: 1,
              borderRadius: 4,
              padding: 4,
              gap: 16,
              imageFit: "contain",
              vignette: true,
              hidden: false,
              showToggle: true
          }}

					plugins={[Fullscreen, Zoom, Download, Slideshow, Counter, Captions, Thumbnails]}

				/>
			</div>
		)
	};
};
// ! Змінити реакцію на клік по блоку зображення. 