import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.warning('Please enter both username and password');
            return;
        }
    
        fetch(`http://localhost:8000/user`)
            .then(res => res.json())
            .then(users => {
                const user = users.find(u => u.id === username); // Match by ID
    
                if (!user) {
                    toast.error('User not found');
                } else if (user.password !== password) {
                    toast.error('Invalid credentials');
                } else {
                    toast.success('Login successful');
                    sessionStorage.setItem('username', username);
                    setIsLoggedIn(true);
                    navigate('/');
                }
            })
            .catch(err => toast.error('Login failed: ' + err.message));
    };
    

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={handleLogin} className="container">
                    <div className="card">
                        <div className="card-header"><h2>User Login</h2></div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" required />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
