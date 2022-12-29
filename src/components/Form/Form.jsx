import { useForm } from "react-hook-form";
import { schema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Form.module.css";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.container}>
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
          <h4>Name:</h4>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          {!!errors.name && (
            <p className={styles.error}>{errors.name?.message}</p>
          )}
          <h4>Topic of question:</h4>
          <select
            className={styles.selector}
            placeholder="Choose topic of question"
            {...register("topic")}
          >
            <option>I have depression</option>
            <option>Question for a lawyer</option>
            <option>Social help</option>
            <option>Work in Germany</option>
            <option>Education</option>
            <option>Medicine and health</option>
            <option>Violence in family</option>
            <option selected>Other</option>
          </select>
          <h4>Ask your question here:</h4>
          <textarea className={styles.textarea} {...register("text")} />
          {!!errors.text && (
            <p className={styles.error}>{errors.text?.message}</p>
          )}
          <button className={styles.btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;