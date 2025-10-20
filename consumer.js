import kafka from "./kafka/client.js";

const group = process.argv[2] || "0";

async function createConsumer(){

const consumer = kafka.consumer({groupId:`rider-location-group-${group}`});
 await consumer.connect();
 await consumer.subscribe({topic:"rider-updates", fromBeginning:true});

 await consumer.run({
    eachMessage: async ({topic, partition, message})=>{
        const prefix = `Topic: ${topic} | Partition: ${partition} | group: ${group}`;
        console.log(`${prefix} | Key: ${message.key} | Value: ${message.value}`);
    }
 })
}
createConsumer();
