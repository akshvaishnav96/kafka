import kafka from "./kafka/client.js";

async function createProducer(){
  
const producer =  kafka.producer();
  await producer.connect();
  await producer.send({
    topic: "rider-updates",
    messages:[
      {
        partition:0,
        key:"rider1",
        value:JSON.stringify({lat:40.7128, lng:-74.0060,location:"New York City"})
      },
       {
        partition:1,
        key:"rider2",
        value:JSON.stringify({lat:40.7128, lng:-74.0060,location:"London City"})
      }
    ]
  })

  await producer.disconnect();

}
createProducer();