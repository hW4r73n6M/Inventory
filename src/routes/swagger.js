const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

router.use("/inventory/api-docs", swaggerUi.serve);
router.get("/inventory/api-docs", swaggerUi.setup(swaggerDocument));

// router.use("/supplier/api-docs", swaggerUi.serve);
// router.get("/supplier/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;