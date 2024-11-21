import { Publisher, Subjects, TicketCreatedEvent } from '@coding-spark/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}



