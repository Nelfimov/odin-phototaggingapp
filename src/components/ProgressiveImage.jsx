import React, {useState, useEffect} from 'react';
import propTypes from 'prop-types';
import snowBackground from '../images/snow.jpg';
import snowThumbnail from '../images/snow.thumbnail.jpg';
import beachBackground from '../images/beach.jpg';
import beachThumbnail from '../images/beach.thumbnail.jpg';
import '../styles/ProgressiveImage.css';

const ProgressiveImage = ({field}) => {
  let placehoalder;
  let image;
  if (field === 'snow') {
    placehoalder = snowThumbnail;
    image = snowBackground;
  } else {
    placehoalder = beachThumbnail;
    image = beachBackground;
  };

  const [src, setSrc] = useState(placehoalder);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setSrc(image);
    };
  }, [field]);

  const customClass = placehoalder && src === placehoalder ?
    'loading' :
    'loaded';

  return (
    <img src={src} alt="background" className={`background ${customClass}`} />
  );
};

ProgressiveImage.propTypes = {
  field: propTypes.string,
};

export default ProgressiveImage;
