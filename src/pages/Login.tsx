import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyJwt";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispath = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();

  console.log("data =>", data);
  console.log("eror =>", error);

  const onSubmit = async (data: FieldValues) => {
   const toastid = toast.loading("logging in");
    try {
      const userinfo = {
        id: data.userid,
        password: data.password,
      };

      const res = await login(userinfo).unwrap();
      const user = verifyToken(res.data.accestokem) as TUser;
      dispath(setUser({ user: user, token: res.data.accestokem }));
      toast.success('logged in', {id:toastid, duration: 2000 })
      navigate(`{user?.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Id: </label>
        <input type="text" {...register("id")} name="id" id="" />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" {...register("password")} name="password" id="" />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
