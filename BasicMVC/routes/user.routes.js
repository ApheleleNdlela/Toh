module.exports = rs =>{
    const router = require("express").Router();
    const controller = require('../controller/user.controller')

    router.post('/signup', controller.create);
    router.get('/', controller.getAll);
    router.delete('/', controller.deleteAll);
    router.put('/:id', controller.update)
    router.delete('/:id', controller.deleteOne)
    router.get('/:id', controller.getOne)

rs.use('/v1/users',router);

}