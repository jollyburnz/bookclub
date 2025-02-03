import React, { useState } from 'react';

    function JoinUs() {
      const [email, setEmail] = useState('');

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Subscribed with email: ${email}`);
        setEmail('');
      };

      return (
        <div>
          <h1>Join Our Newsletter</h1>
          <p>
            Stay up to date with our latest book selections and meeting times by
            joining our email newsletter.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      );
    }

    export default JoinUs;
