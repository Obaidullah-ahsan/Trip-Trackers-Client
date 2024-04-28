import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const user = { name, email, photo, password };
    console.log(user);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return toast.error("Password must have an Uppercase, Lowercase, Length must be 6 character")
    }
    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
          .then(() => {})
          .catch(() => {});
        form.reset();
        console.log(result.user);
        Swal.fire({
          title: "Success",
          text: "User Register Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          title: "Error!",
          text: `${error.code=="auth/email-already-in-use"?"Email already use":"Error"}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  return (
    <div className="flex h-[520px]">
      <div className="w-[60%]">
        <img
          src={`https://i.ibb.co/xJf1NG1/nicole-geri-g-MJ3t-FOLvn-A-unsplash.jpg`}
          className="h-full w-full max-h-[520px]"
          alt=""
        />
      </div>
      <div className="w-[40%] max-h-[520px] px-8 py-2 space-y-2 bg-base-200 dark:bg-gray-200 dark:text-gray-800">
        <h1 className="text-3xl font-bold text-center">Register Now!</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="name"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="photo"
              name="photo"
              placeholder="Photo URL"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button className="h-9 min-h-9 rounded-md font-semibold bg-[#43BA7F] text-white w-full">
            Register
          </button>
        </form>
        <p className="text-base flex justify-between text-center px-2 dark:text-gray-600">
          Already have an account
          <Link to="/login" className="btn-link pl-1 dark:text-gray-800">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
