import type {Document} from "./document.ts";

export interface Construction {
  id_gov: string;
  name: string;
  address: string;
  status: string;
  start_date: Date;
  end_date: Date;
  area: string;
  floors: number;
  responsible_person: string;
  documents:Document[];
  photos: string[];
}








