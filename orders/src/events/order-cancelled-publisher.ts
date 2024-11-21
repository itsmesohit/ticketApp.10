import { Subjects, Publisher, OrderCancelledEvent } from "@coding-spark/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}