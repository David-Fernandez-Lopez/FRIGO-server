module.exports = app => {

    const authRouter = require("./auth.routes")
    app.use("/api/auth", authRouter)

    const recipesRouter = require("./recipes.routes")
    app.use("/api/recipes", recipesRouter)

    const cuisinesRouter = require("./cuisines.routes")
    app.use("/api/cuisines", cuisinesRouter)

    const dishTypesRouter = require("./dishTypes.routes")
    app.use("/api/dishTypes", dishTypesRouter)

    const measurementsUnitsRouter = require("./measurementsUnits.routes")
    app.use("/api/measurementsUnits", measurementsUnitsRouter)

    const uploadRouter = require("./upload.routes")
    app.use("/api/upload", uploadRouter)
}