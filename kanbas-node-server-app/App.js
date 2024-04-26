import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import session from "express-session";
import "dotenv/config";
import cors from "cors";

mongoose.connect("mongodb://localhost:27017/kanbas");
const app = express()
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
  const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
app.use(express.json());
app.use(cors());
UserRoutes(app);
Hello(app);
Lab5(app);
app.listen(4000);
const port = process.env.PORT || 4000;

