import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Department from '../models/departmentModel.js';




const departmentRouter = express.Router();

departmentRouter.post('/',
  expressAsyncHandler(async (req, res) => {
    const departments = await Department.find({});
    res.send(departments);
  })
);


departmentRouter.post('/add',
  expressAsyncHandler(async (req, res) =>{
    const data = req.body
    const createdDepartment = await Department.insertMany(data.department);
    res.send({ createdDepartment });
  })

);


departmentRouter.post('/delete',
  expressAsyncHandler(async (req, res) =>{
    const data = req.body
    const deletedDepartment = await Department.deleteOne({ _id: data.id });
    res.send({ deletedDepartment });
  })

);



export default departmentRouter;