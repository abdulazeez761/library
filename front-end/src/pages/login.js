import { useRef, useState, useEffect , useContext } from 'react';
import axios from 'axios'
import UseAuth from '../hooks/useAuth';
import {Link , useNavigate , useLocation} from 'react-router-dom'

const Login = () => {
    const { persist , setPersist} = UseAuth()
    const setAuth = UseAuth()
    
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.state.from.pathname)
    const from = location.state?.from?.pathname || '/';
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/login',
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;  
            setAuth.setAuth({ user, pwd, roles, accessToken })
            localStorage.setItem("loggedIn", 'true' );
            setUser('');
            setPwd('');
            navigate(from, {replace:true})
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    const togglePersist = () => {
        setPersist(prev => !prev);
    }
    useEffect(() => {
        localStorage.setItem("persist", persist );
    }, [persist])
    return (
        <>
       
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                           
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            autoComplete="off"
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <Link to ={'/register'} className="line">
                            {/*put router link here*/}
                            Sign Up
                        </Link>
                    </p>
                    <div className="persistCheck">
                    <input
                        type="checkbox"
                        id="persist"
                        onChange={togglePersist}
                        checked={persist}
                    />
                    <label htmlFor="persist">Trust This Device</label>
                </div>
                </section>
            
        </>
    )
}

export default Login