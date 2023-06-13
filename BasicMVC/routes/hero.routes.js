module.exports = app =>{
    const router = require("express").Router();
    const controller = require('../controller/hero.controller')

    router.post('/', controller.create);
    router.get('/', controller.getAll);
    router.delete('/', controller.deleteAll);
    router.put('/:id', controller.update)
    router.delete('/:id', controller.deleteOne)
    router.get('/:id', controller.getOne)

app.use('/api/heroes',router);

}