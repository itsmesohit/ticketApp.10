
import { Publisher, Subjects, TicketUpdatedEvent } from '@coding-spark/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}



