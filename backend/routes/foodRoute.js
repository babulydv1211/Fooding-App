import express from "express"
import { addFood,listFood,removedFood} from "../controllers/foodController.js"
import multer from "multer" //iska use image storage

const foodRouter = express.Router();



//image Stroge Engine

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

// foodRouter.post("/add", upload.single('image'), addFood)
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removedFood);


export default foodRouter;