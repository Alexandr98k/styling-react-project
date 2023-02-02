import { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({ invalid }) => (invalid ? 'red' : '#291b25')};
//   }

//   & input {
//     color: #000;
//     display: block;
//     border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
//     background-color: ${({ invalid }) => (invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0.25rem 0.5rem;
//     width: 70%;
//     margin: 0 auto;
//   }

//   & input:focus {
//     outline: none;
//     border-color: #8b005d;
//   }
// `;

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    //if input value is true remove conditional styles
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    //
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //checking entered input value
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    //
    props.onAddGoal(enteredValue);

    //two way binding
    setEnteredValue('');

    //bluring input field
    //do it later!!!
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* динамічно визначаємо колір підпису та бордеру в інпуті*/}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
