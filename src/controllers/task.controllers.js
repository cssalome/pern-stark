const getAllTask = async( req,res ) => {
  res.send('retrieven a list of task')
};

const getTask = (req, res) => {
  res.send('Retrieving a single task')
}

const deleteTask = ( req,res ) => {
  res.send('Deleting a task')
}

const postTask = ( req,res ) => {
  res.send('Creating a task')
}

const putTask = ( req,res ) => {
  res.send('Updating a task')
};

module.exports = {
  getAllTask, 
  getTask,
  deleteTask,
  postTask,
  putTask
}
