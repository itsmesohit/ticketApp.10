import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

import { createTicketRouter } from "./routes/new";
import { errorHandler, NotFoundError, currentUser } from "@coding-spark/common";
import {showTicketRouter} from "./routes/show";
import {indexTicketRouter} from "./routes/index";
import { updateTicketRouter } from "./routes/update";
const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== "test"
    })
);

app.use(currentUser);

// routes
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);


// route not found
app.all("*", async (req, res, next) => {
    next(new NotFoundError());
});

// middleware to handle errors
app.use(errorHandler);

export { app };
