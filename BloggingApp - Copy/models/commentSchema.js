const mongoose = require('mongoose')

const commentSchemas =  new mongoose.Schema({
    comment : {
        type : String,
        require : true
    },
    userId : {
        type : mongoose.Types.ObjectId,
        ref: 'userData',
        require : true
    },
    blogId : {
        type : mongoose.Types.ObjectId,
        ref: 'blogData',
        require : true,
    },
    isActive : {
        type : Boolean,
        require : true
    }
}) 
let commentSchema=new mongoose.model('commentData', commentSchemas)
module.exports={commentSchema}
