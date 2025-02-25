"use client";

import { useState } from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '../firebase/config'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [CreateUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
};

const handleSignUp = () => {
  console.log("user signed up:", { email, password });
};

return (
  <div className="min-h-screen flex items-center justify-center bg-[#9b9b9b] dark:bg-[#1a1613]">
    <div className="bg-[#9b9b9b] dark:bg-[#1a1613] p-10 rounded-lg shadow-xl w-96">
      <h1 className="text-white text-2xl mb-5">sign up</h1>
      <input type="email"
      placeholder="email"
      value={email}
      onChange={(e) => setEmail.(e.target.value)}
      className="w-full p-3 mb-4 bg-[#9b9b9b] dark:bg-[#1a1613] rounded outline-none text-white placeholder:bg-gray-500"/>
      <input 
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => setPassword.(e.target.value)}
      className="w-full p-3 mb-4 bg-[#9b9b9b] dark:bg-[#1a1613] rounded outline-none text-white placeholder:bg-gray-500"/>
    </div>
  </div>
);
