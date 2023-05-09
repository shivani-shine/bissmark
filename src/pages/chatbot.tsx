import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Insert the chatbot script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'localhost:3000/';
    console.log('script.src', script);
    script.setAttribute('data-id', '6447bff917beb50007ae3d91');
    document.body.appendChild(script);

    return () => {
      // Remove the chatbot script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
