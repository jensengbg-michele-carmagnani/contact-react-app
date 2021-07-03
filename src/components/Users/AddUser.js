import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
const AddUser = (props) => {
  // state
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
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

  return (
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
  );
};
export default AddUser;
