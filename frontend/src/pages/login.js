import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './login.css';
import api from '../services/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', { username });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <img src={logo} alt="tindev" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite seu usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
