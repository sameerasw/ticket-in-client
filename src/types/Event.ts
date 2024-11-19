import { TicketPool } from "./TicketPool";
import { Vendor } from "./Vendor";

export interface Event {
    eventId: number;
    eventName: string;
    ticketPrice: number;
    vendor: Vendor;
    ticketPool: TicketPool;
    name: string;
    id: number;
  }