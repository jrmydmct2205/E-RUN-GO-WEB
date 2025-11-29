import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setIsAuthenticated }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isLogin) {
            // Placeholder for real login logic (API call, token storage, etc.)
            if (email === 'admin@mail.com' && password === 'admin123') {
                setIsAuthenticated(true);
                navigate('/', { replace: true });
            } else {
                alert('Invalid credentials. Use admin@mail.com / admin123');
            }
        } else {
            // Placeholder for real registration logic
            alert(`Registration for ${name} successful! Please log in.`);
            setIsLogin(true);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>{isLogin ? 'Admin Login' : 'Admin Registration'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input 
                                id="name" 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required={!isLogin}
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <button type="submit">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <div 
                    className="switch-link" 
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </div>
            </div>
        </div>
    );
};

export default Auth;