import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper"
import { useState } from "react";
const AddUser = (props) => {
  // state
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty value ",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid  age > 0 (non empty value ",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUserName}
            id="username"
            type="text"
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age(year)</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
