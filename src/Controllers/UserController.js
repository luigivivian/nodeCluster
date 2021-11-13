
const {User} = require('../models/');

class UserController{

    async getUsers(req, res){
 
        const users = await User.findAll();
        
        return res.status(200).json({users: users});
    }

}



module.exports = new UserController();