// Function to send message to iframe
export const sendMessageToIframe = (data: any) => {
  const iframeWindow = window.frames[0];
  iframeWindow.postMessage(data, "*");

  // console.log("sendMessageToIframe --- ", data);
};
