import React, { useState } from 'react';
import { useAuth } from '../../auth.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle2, AlertCircle, User, Calendar, GraduationCap } from 'lucide-react';

// --- Login Component ---
const Login = ({ onToggle, handleSignIn, formData, handleChange, isLoading, setIsLoading, showErrorAlert, navigate }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSignIn(e);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl md:shadow-none md:bg-transparent border md:border-none border-gray-100 my-auto animate-fade-in">
      <div className="mb-10 text-center md:text-left">
        <div className="h-12 w-12 bg-[#0078D4]/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4 text-[#0078D4]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back</h2>
        <p className="text-gray-500 mt-2 text-sm">Please enter your details to sign in.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400" 
              placeholder="name@kiet.edu"
              required 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors">
              <Lock className="h-5 w-5" />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400" 
              placeholder="••••••••"
              required 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              id="remember-me" 
              name="remember-me" 
              type="checkbox" 
              className="h-4 w-4 text-[#0078D4] focus:ring-[#0078D4] border-gray-300 rounded cursor-pointer" 
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer select-none">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <button 
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="font-medium text-[#0078D4] hover:text-[#005A9E] hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-[#0078D4] to-[#005A9E] hover:from-[#005A9E] hover:to-[#0078D4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078D4] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button onClick={onToggle} className="font-semibold text-[#0078D4] hover:text-[#005A9E] hover:underline">
          Sign up for free
        </button>
      </p>
    </div>
  );
};

// --- Signup Component ---
const Signup = ({ onToggle, handleSignUp, formData, handleChange, isLoading, setIsLoading, showErrorAlert }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSignUp(e);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl md:shadow-none md:bg-transparent border md:border-none border-gray-100 my-auto animate-fade-in">
      <div className="mb-8 text-center md:text-left">
        <div className="h-12 w-12 bg-[#0078D4]/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4 text-[#0078D4]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Student Registration</h2>
        <p className="text-gray-500 mt-2 text-sm">Enter your academic details to get started.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="animate-fade-in-down space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors">
                <User className="h-5 w-5" />
              </div>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400" 
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors z-10">
                  <Calendar className="h-5 w-5" />
                </div>
                <select 
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 appearance-none" 
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Branch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <input 
                  type="text" 
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400" 
                  placeholder="CSE, ECE..."
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400" 
              placeholder="name@kiet.edu"
              required 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0078D4] transition-colors">
              <Lock className="h-5 w-5" />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0078D4] focus:border-[#0078D4] transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400" 
              placeholder="••••••••"
              required 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-[#0078D4] to-[#005A9E] hover:from-[#005A9E] hover:to-[#0078D4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0078D4] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              Create account
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button onClick={onToggle} className="font-semibold text-[#0078D4] hover:text-[#005A9E] hover:underline">
          Sign in
        </button>
      </p>
    </div>
  );
};

// --- Main SignUp Component ---
const SignUp = () => {
  const { login } = useAuth();
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    branch: '',
    year: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    return email.toLowerCase().endsWith('@kiet.edu');
  };

  const showSuccessAlert = (message) => {
    toast.success(message);
  };

  const showErrorAlert = (message) => {
    toast.error(message);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.fullName || !formData.branch || !formData.year || !formData.email || !formData.password) {
      showErrorAlert('All fields are required!');
      setIsLoading(false);
      return;
    }
    if (!validateEmail(formData.email)) {
      showErrorAlert('Please use your college email address (@kiet.edu)');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://mlsa-backend-4w03.onrender.com/api/user/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('User created:', response.data);
      if (response.status === 200) {
        showSuccessAlert('User created successfully! Please verify your email.');
        navigate('/otp-verification', { state: { email: formData.email } });
      } else {
        console.error('Signup failed:', response.data.message);
        showErrorAlert(`Signup failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      showErrorAlert(`Error creating user: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { email, password } = formData;
      const response = await axios.post('https://mlsa-backend-4w03.onrender.com/api/user/login', { email, password });
      console.log('User logged in:', response.data);
      login(response.data);
      if (response.status === 200) {
        if(response.data.message === 'Email not verified. A new OTP has been sent to your email.'){
          showErrorAlert('Your Email is not verified.');
          navigate('/otp-verification');
        } else {
          localStorage.setItem('token', response.data.data.accessToken);
          showSuccessAlert('Login successful!');
          navigate('/events');
          window.location.reload();
        }
      } else {
        console.error('Login failed:', response.data.message);
        showErrorAlert(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      showErrorAlert(`Error logging in: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      <ToastContainer />
      
      {/* Left Side - Hero / Image Section */}
      <div className="hidden md:flex md:w-1/2 relative bg-gradient-to-br from-[#0078D4] to-[#005A9E] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/90 to-[#005A9E]/90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 text-white h-full animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {isSignIn ? 'Turn your ideas into ' : 'Join our campus '} 
            <span className="text-white/80">{isSignIn ? 'reality' : 'community'}</span>.
          </h1>
          <p className="text-lg text-white/90 max-w-md leading-relaxed">
            {isSignIn 
              ? "Start your journey with us today. Join thousands of students and developers building the future."
              : "Create an account to access student resources, community support, and campus tools."}
          </p>
          
          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white/30 bg-white/20 flex items-center justify-center text-white font-semibold text-sm"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-white/90">Joined by 5k+ students</p>
          </div>
        </div>

        {/* Abstract decorative circles */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0078D4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00A4EF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Right Side - Login/Signup Form Container */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 transition-all duration-500 h-full min-h-screen overflow-y-auto">
        {isSignIn ? (
          <Login 
            onToggle={() => setIsSignIn(false)} 
            handleSignIn={handleSignIn}
            formData={formData}
            handleChange={handleChange}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            showErrorAlert={showErrorAlert}
            navigate={navigate}
          />
        ) : (
          <Signup 
            onToggle={() => setIsSignIn(true)} 
            handleSignUp={handleSignUp}
            formData={formData}
            handleChange={handleChange}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            showErrorAlert={showErrorAlert}
          />
        )}
      </div>
      
      {/* Custom Styles for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SignUp;
