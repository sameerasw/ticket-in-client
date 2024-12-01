export interface Ticket {
  id: number;
  available: boolean;
  ticketPrice: number;
}

export interface TicketDTO {
  eventName: string;
  ticketId: string;
  imageUrl: string;
  dateTime: string;
}
