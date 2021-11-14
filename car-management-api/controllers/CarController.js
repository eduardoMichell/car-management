const express = require('express')
const Car = require('../models/Car')
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    const {brand, model, yearFabrication, price, color} = req.body;
    const car = new Car({brand, model, yearFabrication, price, color});
    await car.save((err, car) => {
        if (err) {
            return res.status(501).json({err});
        }
        return res.status(200).json({car})
    })
})

// Read
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// Read By Id
router.get("/:id", async (req, res) => {
    Car.findById(req.params.id).exec((err, car) => {
        if (err) {
            res.status(204).send({error: 'Car  Not Found'})
        } else {
            if (car == null) {
                return res.status(404).json({message: "Cannot find Car"});
            }
            res.send(car)
        }
    })
});

// Update
router.put("/:id", async (req, res) => {
    const {brand, model, yearFabrication, price, color} = req.body
    let car = {brand, model, yearFabrication, price, color}

    Car.findByIdAndUpdate({_id: req.params.id}, car, {new: true}).exec(
        (err, value) => {
            if (err) {
                res.send(err)
            } else {
                res.send(value)
            }
        })
});

// Delete
router.delete("/:id", async (req, res) => {
    Car.findByIdAndDelete({_id: req.params.id}, (err, car) => {
        if (err) {
            res.json({car, success: false, msg: "Failed to delete car"});
        } else {
            res.json({car, success: true, msg: "Car deleted"});
        }
    })
});

module.exports = router;
