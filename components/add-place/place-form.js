import { useState } from 'react';
import ImagePicker from '@/components/ui/image-picker';
import PlaceFormSubmit from '@/components/ui/place-form-submit';

import classes from './place-form.module.css';

function PlaceForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: '',
    temp: '',
    budget: '',
    rating: 5,
    image: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = image => {
    setFormData({ ...formData, image });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    /*fetch('/api/add-place', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });*/
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Add your favorite place</h1>
        <p>Or any other place you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              rows='3'
              required
            ></textarea>
          </p>
          <p>
            <label htmlFor='location'>Location</label>
            <textarea
              id='location'
              name='location'
              value={formData.location}
              onChange={handleChange}
              rows='2'
              required
            ></textarea>
          </p>
          <div className={classes.row}>
            <p>
              <label htmlFor='type'>Type</label>
              <input
                type='text'
                id='type'
                name='type'
                value={formData.type}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor='temp'>Temperature</label>
              <input
                type='text'
                id='temp'
                name='temp'
                value={formData.temp}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor='budget'>Budget</label>
              <input
                type='text'
                id='budget'
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </p>
          </div>

          <p>
            <label htmlFor='rating'>Rating out of 5</label>
            <input
              type='number'
              id='rating'
              name='rating'
              value={formData.rating}
              onChange={handleChange}
              max={5}
              min={1}
              required
            />
          </p>

          <ImagePicker
            label='Your image'
            name='image'
            onChange={handleImageChange}
          />
          <p className={classes.actions}>
            <PlaceFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}

export default PlaceForm;
