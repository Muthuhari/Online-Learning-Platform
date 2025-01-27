
const express = require("express");
const router = express.Router();

//Insert Model
const User = require("../Model/CourseModel");

//Insert User Controller
const UserController = require("../Controllers/UserControllers");
router.get("/",UserController.getAllCourse);
router.post("/",UserController.addCourse);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateCourse);
router.delete("/:id",UserController.deleteUser);

//export
module.exports = router;