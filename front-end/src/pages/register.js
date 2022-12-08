import './register.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const instagramUrlRegex = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im
const twitterRegex = /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/im
const facebookRegex = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/im


function Register() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const [instaLink, setInstaLink] = useState('');
    const [validInstaLink, setValidInstaLink] = useState(false);
    const [instaLinkFoucus, setInstaLinkFoucus] = useState(false);


    const [facebookLink, setFacebookLink] = useState('');
    const [validFacebookLink, setValidFacebookLink] = useState(false);
    const [facebookLinkFocus, setFacebookLinkFocus] = useState(false);

    const [twitterLink, setTwitterLink] = useState('');
    const [validtwitterLink, setValidTwitterLink] = useState(false);
    const [twitterLinkFocus, setTwitterLinkFocus] = useState(false);
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setValidInstaLink(instagramUrlRegex.test(instaLink));

    }, [instaLink])

    useEffect(() => {
        setValidFacebookLink(facebookRegex.test(facebookLink))
    }, [facebookLink])

    useEffect(() => {
        setValidTwitterLink(twitterRegex.test(twitterLink))
    }, [twitterLink])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    //if the user is tring to use  invalid url
    useEffect(() => {
        if (instagramUrlRegex.test(instaLink)) {
            const matches = instaLink.match(instagramUrlRegex);
            setInstaLink(matches[0])
        } else if (facebookRegex.test(facebookLink)) {
            const matches = facebookLink.match(facebookRegex);
            console.log(matches[0]);
            setFacebookLink(matches[0])
        } else if (twitterRegex.test(twitterLink)) {
            const matches = twitterLink.match(twitterRegex);
            console.log(matches[0]);
            setTwitterLink(matches[0])
        }
    }, [facebookLink, instaLink, twitterLink])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = instagramUrlRegex.test(instaLink)
        const v4 = facebookRegex.test(facebookLink)
        const v5 = twitterRegex.test(twitterLink)
        if (!v1 || !v2 || !v3 || !v4 || !v5) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            await axios.post('http://localhost:4000/register',
                JSON.stringify({ user, pwd, instaLink, facebookLink, twitterLink }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then((res) => {
                // console.log(res.config.data);
                // console.log(res)
                setSuccess(true);
                //clear state and controlled inputs
                //need value attrib on inputs for this
                setUser('');
                setPwd('');
                setMatchPwd('');
                setInstaLink('')
            })

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <Link to={'/login'}>
                        <p>log in</p>
                    </Link>
                </section>
            ) : (
                <div className='box-wrapper register-form-parent'>
                    <section className='box'>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div>

                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <label htmlFor="username">
                                    Username:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </div>
                            <div>

                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>

                            </div>
                            <div>

                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                <label htmlFor="confirm_pwd">
                                    Confirm Password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                </label>
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                            </div>
                            <p className='instructions' style={{ backgroundColor: 'white', color: 'black', fontSize: "1em", marginBottom: '2rem' }}>social media links:</p>
                            <div>

                                <input
                                    type="url"
                                    id="insta-lnk"
                                    autoComplete="off"
                                    onChange={(e) => setInstaLink(e.target.value)}
                                    value={instaLink}
                                    required

                                    aria-describedby="uidnote"
                                    onFocus={() => setInstaLinkFoucus(true)}
                                    onBlur={() => setInstaLinkFoucus(false)}
                                />
                                <label htmlFor="insta-lnk">
                                    your instagram link:
                                    <FontAwesomeIcon icon={faCheck} className={validInstaLink ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validInstaLink || !instaLink ? "hide" : "invalid"} />
                                </label>
                                <p id="uidnote" className={instaLinkFoucus && !validInstaLink ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    a link to your profile page such as <span style={{ fontSize: '10px', }}>https://www.instagram.com/abdul_azeez0_0/</span>
                                </p>
                            </div>

                            <div>

                                <input
                                    type="url"
                                    id="facebook-lnk"
                                    autoComplete="off"
                                    onChange={(e) => setFacebookLink(e.target.value)}
                                    value={facebookLink}
                                    required

                                    aria-describedby="uidnote"
                                    onFocus={() => setFacebookLinkFocus(true)}
                                    onBlur={() => setFacebookLinkFocus(false)}
                                />
                                <label htmlFor="facebook-lnk">
                                    your facebook link:
                                    <FontAwesomeIcon icon={faCheck} className={validFacebookLink ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validFacebookLink || !facebookLink ? "hide" : "invalid"} />
                                </label>
                                <p id="uidnote" className={facebookLinkFocus && !validFacebookLink ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    a link to your profile page such as <span style={{ fontSize: '10px', }}>https://www.facebook.com/abd.alazaz.56027</span>
                                </p>
                            </div>

                            <div>

                                <input
                                    type="url"
                                    id="twitter-lnk"
                                    autoComplete="off"
                                    onChange={(e) => setTwitterLink(e.target.value)}
                                    value={twitterLink}
                                    required
                                    aria-describedby="uidnote"
                                    onFocus={() => setTwitterLinkFocus(true)}
                                    onBlur={() => setTwitterLinkFocus(false)}
                                />
                                <label htmlFor="twitter-lnk">
                                    your twitter link:
                                    <FontAwesomeIcon icon={faCheck} className={validtwitterLink ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validtwitterLink || !twitterLink ? "hide" : "invalid"} />
                                </label>
                                <p id="uidnote" className={twitterLinkFocus && !validtwitterLink ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    a link to your profile page such as <span style={{ fontSize: '10px', }}>https://twitter.com/Q</span>
                                </p>
                            </div>

                            <button disabled={!validName || !validPwd || !validMatch || !validInstaLink || !validFacebookLink || !validtwitterLink ? true : false}>Sign Up</button>
                        </form>
                        <p>
                            Already registered?<br />
                            <Link to={'/login'} className="line" >
                                {/*put router link here*/}
                                Sign In
                            </Link>
                        </p>
                    </section>
                </div>
            )}

        </>
    )
}
export default Register
