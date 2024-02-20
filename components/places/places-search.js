import { useRef } from 'react';

import Button from '../ui/button';
import classes from './places-search.module.css';

function PlacesSearch(props) {
  const typeInputRef = useRef();
  const tempInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedType = typeInputRef.current.value;
    const selectedTemp = tempInputRef.current.value;

    props.onSearch(selectedType, selectedTemp);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='type'>Type</label>
          <select id='type' ref={typeInputRef}>
            <option value='adventure'>Adventure</option>
            <option value='beach'>Beach</option>
            <option value='monument'>Monument</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='temp'>Temperature</label>
          <select id='temp' ref={tempInputRef}>
            <option value='hot'>Hot</option>
            <option value='cold'>Cold</option>
            <option value='temperate'>Temperate</option>
          </select>
        </div>
      </div>
      <Button>Find Places</Button>
    </form>
  );
}

export default PlacesSearch;
