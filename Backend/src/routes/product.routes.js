import express from "express";
import { authenticateSeller } from "../middlewares/auth.middleware.js";
import { createProduct, getSellerProducts } from "../controllers/product.controller.js";
import multer from "multer"
import { createProductValidator } from "../validators/product.validator.js";
const router = express.Router();

const upload = multer({
    storage : multer.memoryStorage(),
    limits : {
        fileSize : 5*1024*1024
    }
})


/**
 * @route Post /api/products
 * @description Create a new product
 * @access private (Seller only)
 */
router.post("/create",authenticateSeller,upload.array("images",7),createProductValidator,createProduct);

/**
 * @route GET /api/products/seller
 * @description Get all products of the authenticted seller
 * @access Private (seller only)
 */
router.get("/seller",authenticateSeller,getSellerProducts);

export default router;