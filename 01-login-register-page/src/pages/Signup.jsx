import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
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
            alert("Signup successful!");
        }, 1500);
    };

    return (
        <section className="login signup">
            <div className="form-container">
                <div className="text-section">
                    <h2>Create your account</h2>
                    <p>Please fill in the details to sign up.</p>
                </div>

                <form className="form-section" onSubmit={handleSubmit}>
                    <p>Name</p>
                    <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    {errors.name && <span className="error">{errors.name}</span>}

                    <p>Email</p>
                    <input type="text" placeholder="example@gmail.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <p className="password-para">Password</p>
                    <div className="password-wrapper">
                        <input type={showPassword ? "text" : "password"} placeholder="••••••••••" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    {errors.password && (
                        <span className="error">{errors.password}</span>
                    )}

                    <p className="password-para">Confirm Password</p>
                    <div className="password-wrapper">
                        <input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••••" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value, })} />
                        <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    {errors.confirmPassword && (
                        <span className="error">{errors.confirmPassword}</span>
                    )}

                    <button type="submit" disabled={loading}>
                        {loading ? "Signing up..." : "Submit"}
                    </button>
                </form>

                <p className="sign-up-section">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </div>
        </section>
    );
}
