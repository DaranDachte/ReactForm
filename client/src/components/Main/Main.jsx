import { useState } from "react";
import Form from "../Form/Form";
import QuestionList from "../QuestionList";
import styles from "./Main.module.css";

const Main = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <QuestionList />
      <div>
        <button
          onClick={() => setClicked(true)}
          onDoubleClick={() => setClicked(false)}
        >
          Ask a question
        </button>
        {clicked && <Form />}
      </div>
    </div>
  );
};

export default Main;
