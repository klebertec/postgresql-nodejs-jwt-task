const {Router} = require('express')

const TaskController = Router()

TaskController.get('', (req, res)=>{
    res.send('Deu certo')
})

module.exports = TaskController