import React from 'react';

const PhotoCarousel = (props) => {
  
  const carouselId = `carousel${props.prodId}`;
  const hashCarouselId = `#${carouselId}`;
  const slides = props.imgs_url.map((url, index) => {
    let altText = `Slice ${index + 1}`;
    if (index === 0) {
      return (
        <div className="carousel-item active">
          <img className="d-block w-100" src={url} alt={altText} />
        </div>
      );
    }
    return (
      <div className="carousel-item">
        <img className="d-block w-100" src={url} alt={altText} />
      </div>
    );
  });

  return (
    // <div>
    <div id={carouselId} className="carousel slide" data-ride="carousel" data-interval="false">
      <ol className="carousel-indicators">
        <li data-target={hashCarouselId} data-slide-to="0" className="active"></li>
        <li data-target={hashCarouselId} data-slide-to="1"></li>
        <li data-target={hashCarouselId} data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {slides}
      </div>
      <a className="carousel-control-prev" href={hashCarouselId} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={hashCarouselId} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  );
};

export default PhotoCarousel;
