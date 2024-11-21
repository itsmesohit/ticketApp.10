import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

import { natsWrapper } from "../../nats-wrapper";

it("returns 404 if the ticket is not found", async () => {
    
    const cookie = await global.signin();

    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 20
        })
        .expect(404);
});

it("return a 401 if the user is not authenticated", async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: "concert",
            price: 20
        })
        .expect(401);
});
it("return a 401 if the user does not own the ticket", async () => {

    let cookie = await global.signin();

    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 20
        });

    cookie = await global.signin();
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 1000
        })
        .expect(401);
});

it("return a 400 if the user provides an invalid title", async () => {
    const cookie = await global.signin();
    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 20
        });
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "",
            price: 1000
        })
        .expect(400);
});

it("return a 400 if the user provides an invalid price", async () => {
    const cookie = await global.signin();
    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 20
        });
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: -10
        })
        .expect(400);
});

it("updates the ticket provided valid inputs", async () => {
    const cookie = await global.signin();
    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 20
        });
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 1000
        })
        .expect(200);
    const ticketResponse = await request(app)
        .get(`/api/tickets/${response.body.id}`)
        .send()
        .expect(200);
    expect(ticketResponse.body.title).toEqual("concert");
    expect(ticketResponse.body.price).toEqual(1000);
});


it("publishes an event", async () => {
    const cookie = await global.signin();
    const response = await request(app)
        .post("/api/tickets")
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 20
        });
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set("Cookie", cookie)
        .send({
            title: "concert",
            price: 1000
        })
        .expect(200);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
});