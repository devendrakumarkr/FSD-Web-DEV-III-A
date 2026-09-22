use("CollegeDB");

// db.createCollection("students2");

// db.students2.insert([
//     {
//         name:"Alex",
//         age:23,
//         city:"Surat",
//         semester:3,
//         marks:90,
//         course:"BCA",
//         fees:10000
//     },
//     {
//         name:"Ravi",
//         age:27,
//         city:"Delhi",
//         semester:4,
//         marks:60,
//         course:"Btech",
//         fees:50000
//     },
//     {
//         name:"Deven",
//         age:25,
//         city:"Gugaon",
//         semester:3,
//         marks:80,
//         course:"Btech",
//         fees:140000
//     }
// ])


// db.students2.findOne()
// db.students2.find({city:"Surat"})

// db.students2.find({marks:{$gte:80}})

// db.students2.find({city:"Surat",marks:{$gte:80}})
db.students2.find({$or:[
    {city:"Surat"},{marks:{$gte:80}}
]})