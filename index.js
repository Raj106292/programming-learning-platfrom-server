const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json');
const courses = require('./Data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Programming Learning Platform Server is Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:category_id', (req, res) => {
    const id = req.params.category_id;
    const selectedCourse = courses.find(course => course.category_id === id);
    res.send(selectedCourse);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const wantedCourse = courses.find(course => course.id === id);
    res.send(wantedCourse);
})

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
});