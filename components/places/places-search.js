import { useRef } from 'react';

import Button from '../ui/button';
import classes from './places-search.module.css';

function PlacesSearch(props) {
  const typeInputRef = useRef();
  const tempInputRef = useRef();
  const budgetInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedType = typeInputRef.current.value;
    const selectedTemp = tempInputRef.current.value;
    const selectedBudget = budgetInputRef.current.value;

    props.onSearch(selectedType, selectedTemp, selectedBudget);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='type'>Type</label>
          <select id='type' ref={typeInputRef}>
            <option value='nature'>Nature</option>
            <option value='beach'>Beach</option>
            <option value='monument'>Monument</option>
            <option value='religious'>Religious</option>
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
        <div className={classes.control}>
          <label htmlFor='budget'>Budget</label>
          <select id='budget' ref={budgetInputRef}>
            <option value='expensive'>Expensive</option>
            <option value='affordable'>Affordable</option>
            <option value='cheap'>Cheap</option>
          </select>
        </div>
      </div>
      <Button>Find Places</Button>
    </form>
  );
}

export default PlacesSearch;
