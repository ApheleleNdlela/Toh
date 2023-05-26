const db = require("../model")
const User = db.user

exports.getAll = (req, res)=>{

    User.find()
    .then(data=>{
        res.send(data)
        console.log(data)
    })
    .catch(error=>{
        res.status(500).send("could not find user", error)
        console.log("could not find user", error)
    })
}

exports.create = async (req, res)=>{
    if(!req.body){
        res.status(400).send("cannot add without info")
        return
    }
    // let results;

    const user = new User({
        fname : req.body.fname,
        // email : req.body.email,
        // password : req.body.password
        weakness : req.body.weakness,
        strength : req.body.strength
        // image : req.body.image
    })

    try{
        user.save()
        .then(user=>{
            console.log(user)
            res.send(user)
        })
        return
    } catch (err){
        res.status(500).send('could not create new user')
        console.log(`some err occured : ${err.message}`)
    }
}

exports.deleteAll = (req, res)=>{

    User.deleteMany()
    .then(data=>{
        res.send(data)
        console.log(data)
    })
    .catch(error=>{
        res.status(500).send("Could not delete all users", error)
        console.log("Could not delete all", error)
    })
}

exports.deleteOne = (req,res)=>{
    const id = req.params.id

    User.findByIdAndRemove(id, { useFindModify: false })
    .then(data => {
        if(!data) {
            res.status(404).send({
                msg: `cannot delete User with id=${id}. Maybe it was not exit`
            })
        }else res.status(201).send({ msg: "User was deleted successfully"})
    })
    .catch(err => {
        res.status(500).send({ msg: `error deleting User with id=${id}, error: ${err}`})
    })
}

exports.update = (req, res)=>{
    if(!req.body){
        res.status(400).send("cannot update user")
        return;
    }
    const id = req.params.id

    User.findByIdAndUpdate(id, req.body, { UseFindAndModify: false}) 
        .then(data => {
            if(!data) {
                res.status(404).send({
                    msg: `cannot update User with id=${id}. aybe it was not found`
                })
            }else res.status(201).send({ msg: "User was updated successfully."})
        })
        .catch(err => {
            res.status(500).send({ msg: `error updating User with id=${id} ${err}`})
        })
}

        exports.getOne = (req,res)=>{
            const id = req.params.id
        
            User.findById(id, { useFindModify: false })
            .then(data =>{
                res.send(data)
                console.log(data)
                .catch(error => {
                    res.status(500).send("could not find user", error)
                    console.log('could not get user', error)
                })
            })
    
        
}