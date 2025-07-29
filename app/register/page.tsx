"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDe6-d_GAVEq72OGwYlTOFWvKCdCXDYaKs",
  authDomain: "alberto-soro.firebaseapp.com",
  projectId: "alberto-soro",
  storageBucket: "alberto-soro.firebasestorage.app",
  messagingSenderId: "241794093548",
  appId: "1:241794093548:web:7d01801961d765488530c9",
  measurementId: "G-JJY00CYQ6N"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push("/")
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleGoogleRegister = async () => {
    setError("")
    try {
      await signInWithPopup(auth, provider)
      router.push("/")
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </form>
        <button
          onClick={handleGoogleRegister}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Sign up with Google
        </button>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  )
}
