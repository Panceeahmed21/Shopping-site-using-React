import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Signup = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");

  const onSubmit = (data, e) => {
    e.preventDefault();
  };
  const options = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  console.log(errors);
  return (
    <div className="container py-5">
      <h2 className="my-3">Sign up Now !</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            {...register("name", { required: true, maxLength: 50 })}
          />

          {errors?.name?.type == "required" && (
            <p className="text-danger fw-bold">Name is required</p>
          )}
          {errors?.name?.type == "maxLength" && (
            <p className="text-danger fw-bold"> max Length is 50</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors?.email?.type == "required" && (
            <p className="text-danger fw-bold">Email is required</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors?.password?.type == "required" && (
            <p className="text-danger fw-bold">Password is required</p>
          )}
          {errors?.password?.type == "minLength" && (
            <>
              <p className="text-danger fw-bold"> min length is 8</p>
            </>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("rePassword", {
              required: true,
              validate: (value) => {
                return value === password || "Passwords do not match";
              },
            })}
          />
          {errors?.rePassword?.type == "required" && (
            <p className="text-danger fw-bold"> Confirm Password is required</p>
          )}
          {errors?.rePassword && (
            <p className="alert my-2 alert-danger">
              {errors?.rePassword?.message}
            </p>
          )}
        </Form.Group>
        <Form.Group>
          <label htmlFor="">Gender</label>
          <Select type="select" className="my-2" options={options}  />

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
