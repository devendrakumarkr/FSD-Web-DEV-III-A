const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema=new Schema({
    name:{
        type:String,
        required:true,
        // unique:true,
        // match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        // validate:{
        //     validator:function(value){
        //         return value.endsWith("@krmu.edu.in")
        //     }
        // }
    },
    age:{
        type:Number,
        required:true,
        min:18
    },
    city:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    marks:{
        type:Number,
        required:true,
        max:100
    },
    course:{
        type:String,
        required:true,
        enum:["Btech","BCA","BSc"]
    },
    fees:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        minlength:10,
        maxlength:10
    }
})

module.exports=mongoose.model("students",studentsSchema)