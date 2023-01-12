const express = require('express')
const router = express.Router()
const { User } = require('../models')
const { Meme } = require('../models')

// MEME INDEX ROUTE
router.get("/", async (req, res, next) => {
    try {
        const allMemes = await Meme.find({})
        res.status(200).json({allMemes})
    }catch(error){
        res.status(400).json({error: "error"})
        return next(err)
    }
});

// POST ROUTE
router.post('/:id', async (req, res, next) => {
	try {
	const user = await User.findById(req.params.id)
    console.log(user)
    console.log(req.body.name)
	const memeToCreate = {
		content: req.body.content,
		image: req.body.image
	}
	user.meme.push(memeToCreate)
	await user.save()
    res.status(200).json({message:"success"})
	} catch(err) {
		next(err)
	} 
})

//SHOW ROUTE 
router.get('/:id', async (req, res, next) =>{
    try{
        const singleComment = await Comment.findById(req.params.id)
        console.log(singleComment)
        res.status(200).json(singleComment)
    }catch(error){
        res.status(400).json({error: "error"})
        return next(err)
    }
});

module.exports = router 