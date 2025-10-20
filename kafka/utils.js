import kafka from "./client.js";

async function createTopic(topic, numPartitions = 3) {
      const admin = kafka.admin();
        console.log("Connecting to Kafka...");
       await admin.connect();
       console.log("Creating Topics...");
       await  admin.createTopics({
            topics: [
                {
                    topic,
                    numPartitions
                }
            ]
        })
        console.log("Topics created successfully");
        await admin.disconnect();
        console.log("Disconnected from Kafka");

}

export {createTopic}