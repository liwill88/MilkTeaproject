const Milktea = require('../models/milktea.models');


//CREATE
module.exports.createMilktea = (req, res) => {
    const {name, imageURL, category, ice, howSweet, topping, price} = req.body
    Milktea.create(req.body)
        .then(newMilktea => res.json(newMilktea))
        .catch(err => {
            res.status(400).json(err)
            console.log(err)
        });
}


//READ ALL
module.exports.allMilktea= (req, res) => {
    Milktea.find()
        .then(allMilktea => res.json(allMilktea)) 
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}


//READ ONE
module.exports.oneMilktea = (req, res) => {
    Milktea.findOne({_id: req.params.id})
        .then(oneMilktea => res.json(oneMilktea))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}


//UPDATE
module.exports.updateMilktea= (req, res) => {
    Milktea.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators:true, new: true })
        .then(updatedMilktea => res.json(updatedMilktea))
        .catch(err => res.status(400).json(err))
}



//DELETE
module.exports.deleteMilktea= (req, res) => {
    Milktea.deleteOne({_id: req.params.id})
        .then(deletedMilktea => res.json(deletedMilktea))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}