use("CollegeDB");


// db.students2.insert([
//     {
//         name:"John",
//         age:23,
//         city:"Goa",
//         semester:4,
//         marks:80,
//         course:"Btech",
//         fees:60000
//     },
//     {
//         name:"Ayushi",
//         age:24,
//         city:"Delhi",
//         semester:3,
//         marks:85,
//         course:"Btech",
//         fees:50000
//     },
//     {
//         name:"Priyanshi",
//         age:25,
//         city:"Gurgaon",
//         semester:4,
//         marks:80,
//         course:"BCA",
//         fees:140000
//     }
// ])


// db.students2.aggregate([
//     {
//         $match:{course:"Btech"}
//     },
//     {
//         $project:{name:1,marks:1,semester:1,course:1,_id:0}
//     },
//     {
//         $group:{
//             _id:"$semester",
//             totalMarks:{$sum:"$marks"},
//             avgMarks:{$avg:"$marks"},
//             maxMarks:{$max:"$marks"},
//             minMarks:{$min:"$marks"}
//         }
//     }
//     ,{
//         $sort:{_id:-1}
//     },
    // {
    //     $limit:4
    // },
//     {
//         $count:"totalMarks"
//     }
// ])


// db.students2.aggregate([
//   {
//     $match:
//       /**
//        * query: The query in MQL.
//        */
//       {
//         course: "Btech"
//       }
//   },
//   {
//     $project:
//       /**
//        * specifications: The fields to
//        *   include or exclude.
//        */
//       {
//         name: 1,
//         marks: 1,
//         semester: 1,
//         course: 1,
//         _id: 0
//       }
//   },
//   {
//     $group:
//       /**
//        * _id: The id of the group.
//        * fieldN: The first field name.
//        */
//       {
//         _id: "$semester",
//         totalMarks: {
//           $sum: "$marks"
//         },
//         avgMarks: {
//           $avg: "$marks"
//         },
//         maxMarks: {
//           $max: "$marks"
//         },
//         minMarks: {
//           $min: "$marks"
//         }
//       }
//   }
// ])


// db.students2.getIndexes()

// db.students2.createIndex({
//     name:1,
// })

// db.students2.getIndexes()


// db.teachers.insert({
//     name:"Dev",
//     empId:34234,
//     spec:"MERN expert"
// })

// db.students2.update(
//     {name:"Alex"},
//     {
//         $set:{
//             teacher:[ObjectId('6ad9df3b35e5ea0801600dcd')]
//         }
//     }
// )
