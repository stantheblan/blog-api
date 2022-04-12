const express = require('express');
const router = express.Router();
const Posts = require('../models/posts.js');

// index
router.get('/', (req, res)=>{
    Posts.find({}, (err, foundPosts)=>{
        res.json(foundPosts);
    });
});

//new -> form
//create -> posts it
//update -> form

//delete
router.delete('/:id', (req, res)=>{
    Posts.findByIdAndRemove(req.params.id, (err, deletedPost)=>{
        res.json(deletedPost);
    });
});

//update
router.put('/:id', (req, res)=>{
    Posts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost)=>{
        res.json(updatedPost);
    });
});

//create 
router.post('/', (req, res)=>{
    Posts.create(req.body, (err, createdPost)=>{
        res.json(createdPost);
    });
});

// Show
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id, (err, foundPost) => {
        res.json(foundPost)
    })
})
module.exports = router;