import styles from "./Question.module.css";

const Question = ({
  topic,
  text,
  name,
  isActive,
  setActiveIndex,
  answer,
  index,
}) => {
  return (
    <div onClick={() => setActiveIndex(index)} className={styles.wrapper}
    onDoubleClick={() => setActiveIndex(false)}>
      <h2>{topic}</h2>
      {isActive && (
        <div className={styles.question}>
          <h4>From {name}</h4>
          <h5>{text}</h5>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
