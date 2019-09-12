//CRUD OPERATIONS
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
  const db =  client.db(databaseName)
//   db.collection('users').insertMany([
//     {
//         name:'Mukesh',
//         age:32
//     },
//     {
//         name:'Vishal',
//         age:45
//     }

// ],(error,result)=>{
//     if(error){
//         console.log('Unable to insert')
//     }
// }) 
    db.collection('tasks').insertMany([
        {
            description:'Do homework',
            boolean:true
        },
        {
            description:'Clean Room',
            boolean:true
        }
    ],(error,result)=>{
        if(error){
            console.log('Unable to insert')
        }
        console.log(result.ops)
    })
})
