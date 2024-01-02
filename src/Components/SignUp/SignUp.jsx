import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");

    const validatePassword = (password) => {
        // Check for minimum length
        if (password.length < 6) {
            return "Password must be at least 6 characters long.";
        }

        // Check for at least one capital letter
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one capital letter.";
        }

        // Check for at least one special character
        if (!/[@#$%^&+=]/.test(password)) {
            return "Password must contain at least one special character (@, #, $, %, ^, etc.).";
        }

        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        // Validate the password
        const passwordValidationError = validatePassword(password);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }

        signUp(email, password)
            .then((res) => {
                console.log(res.user);
                if (res.user) {
                    Swal.fire("Success", "User created successfully", "success");
                }
            })
            .catch((err) => {
                Swal.fire("Error", err.message, "error");
            });
    };

    return (
        <div>
            <div className="flex justify-center mt-20">
                <div className="w-96 bg-gray-400 rounded-lg shadow-lg">
                    <h2 className="text-center mt-5 text-3xl font-bold">Welcome</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            {passwordError && (
                                <div className="text-error mt-1">{passwordError}</div>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline" type="submit" value="Sign Up" />
                        </div>
                        <div>
                            <p>
                                have an account?
                                <Link to={"/login"} className="hover:underline">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
