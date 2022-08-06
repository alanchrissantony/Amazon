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


departmentRouter.post('/edit',
  expressAsyncHandler(async (req, res) =>{
    const data = req.body
    const department = await Department.findById(data._id);
    if(department){
      department.name = data.name || department.name;
      department.image = data.image || department.image;
      const updated = await department.save()
      res.send({ updated });
    }
    
    
  })

);


departmentRouter.post(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const department = await Department.findById(req.params.id);
    if (department) {
      res.send(department);
    } else {
      res.status(404).send({ message: 'Department Not Found' });
    }
  })
);



export default departmentRouter;