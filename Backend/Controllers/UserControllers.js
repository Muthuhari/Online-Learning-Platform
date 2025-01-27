
const User = require("../Model/CourseModel");
const getAllCourse = async (req, res, next) => {
    let courses;
    //Get all courses
    try{
      courses =await User.find();
    }catch (err) {
        console.log(err);
    }
    //not found
    if(!courses){
        return res.status(404).json({message:"User not found"})
    }
  
// Disply all courses
return res.status(200).json({ courses });

}

//data Insert
const addCourse = async (req, res, next) => {

    const {name, description, cost, address} = req.body;
    let courses;

    try{
      courses = new User({name, description, cost, address});
        await courses.save();
    }catch (err) {
        console.log(err);
    }
  // not insert courses
  if(!courses){
    return res.status(404).send({message:"unable to add courses"});
  }
  return res.status(200).json({ courses });

}

//Get by Id
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch (err) {
        console.log(err);
    }
  // not available courses
  if(!user){
    return res.status(404).send({message:"user not found"});
  }
  return res.status(200).json({ user });

}

//updateUser details
const updateCourse = async (req, res, next) => {
    const id = req.params.id;
    const {name, description, cost, address} = req.body;

    let courses;

    try{
      courses = await User.findByIdAndUpdate(id,
        {name:name, description:description, cost:cost, address:address});
        courses.save();
  }catch (err) {
      console.log(err);
  }
  // not available courses
  if(!courses){
    return res.status(404).send({message:"Unable to Update User Details"});
  }
  return res.status(200).json({ courses });

}

//updateUser details
const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  let user;

  try{
    user = await User.findByIdAndDelete(id);
}catch (err) {
    console.log(err);
}
// not available courses
if(!user){
  return res.status(404).send({message:"Unable to Delete User Details"});
}
return res.status(200).json({ user });

}

exports.getAllCourse = getAllCourse;
exports.addCourse = addCourse;
exports.getById = getById;
exports.updateCourse = updateCourse;
exports.deleteUser = deleteUser;

