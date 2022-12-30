import styles from "./QuestionList.module.css";
import Question from "../Question";
import { useState } from "react";

const QuestionList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Question
        index={1}
        isActive={activeIndex === 1}
        setActiveIndex={setActiveIndex}
        name="Name1"
        topic="Work in Germany"
        text="sjdkfsjdlfjskdjflsjdfksjdlfjsklfdjksldjflksjdfjlkjskdfjlsskdjfalksjdfjsklkfjksdlfjskjfjslfdjlsjfkjskdljfsjfjslfksljfs"
      />
      <Question
        index={2}
        isActive={activeIndex === 2}
        setActiveIndex={setActiveIndex}
        name="Name2"
        topic="Education"
        text="sjdkfsjdlfjskdjflsjdfksjdlfjsklfdjksldjflksjdfjlkjskdfjlsskdjfalksjdfjsklkfjksdlfjskjfjslfdjlsjfkjskdljfsjfjslfksljfs"
      />
      <Question
        index={3}
        isActive={activeIndex === 3}
        setActiveIndex={setActiveIndex}
        name="Name3"
        topic="Others"
        text="sjdkfsjdlfjskdjflsjdfksjdlfjsklfdjksldjflksjdfjlkjskdfjlsskdjfalksjdfjsklkfjksdlfjskjfjslfdjlsjfkjskdljfsjfjslfksljfs"
      />
    </div>
  );
};

export default QuestionList;
