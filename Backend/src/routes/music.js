import express from 'express'
import * as musicController from '../controller/musicController'
import * as upload from '../controller/uploadController'

const musicRouter = express.Router()
    musicRouter.post('/addMusic', upload.uploadManyFiles, musicController.addMusic)
    musicRouter.patch('/updateImage/:id', upload.uploadImage, musicController.updateImage)
    musicRouter.patch('/updateMusic/:id', upload.uploadMusic, musicController.updateMusic)
    musicRouter.put('/:id', musicController.updateInforMusic)
    musicRouter.patch('/upgrateVip/:id', musicController.upgrateVip)
    musicRouter.get('/getByCategory/:id', musicController.getByCategory)
    musicRouter.get('/getBySinger/:id', musicController.getBySinger)
    musicRouter.get('/searchNameMusic', musicController.serchNameMusic)
export default musicRouter