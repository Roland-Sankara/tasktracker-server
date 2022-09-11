const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const getUserTasks = async(req, res) => {
    try{
        const tasks = await prisma.task.findMany({
            where: {
                userId: +req.params.id
            }
        });
        if(tasks.length){
            res.status(200).json({status: 200, data: {message: 'success', tasks, error: null}});
        }else{
            res.status(404).json({status: 404, data: {message: 'tasks not found', error: null}});
        }
    }catch(error){
        res.status(400).json({status: 400, data: {message: `Invalid userId: ${req.params.id}`, error}});
    }
};

const createNewTask = async(req, res) => {
    try{
        const task = await prisma.task.create({
            data: req.body
        })
        res.status(201).json({status: 201, data: {message: 'Successfully created task', task, error:null}})
    }catch(error){
        res.status(400).json({status: 400, data: {message: 'Failed to create task', error}});
    }
};

const updateTaskById = async(req, res) => {
    try{
        const task = await prisma.task.update({
            data: req.body,
            where: {
                id: +req.params.id
            }
        })
        res.status(200).json({status: 200, data: {message: 'Task updated successfully', task, error: null}});
    }catch(error){
        res.status(400).json({status: 400, data: {message: 'Failed to update task', error}})
    }
};

const deleteTaskById = async(req, res) => {
    try{
        await prisma.task.delete({
            where: {
                id: +req.params.id
            }
        })
        res.status(200).json({status: 200, data: {message: 'Task Deleted Successfully', error: null}})
    }catch(error){
        res.status(500).json({status: 500, data: {message: 'Failed to update task', error}})
    }
};

module.exports = {
    getUserTasks,
    createNewTask,
    updateTaskById,
    deleteTaskById
};
