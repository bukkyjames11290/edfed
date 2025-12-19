'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="bg-[white] px-4">
        <div className="mt-3">{error && <p className="text-base text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

        <div className="bg-white mx-auto rounded-xl py-7 pt-0 min-h-[700px]">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3 p-5 rounded-lg">
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  className="p-4 rounded-md text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="p-4 rounded-md text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-200 accent-primary" />
                  <span className="text-gray-500">Remember me</span>
                </label>
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
                <button type="submit" className="p-4 bg-[#223e99] w-full text-white font-semibold rounded-md">
                  Sign In
                </button>
              </div>
              {/* Security Notice */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">🔒 Your connection is secure and encrypted</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-xs text-gray-500">© 2016–2025 Educational Federal Credit Union. All rights reserved.</p>
      </footer>
    </div>
  );
}
