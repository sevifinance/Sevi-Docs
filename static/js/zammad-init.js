document.addEventListener("DOMContentLoaded", function () {
  if (typeof ZammadChat !== "undefined") {
    new ZammadChat({
      title: '<strong>Chat</strong> with us!',
      background: '#6231EE',
      fontSize: '14px',
      chatId: 2,
      debug: true,
    });
  } else {
    console.error("ZammadChat is not defined — check script URL");
  }
});