"use strict";
import{ createQueueComand } from "@aws-sdk/client-sqs"
import {SQSClient} from "./lib/sqsClient.js"

const AWS = require("aws-sdk");
// configuire
AWS.config.update({ region: "us-west-2" });

const params = {
    QueueName: "https://sqs.us-west-2.amazonaws.com/633598806335/package",
    Attributes: { 
        DelaySeconds: "5",
        MessageRetentionPeriod: 
    }

}