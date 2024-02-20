import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

function ImagePicker({ label, name, onChange }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const pickClickHandler = () => {
    imageInputRef.current.click();
  };

  const imageChangeHandler = event => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    onChange(file.name);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image
              src={pickedImage}
              alt='The image selected by the user.'
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={imageChangeHandler}
          required
        />
        <button
          className={classes.button}
          type='button'
          onClick={pickClickHandler}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
