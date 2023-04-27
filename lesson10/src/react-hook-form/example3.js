import { useForm } from "react-hook-form";
import { TextError } from "../components";

export default function Example3() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", {
          required: true,
          minLength: 2,
          pattern: /[A-Za-z]{3}/,
        })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <TextError>First name is required</TextError>
      )}
      {errors.firstName?.type === "minLength" && (
        <TextError>First name is min length = 20</TextError>
      )}
      {errors.firstName?.type === "pattern" && (
        <TextError>First name is not valid pattern</TextError>
      )}
      <br />
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <TextError>{errors.mail?.message}</TextError>}

      <input type="submit" />
    </form>
  );
}
