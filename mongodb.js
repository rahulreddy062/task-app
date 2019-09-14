//CRUD OPERATIONS
const {MongoClient,ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'



MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
   const db =  client.db(databaseName)
//     db.collection('users').updateOne({_id:new ObjectID('5d79affb1efbd11420724bfc')},{
//       $inc:{
//          age:1
//       }
//   }).then((result)=>{
//       console.log(result)
//   }).catch((error)=>{
//       console.log(error)
//   })
    db.collection('tasks').updateMany({completed:true},{
        $set:{
            completed:false
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})

