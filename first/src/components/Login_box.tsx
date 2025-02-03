import "../css/Login_box.css";

const Login_box = () => {
  return (
    <div className="Login_box">
      <div className="Login_box_title">
        <h1>welcome!</h1>
        <h2>we are happy to have you </h2>
      </div>
      <hr />
      <div className="Login_box_form">
        <form>
          <label className="text" htmlFor="input">
            Username:
          </label>
          <input
            type="text"
            id="input"
            placeholder="Write here..."
            name="input"
            className="input"
            required
          />
          <button className="button_summit" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_box;
