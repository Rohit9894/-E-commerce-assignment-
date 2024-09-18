import { authUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {RootState} from "../redux/store"
const initState = {
  username: "mor_2314",
  password: "83r5^_",
};
const Login = () => {
  const [formState, setFormState] = useState(initState);
  const isAuth = useSelector((state:RootState) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state:RootState) => state.auth.loading);
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(authUser(formState));
  }
  if (isAuth) {
    navigate("/");
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  const { username, password } = formState;
  return (
    <div className="container">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  type="text"
                  onChange={handleChange}
                  required
                  className="input-style"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  type="password"
                  required
                  className="input-style"
                />
              </div>
            </div>

            <div>
              <Button type="submit" disabled={loading} className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
