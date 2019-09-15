const Task = require('../src/models/task')
require('../src/db/mongoose')

Task.findByIdAndUpdate('5d7d5fca230d141fb401f487',{completed:false}).then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false}).then((result)=>{
    console.log(result)
    })
}).catch((e)=>{
        console.log(e)
    })

const updateCompletedAndCount = async(id,completed) =>{
    const task = await Task.findByIdAndUpdate(id,{completed})
    const count = await Task.countDocuments({completed})
    return count
} 
updateCompletedAndCount("5d7d5fca230d141fb401f487",true).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})