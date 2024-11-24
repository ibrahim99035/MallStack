import React, { useState } from 'react';
import { useAuth } from 'react-auth-kit';  
import { loginUser } from '../../API/auth/login';  
import ClipLoader from 'react-spinners/ClipLoader';

import '../../CSS/Login.css';
import Logo from '/icons/MallStackTitledCleared.png';

import { FaEye } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { TbLogin2 } from "react-icons/tb";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn } = useAuth(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Use the external loginUser function to log in
            const data = await loginUser({ email, password });

            // Sign in with react-auth-kit
            signIn({
                token: data.token,
                expiresIn: 3600,  // Token expiration time (in seconds)
                tokenType: "Bearer",
                authState: { user: data.user },  // You can pass any state here
            });

            setSuccess('Login successful! Redirecting...');
            
            // Redirect to the dashboard or homepage
            window.location.href = '/dashboard'; // Adjust this as necessary
            
        } catch (error) {
            setError('Invalid credentials, please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='loginmain'>
            <h1>معارض الضجيج للأثاث - تسجيل الدخول للوحة الإدارة</h1>
            <div id="AuthPageLogo">
                <img src={Logo} alt="Malls Logo" />
            </div>
            <h2>للمدراء والمسؤولين صلاحية تسجيل الدخول إلى النظام لإدارة جميع جوانب المنصة. </h2>
            <h2>من خلال حساباتهم الخاصة، يمكنهم متابعة المحتوى، إدارة المستخدمين، والتحكم في الإعدادات المختلفة لضمان سير العمل بسلاسة.</h2>
            <h2>بالإضافة إلى ذلك، توفر لوحة التحكم أدوات متقدمة تساعدهم في متابعة الأداء وتحديث المعلومات بشكل سريع وفعّال، مما يتيح لهم اتخاذ القرارات بناءً على أحدث البيانات المتاحة.</h2>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">سجل الدخول للوحة الإدارة</h2>
                    
                    {loading && (
                        <div className="loading">
                            <ClipLoader size={50} color={"#24995b"} />
                        </div>
                    )}
                    {success && <p className="success-message">{success}</p>}
                    {error && <p className="error-message">{error}</p>}

                    <TbLogin2 id='loginicon'/>
                    <div className="input-group">
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="أدخل بريدك الإلكتروني"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">كلمة المرور</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="أدخل كلمة المرور"
                                required
                            />
                            <button
                                type="button"
                                className="show-password-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                            {showPassword ? <BiSolidHide /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="remember">تذكرني</label>
                    </div>

                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? 'تسجيل.....' : 'سجل الدخول'}
                    </button>

                    <div className="login-options">
                        <p>
                            ليس لديك حساب؟ <a href="/register">أنشئ حساب</a>.
                        </p>
                        <a href="/forgot-password" className="forgot-password">
                            نسيت كلمة المرور؟
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;