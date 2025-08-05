// Create NotificationCallback type and sendNotification function
// that accepts a message and callback, then calls callback with formatted message
// npm run bonus01

type NotificationCallback = (message: string) => void;

const callbackTest = (message: string): void => {
  console.log(`📱 Dzwoni telefon: ${message}`);
};

function sendNotification(msg: string, callback: NotificationCallback): void {
  const formattedMessage = `[NOTIFICATION] ${msg}`;
  callback(formattedMessage);
}

sendNotification("something", callbackTest);
