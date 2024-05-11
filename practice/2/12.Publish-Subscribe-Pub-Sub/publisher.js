/* RabbitMQ */
const amqp = require("amqplib");

const msg = { number: process.argv[2] };
connect();
async function connect() {
  try {
    const amqpServer =
      "amqps://sioajscd:B_EYo-KJrn-qsa_GKeyd9SqYUZm9UBWm@octopus.rmq3.cloudamqp.com/sioajscd";
    const connection = await amqp.connect(amqpServer);
    const channel = await connection.createChannel();
    await channel.assertQueue("jobs");
    await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
    console.log(`Job sent successfully ${msg.number}`);
    await channel.close();
    await connection.close();
  } catch (ex) {
    console.error(ex);
  }
}
