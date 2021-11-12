"use strict";

const AWS = require("aws-sdk");
// configuire
AWS.config.update({ region: "us-west-2" });

const sns = new AWS.SNS();
const faker = require("faker");
const { Consumer } = require("sqs-consumer");

const topic = "arn:aws:sns:us-west-2:633598806335:pickUp";

const order = {
  orderId: faker.datatype.uuid(),
  customer: faker.name.findName(),
  venderId: faker.company.companyName(),
};

const payload = {
  Message: JSON.stringify(order),
  TopicArn: topic,
};

sns
  .publish(payload)
  .promise()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

const queueUrl = "https://sqs.us-west-2.amazonaws.com/633598806335/vendor";

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (message) => {
    console.log(message);
  },
});

consumer.start();
