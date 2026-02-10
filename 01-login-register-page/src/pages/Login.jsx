import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Login successful");
        }, 1500);
    };

    return (
        <section className="login">
            <div className="form-container">
                <div className="text-section">
                    <h2>Log in to your account</h2>
                    <p>Welcome back! Please enter your details.</p>
                </div>

                <form className="form-section" onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input type="text" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <p className="password-para">Password</p>
                    <div className="password-wrapper">
                        <input type={showPassword ? "text" : "password"} placeholder="••••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>

                    {errors.password && (
                        <span className="error">{errors.password}</span>
                    )}

                    <a href="/" className="forgot-link">Forget Password</a>
                    <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Submit"}</button>
                </form>

                <p className="sign-up-section">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </section>
    );
}
