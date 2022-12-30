import styles from "./Question.module.css";

const Question = ({ topic, text, name, isActive, setActiveIndex, index }) => {
  return (
    <div onClick={() => setActiveIndex(index)}>
      <h2 className="">{topic}</h2>
      {isActive && (
        <div>
          <h4>From {name}</h4>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
