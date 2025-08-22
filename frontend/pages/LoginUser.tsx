import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// NOTE: pages/ is a sibling of src/, so we go up once, then into src/assets
import googleLogo from "../src/assets/google.svg";
import facebookLogo from "../src/assets/facebook.svg";
import appleLogo from "../src/assets/apple.svg";

const fieldVariants = {
  focus: { boxShadow: "0 0 0 4px rgba(56,189,248,.25)" },
  blur: { boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
};

const LoginUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!email || !pw) return setErr("Please enter email and password.");
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };

  // stub handlers for social auth
  const withGoogle = () => alert("Continue with Google coming soon.");
  const withFacebook = () => alert("Continue with Facebook coming soon.");
  const withApple = () => alert("Continue with Apple coming soon.");

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-white">
      {/* floating orbs */}
      <motion.div
        className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="w-full max-w-md rounded-3xl bg-white/80 p-6 shadow-2xl ring-1 ring-black/10 backdrop-blur-xl"
        >
          {/* icon badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto -mt-12 mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-white/90 shadow ring-1 ring-black/5"
          >
            <span className="text-slate-700 text-2xl">🔐</span>
          </motion.div>

          <div className="text-center">
            <h1 className="text-xl font-semibold text-slate-900">Sign in with email</h1>
            <p className="mt-1 text-sm text-slate-600">
              Welcome back! Access your SmartRent account.
            </p>
          </div>

          {err && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {err}
            </div>
          )}

          <form onSubmit={submit} className="mt-6 space-y-4">
            {/* Email */}
            <motion.label
              animate={email ? "focus" : "blur"}
              variants={fieldVariants}
              className="block rounded-xl border border-slate-200 bg-white px-3"
            >
              <div className="flex items-center">
                <span className="text-slate-400">📧</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </motion.label>

            {/* Password */}
            <motion.label
              animate={pw ? "focus" : "blur"}
              variants={fieldVariants}
              className="block rounded-xl border border-slate-200 bg-white px-3"
            >
              <div className="flex items-center">
                <span className="text-slate-400">🔒</span>
                <input
                  type={showPw ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent px-3 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="rounded-md p-2 text-slate-500 hover:bg-slate-50"
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </motion.label>

            <div className="mt-1 flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" /> Remember me
              </label>
              <Link to="/forgot" className="text-sky-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-2xl bg-slate-900 py-3 font-semibold text-white shadow hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Get Started"}
            </motion.button>
          </form>

          {/* divider */}
          <div className="my-6">
            <div className="flex items-center">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="px-3 text-xs uppercase tracking-wider text-slate-400">
                Or sign in with
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </div>

          {/* social providers with logos */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={withGoogle}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
              aria-label="Continue with Google"
            >
              <img src={googleLogo} className="h-5 w-5" alt="Google" />
              <span className="hidden sm:inline">Google</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={withFacebook}
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-600/20 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              aria-label="Continue with Facebook"
            >
              <img src={facebookLogo} className="h-5 w-5 invert" alt="Facebook" />
              <span className="hidden sm:inline">Facebook</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={withApple}
              className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-900"
              aria-label="Continue with Apple"
            >
              <img src={appleLogo} className="h-5 w-5 invert" alt="Apple" />
              <span className="hidden sm:inline">Apple</span>
            </motion.button>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            By continuing you agree to our <Link className="underline" to="/terms">Terms</Link> &{" "}
            <Link className="underline" to="/privacy">Privacy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginUser;
