const express = require('express');
const path = require('path');
const blogs = require('../data/blogs')

const router = express.Router();

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/index.html'))
    res.render('home')  // this will search home.handlebars in views folder
})

router.get('/blog',(req,res)=>{
    blogs.forEach((e)=>{
        console.log(e.title);
    })
    // res.sendFile(path.join(__dirname,'../views/bloghome.html'))
    res.render('blogHome',{  //passing data from express to templates
        blogs:blogs
    })
})

router.get('/blogpost', (req,res)=>{
    // myBlog = blogs.filter((e)=>{
    //     return e.slug === req.params.slug
    // })
    // res.sendFile(path.join(__dirname, '../views/blogpost.html'))
    res.render('blogPost',{
        blogs:blogs
    })
})

module.exports = router;