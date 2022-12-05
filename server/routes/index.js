module.exports = app => {

    const authRouter = require("./auth.routes")
    app.use("/api/auth", authRouter)

    const recipesRouter = require("./recipes.routes")
    app.use("/api/recipes", recipesRouter)

}