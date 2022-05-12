import React, { useState } from "react";

const LoginForm = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const HandelSub = (e) => {
    e.preventDefault();
  };

  const forgetPas = () => {
    console.log("work");
    setSignUp(true);
    setLogin(false);
  };

  const back = () => {
    setSignUp(false);
    setLogin(true);
  };

  return (
    <>
      {login && (
        <form>
          <p> Log Into Your Account:</p>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="the_button">
            <button onClick={HandelSub} class="btn btn-primary">
              dont need it
            </button>
            <button onClick={HandelSub} class="btn btn-primary">
              Login
            </button>
            <button onClick={forgetPas} class="btn btn-primary">
              Forgot Password?
            </button>
            <p>
              **Please be sure to register with the same email address you used
              to purchase!**
            </p>
          </div>
        </form>
      )}

      {signUp && (
        <form>
          <p> Forgot your Password? </p>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div>
            <a href="">
              <button class="btn btn-primary">
                Send me reset password instructions
              </button>
            </a>

            <button onClick={back} class="btn ">
              Login
            </button>

            <p>
              **Please be sure to register with the same email address you used
              to purchase!**
            </p>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
