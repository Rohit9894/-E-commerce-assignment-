import { authUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
const initState = {
  username: "",
  password: "",
};
const Login = () => {
  const [formState, setFormState] = useState(initState);
  const [show, setShow] = useState<boolean>(false);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const isError = useSelector((state: RootState) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.auth.loading);
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    let username = "mor_2314";
    let password = "83r5^_";
    if (formState.username !== username || formState.password !== password) {
      alert("Incorrect Credentials");
      setFormState(initState);
      return;
    }
    e.preventDefault();
    // @ts-ignore
    dispatch(authUser(formState));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }
  const { username, password } = formState;
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
    if (isError) {
      alert("error");
    }
  }, [isAuth, isError, navigate]);
  return (
    <div className="container">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold  text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  type="text"
                  placeholder="mor_2314"
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
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="83r5^_"
                  type={show ? "text" : "password"}
                  required
                  className="input-style"
                />
                <Button
                  onClick={() => setShow(!show)}
                  type="button"
                  className="absolute top-0 right-0"
                >
                  {show ? "Hide" : "Show"}
                </Button>
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
