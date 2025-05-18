const express = require('express')  
const router = express.Router()


router.get('/', (req, res) => {  // it will run the function from top to bottom
 res.send('User List')
});

router.get('/new', (req, res) => {
    res.send("New Uaser")
});

router.post('/', (req,res) => {
    res.send("create a nrw user")
})

router.route('/:id').get((req,res) => {
    console.log(req.user)
    res.send(`get user with id:${req.params.id}`)
}).put( (req,res) => {
    res.send(`update user with id:${req.params.id}`)
}).delete( (req,res) => {
    res.send(`delete user with id:${req.params.id}`)
})




// router.get('/:id', (req,res) => {
//     //req.param.id
//     res.send(`get user with id:${req.params.id}`)
// }) // : dynamic

// router.put('/:id', (req,res) => {
//     res.send(`update user with id:${req.params.id}`)
// })

// router.delete('/:id', (req,res) => {
//     res.send(`delete user with id:${req.params.id}`)
// })

const users = [{name : "ali"}, {name : "hadi"}]

router.param('id',(req,res,next,id) => {
    req.user = users[id]
    next()
})

module.exports = router
