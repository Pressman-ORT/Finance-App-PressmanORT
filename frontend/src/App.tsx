import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Replace with your backend URL
    fetch('http://localhost:3000')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage('Error fetching data 😢'));
  }, []);

  return (
    <div>
      <h1>Finance App (Vite + React)</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;