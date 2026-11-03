const express = require('express');
const mongoose = require('mongoose');
const Student = require('./model/students.model');
const app = express();
const PORT = 3000;
app.use(express.json()); //json data parse

app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

//get students by their id
app.get("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


app.post("/api/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
})

app.put("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
})

app.delete("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
})

mongoose.connect('mongodb://localhost:27017/CollegeDB').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});