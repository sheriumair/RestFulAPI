const express=require('express');
const Post=require('../models/Post');

const router= express.Router(); 

//gets back all the posts
 router.get('/',async(req,res)=>{
     try{
           const posts=await Post.find();
           res.json(posts);
     }catch(err){
        res.json({message: err});
     }
  });

//get specific post
router.get('/:postId',async(req,res)=>{
    try{
         const post= await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
})



router.post('/',async(req,res)=>{
   const post=new Post({
    title:req.body.title,
    description: req.body.description
   });
   try{ 
   const savedPost= await post.save();
    res.json(savedPost);
   }catch(err){
    res.json({message:err})
   }
});
 

//DELETE POST
router.delete('/:postId', async (req,res)=>{
     try{
     const id=req.params.postId;
      await Post.findByIdAndDelete(id);
     res.send("Deleted")
     }catch(err){
        res.json({message:err});
     }
     
});

//update a post
router.patch('/:postId',async (req,res)=>{
    try{
         const _id=req.params.postId;
        const updatePost= await Post.findByIdAndUpdate(_id,req.body);
        res.send(updatePost);
    }catch(err){
        res.json({message:err});
    }

})

  module.exports=router;