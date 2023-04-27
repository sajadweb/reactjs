/**
 * Step 1: Install Yup into your project.
 * npm install @hookform/resolvers yup
 */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextError } from "../components";

const schema = yup
  .object({
    firstName: yup.string().min(3).max(100).required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export function Example4() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <br />
      <TextError>{errors.firstName?.message}</TextError>
      <br />
      <input {...register("age")} />
      <br />
      <TextError>{errors.age?.message}</TextError>
      <br />
      <input type="submit" />
    </form>
  );
}
