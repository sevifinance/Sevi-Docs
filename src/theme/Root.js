import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // Create the script tag
    const script = document.createElement('script');
    script.src = 'https://smile.sevi.io/assets/chat/chat-no-jquery.min.js'; // <-- replace with our Zammad URL
    script.async = true;

    // When the script loads, initialize the widget
    script.onload = () => {
      if (window.ZammadChat) {
        new window.ZammadChat({
          chatId: 2,              // <-- replace with the actual chat ID in zammad chats
          locale: 'en',           
          background: '#6231EE',  
          fontSize: '14px',       
          title: '<strong>Chat</strong> with us!',
     
        //   debug: true,

        });
      }else {
            console.error("ZammadChat is not defined — check script URL and chatId");
        }
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <>{children}</>;
}
