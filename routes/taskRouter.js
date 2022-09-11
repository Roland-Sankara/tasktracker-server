const router = require("express").Router();

// task controllers
const { 
    getUserTasks,
    createNewTask,
    updateTaskById,
    deleteTaskById
} = require('../controllers/taskController');

router.get("/:id", getUserTasks);
router.post("/", createNewTask);
router.patch("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

module.exports = router;
