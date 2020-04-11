const router = require('express').Router();


const todoRoutes = require('./todoRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /api/todos
router.use("/todos", todoRoutes);

// declares a route for /api/comments
router.use("/comments", todoRoutes);
router.use("/blogs", todoRoutes);
module.exports = router;
