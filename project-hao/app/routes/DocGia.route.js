const router = require("express").Router();
const { docGiaControllers } = require("../controllers/DocGia.controller");

router.post("/register", docGiaControllers.register);
router.post("/login", docGiaControllers.logIn);
router.put("/update", docGiaControllers.update);
router.get("/getOne", docGiaControllers.getOne);

module.exports = router;
