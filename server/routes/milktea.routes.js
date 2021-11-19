const MilkteaController = require('../controllers/milktea.controllers')



module.exports = app => {
    //CREATE
    app.post('/api/milktea/new', MilkteaController.createMilktea)
    //READ ALL
    app.get('/api/milktea', MilkteaController.allMilktea)
    //READ ONE
    app.get('/api/milktea/:id', MilkteaController.oneMilktea)
    //UPDATE 
    app.put('/api/milktea/:id', MilkteaController.updateMilktea)
    //DELETE
    app.delete('/api/milktea/:id', MilkteaController.deleteMilktea)
}