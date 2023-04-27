import { Typography } from "antd";
import { useForm } from "react-hook-form";
const { Text } = Typography;
export default function Sample1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //api
    //data
    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      <br />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      <br /> 
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <Text type="danger">این فیلد الزامی است</Text>}

      <br />
      <input type="submit" />
    </form>
  );
}
