import { Publisher, OrderCreatedEvent, Subjects } from "@coding-spark/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

