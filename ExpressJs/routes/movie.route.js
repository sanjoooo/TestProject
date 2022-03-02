const express=require("express");
const router=express.Router();
const movie_controller=require("../controller/movie.controller");

router.get("/test",movie_controller.test);

router.post("/create",movie_controller.create);
router.get("/all",movie_controller.all);

router.get("/:id",movie_controller.details);

router.delete("/deleteMovie/:id",movie_controller.delete)

router.put("/update/:id",movie_controller.update)

module.exports=router;