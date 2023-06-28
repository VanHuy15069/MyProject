import * as userService from '../services/userService'

export const getOneUser = async (req, res) => {
    const id = req.params.id
    try{
        const response = await userService.getOneUserService(id)
        return res.status(200).json(response)
    }catch(error){
        return res.status(500).json({
            err: -1,
            msg: 'failure ' + error
        })
    }
}

export const getAllUser = async (req, res) => {
    try {
        const response =await userService.getAllUserService()
        return res.status(200).json(response)
    } catch (error) {
         return res.status(500).json({
            err: -1,
            msg: 'failure ' + error
        })
    }
}

export const vipUpgrade = async (req, res) => {
    const id = req.params.id
    try {
        const response = await userService.vipUpgradeService(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'failure ' + error
        })
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try{
        if(!data){
            return res.status(400).json({
                err: 1,
                msg: 'Full information is required'
            })
        }
        const response = await userService.updateUserService(data, id)
        return res.status(200).json(response)
    }catch(error){
        return res.status(500).json({
            err: -1,
            msg: 'failure ' + error
        })
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    try{
        const response = await userService.deleteUserService(id)
        return res.status(200).json(response)
    }catch(error){
        return res.status(500).json({
            err: -1,
            msg: 'failure ' + error
        })
    }
}