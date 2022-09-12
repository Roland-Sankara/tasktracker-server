const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async(req, res) => {
    try{
        const users = await prisma.user.findMany({
            select:{
                id: true,
                username: true
            }
        });
        res.status(200).json({status: 200, data: {message: 'Success', users, error: null}});
    }catch(error){
        res.status(500).json({status: 500, data: {message: 'Failed to fetch users', error}});
    }
};

const registerUser = async(req, res) => {
    try{
        const user = await prisma.user.create({
            data: req.body
        })
        res.status(201).json({status: 201, data: {message: 'Succesfully registered user', user: {id: user.id, username: user.username}, error: null}})
    }catch(error){
        res.status(400).json({status: 400, data: {message: 'Failed to register', error}})
    }
};

const loginUser = async(req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username
            }
        });

        if(user){
            if(user.password === req.body.password){
                res.status(200).json({status: 200, data: {message: 'User login successful', user: {id: user.id, username: user.username}, error: null}});
            }else{
                res.status(400).json({status: 400, data: {message: 'Invalid User Password. Try again!', error: null}})
            }
        }else{
            res.status(404).json({status: 404, data: {message: `Invalid username - ${req.body.username}. user not found`, error: null}})
        }

    }catch(error){
        res.status(400).json({status: 400, data: {message: 'User login failed', error}})
    }
};

module.exports = {
    getAllUsers,
    registerUser,
    loginUser
};