import Image from 'next/legacy/image';

import classes from './place-detail.module.css';

function PlaceDetail({ place }) {
  const { title, image, location, description } = place;
  return (
    <section className={classes.detail}>
      {image.includes('http') ? (
        <img src={image} alt={title} />
      ) : (
        <Image
          src={`https://tripfinder.s3.amazonaws.com/${image}`}
          alt={title}
          width={640}
          height={360}
          priority
        />
      )}
      <h1>{title}</h1>
      <address>{location}</address>
      <p>{description}</p>
    </section>
  );
}

export default PlaceDetail;
