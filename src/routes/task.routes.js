const { Router } = require('express');
const { 
  getAllTask, 
  postTask, 
  putTask, 
  deleteTask, 
  getTask
} = require('../controllers/task.controllers')

const pool = require('../db')

const router = Router();
 
router.get( '/tasks', getAllTask );

router.get( '/tasks/10', getTask);

router.delete( '/tasks', deleteTask);

router.post( '/tasks', postTask);

router.put( '/tasks', putTask)