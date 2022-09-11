const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// routers
const userRouter = require("./routes/userRouter");
const taskRouter = require("./routes/taskRouter");

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to tasktracker API",
    "api-documentation": "URL added here.",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  console.log("Press CTRL+C to stop server.");
});
