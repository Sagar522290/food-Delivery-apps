import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 via-white to-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center">
        <div className="mt-0 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-7">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-4xl shadow-md sm:h-24 sm:w-24">
              🛵
            </div>

            <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back!
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Please login to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-7 space-y-4">
            <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
              <span className="mr-3 text-lg text-gray-400">✉</span>
              <input
                type="email"
                placeholder="Email or Phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
              <span className="mr-3 text-lg text-gray-400">🔒</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="text-right">
              <button type="button" className="text-sm font-medium text-orange-500 transition hover:text-orange-600">
                Forgot Password?
              </button>
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-orange-500 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-semibold text-orange-500 transition hover:text-orange-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;












// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError('');
//     if (!email || !password) {
//       setError('Please enter email/phone and password.');
//       return;
//     }
//     try {
//       await login(email, password);
//       navigate('/');
//     } catch {
//       setError('Login failed. Check your credentials.');
//     }
//   }

//   return (
//     <div className="flex flex-col min-h-screen px-6 pt-10 pb-8">
//       <div className="flex justify-center mb-6">
//         <div className="w-40 h-40 rounded-full bg-brand-50 flex items-center justify-center text-6xl">
//           🛵
//         </div>
//       </div>

//       <h1 className="text-2xl font-bold text-gray-900 text-center">Welcome Back!</h1>
//       <p className="text-gray-500 text-center mt-1 mb-8">Please login to continue</p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <input
//             type="text"
//             placeholder="Email or Phone number"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-500"
//           />
//         </div>
//         <div className="relative">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand-500"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword((s) => !s)}
//             className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
//           >
//             {showPassword ? 'Hide' : 'Show'}
//           </button>
//         </div>

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <div className="text-right">
//           <button type="button" className="text-brand-500 text-sm font-medium">
//             Forgot Password?
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl"
//         >
//           Login
//         </button>
//       </form>

//       <p className="text-center text-gray-500 mt-6">
//         Don&apos;t have an account?{' '}
//         <span className="text-brand-500 font-medium">Sign up</span>
//       </p>
//     </div>
//   );
// }
