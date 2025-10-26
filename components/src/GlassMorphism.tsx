import './GlassMorphism.css'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

export default function GlassMorphism() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome</h2>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="login-btn">LOGIN</button>

                <div className="links">
                    <a href="#">Forgot Password?</a>
                    <a href="#">Sign Up</a>
                </div>

                <p className="or-text">OR LOGIN WITH</p>

                <div className="social-login">
                    <button className="google">
                        <FaGoogle />
                    </button>
                    <button className="facebook">
                        <FaFacebookF />
                    </button>
                </div>
            </div>
        </div>
    )
}   