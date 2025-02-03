import React, { useState } from 'react';

    function JoinUs() {
      const [email, setEmail] = useState('');
      const mailerliteGroupId = import.meta.env.MAILERLITE_GROUP_ID;
      const mailerliteApiKey = import.meta.env.MAILERLITE_API_KEY;

      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
          const response = await fetch(
            `https://api.mailerlite.com/api/v2/subscribers`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': mailerliteApiKey,
              },
              body: JSON.stringify({
                email: email,
                groups: [mailerliteGroupId],
              }),
            }
          );

          if (response.ok) {
            alert('Successfully subscribed to our newsletter!');
            setEmail('');
          } else {
            const errorData = await response.json();
            alert(
              `Subscription failed. Please try again. Error: ${
                errorData.message || response.statusText
              }`
            );
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Subscription failed. Please try again later.');
        }
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
