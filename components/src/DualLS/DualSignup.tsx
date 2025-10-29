import './Dual.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

export default function DualLogin() {
    return (
        <div className='dual-login-container'>
            <div className='purple-box-signup'></div>
            <div className='white-box-signup'>
                <div className="login-box">
                    <h2>Sign Up</h2>

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
        </div>

    )
}