const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('API_SIGNUP_ENDPOINT', {
          email,
          password,
        });
  
        history.push('/login');
      } catch (error) {
        console.error('Signup failed', error);
      }
    };
  
    return (
      <form onSubmit={handleSignup}>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
  
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
        <button type="submit">Signup</button>
      </form>
    )
}

export default SignUpForm;