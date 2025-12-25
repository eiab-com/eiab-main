export type PartOfIndia = "north" | "south" | "east" | "west" | "northeast" | "northwest" | "southeast" | "southwest";

export interface ItineraryDay {
  day: number;
  title: string;
  distance?: string | null;
  highlights: string[];
}

export interface Adventure {
  id: string;
  title: string;
  state?: string | null;
  partOfIndia?: PartOfIndia | null;
  imageSrc: string;
  altText: string;
  shortDescription: string;
  longDescription: string;
  startDate: Date;
  endDate: Date;
  groupSize: string;
  infoPackUrl?: string | null;
  keyHighlights: string[];
  ridePrice: string;
  pillionPrice: string;
  deposit: string;
  rideDuration: string;
  highestAltitude: string;
  suitableFor: string;
  totalDistance: string;
  startingPoint: string;
  accommodationType: string;
  pickupPoint: string;
  photoGallery: string[];
  bikeModels: string[];
  difficultyLevel: string;
  averageDailyRide: string;
  region: string;
  published: boolean;
  itinerary: ItineraryDay[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AdventureEnquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  destination: string;
  phone?: string | null;
  countryCode?: string | null;
  createdAt: Date;
}

export enum ContactMethod {
  Email = "Email",
  Phone = "Phone"
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  countryCode?: string | null;
  location: string;
  message: string;
  contactMethod: ContactMethod;
  createdAt: Date;
}
