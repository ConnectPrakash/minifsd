
import UserModel from '../modules/user.js';

const createUser = async(req,res) =>{
    try{
       let user = await UserModel.findOne({email:req.body.email});
       if(!user){
        await UserModel.create(req.body)
        res.status(200).send({message:"User Created Successfully"})
  }  else{
    res.status(400).send({message:`user with ${req,body.email} already exists`});

}

    }catch(error){
        res.status(500).send({error:error.message});
       
      
    }

}

const getAllUser = async(req,res) =>{
    try {
        let users = await UserModel.find()
        res.status(200).send({
            message:"Users list fetched ",users
        })
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const getUserById = async(req,res) =>{
    try {
        let {id} = req.params.id;
        let users = await UserModel.findById(id);
        res.status(200).send({
            message:"Users list fetched ",users
        })
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const editUserById = async(req,res) =>{
    try {
        let {id} = req.params;
        let users = await UserModel.findById(id);
        if(users){
            users.firstName=req.body.firstName;
            users.lastName = req.body.lastName;
            users.email = req.body.email;
            await users.save();

            res.status(200).send({
                message:"user has edited"
            })
        }
       
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const deleteUserById = async(req,res) =>{
    try {
        let {id} = req.params;
        let users = await UserModel.findById(id);
        if(users){
            await UserModel.deleteOne({_id:id});
            res.status(200).send({
                message:"users deleted Successfully"
        })
    }
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export default {
    getAllUser,
    createUser,
    getUserById,
    deleteUserById,
    editUserById
}