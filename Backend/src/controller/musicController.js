import * as musicService from '../services/musicService'

export const addMusic = async (req, res) => {
    try {
        const {categoryId, singerId, musicName, description} = req.body
        const musicLink = req.files.musicLink[0].filename
        const image = req.files.image[0].filename
        if(!categoryId || !singerId || !musicName || !musicLink || !description || !image){
            return res.status(404).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await musicService.addMusicService(req.body, image, musicLink)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const updateImage = async (req, res) => {
    try {
        const id = req.params.id
        const image = req.file.filename
        if(!image){
            return res.status(404).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await musicService.updateImageService(id, image)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const updateMusic = async (req, res) => {
    try {
        const id = req.params.id
        const musicLink = req.file.filename
        if(!musicLink){
            return res.status(404).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await musicService.updateMusicService(id, musicLink)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const updateInforMusic = async (req, res) => {
    try {
        const id = req.params.id
        const {categoryId, singerId, musicName, description} = req.body
        if(!categoryId || !singerId || !musicName || !description){
            return res.status(404).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await musicService.updateInforMusicService(req.body, id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const upgrateVip = async (req, res) => {
    try {
        const id = req.params.id
        const response = await musicService.upgrateVipService(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const getByCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        const {limit, offset,name, sort} = req.query
        if(!limit || !offset || !categoryId){
            return res.status(404).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await musicService.getByCategoryService(categoryId, limit, offset, name, sort)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const getBySinger = async (req, res) => {
    try {
        const singerId = req.params.id
        const {limit, offset, name, sort} = req.query
        if(!limit || !offset || !singerId){
            return res.status(404).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await musicService.getBySingerService(singerId, limit, offset, name, sort)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}

export const serchNameMusic = async (req, res) => {
    try {
        const {musicName, limit, offset, name, sort} = req.query
        const response = await musicService.searchNameMusicService(musicName, limit, offset, name, sort)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure' + error
        })
    }
}