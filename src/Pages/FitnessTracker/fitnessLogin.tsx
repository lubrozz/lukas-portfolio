import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const navigate = useNavigate();

const userData = await fetch(`${API_BASE_URL}/api/users/:id`).then((res) =>
  res.json()
);
const onSubmit = (data: any) => {
  if (userData.username) {
    if (userData.password === data.password) {
      navigate("/FitnessPage");
    } else {
      console.log("Incorrect password");
      alert("password is incorrect");
    }
  } else {
    console.log("username not found");
    alert("username not found");
  }
};

const FitnessLogin = () => {
  return (
    <>
      <h2>Login form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="username"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        {errors.username && (
          <span style={{ color: "red" }}>Username is mandatory</span>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && (
          <span style={{ color: "red" }}>Password is mandatory</span>
        )}

        <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
};

export default FitnessLogin;
