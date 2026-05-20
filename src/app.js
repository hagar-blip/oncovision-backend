
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dashboardRoutes = require("./routes/dashboard.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const analysisRoutes = require("./routes/analysis.routes");
const app = express();
const aiRoutes = require("./routes/ai.routes");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/analyses", analysisRoutes);
app.get("/", (req, res) => {
  res.send("OncoVision API Running");
});
app.use("/ai", aiRoutes);
module.exports = app;
app.use("/users", userRoutes);