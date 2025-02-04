import React from 'react';
import Head from 'next/head';
import NewsletterForm from '../components/NewsletterForm';

function Join() {
  return (
    <>
      <Head>
        <title>Psychical Research Book Club - Join Us</title>
      </Head>
      <div>
        <h1>Join Our Newsletter</h1>
        <p>
          Stay up to date with our latest book selections and meeting times by
          joining our email newsletter.
        </p>
        <NewsletterForm />
      </div>
    </>
  );
}

export default Join;
