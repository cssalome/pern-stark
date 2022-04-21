 const { Router } = require('express');
 const pool = require('../db')

 const router = Router();
 
 router.get( '/tasks/01', async( req,res ) => {
   const result = await pool.query('SELECT NOW() ')
   console.log(result);
   res.json('executed')
 });

 router.get( '/tasks', ( req,res ) => {
  res.send('Retrieving a single task')
 });

 router.delete( '/tasks', ( req,res ) => {
  res.send('Deleting a task')
 });

  router.post( '/tasks', ( req,res ) => {
  res.send('Creating a task')
 });

  router.put( '/tasks', ( req,res ) => {
  res.send('Updating a task')
 });

 module.exports = router;