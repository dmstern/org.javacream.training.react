import pubsub from 'pubsub.js';

export class Logger {
  subscribe(event, listener) {
    pubsub.subscribe(event, listener);
  }

  publish(event) {
    console.log(event);
    pubsub.publish(event);
  }
}
