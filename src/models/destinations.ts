export interface IDestination {
  id: number;
  name: string;
  description: string;
  country: string;
  climate: string;
  currency: string;
  latitude: number;
  longitude: number;
}

export interface IDestinationsResponse {
  destinations?: IDestination[];
  errorMessage?: string;
}

export interface IDestinationDetailsResponse {
  destination?: IDestination;
  errorMessage?: string;
}

export interface INearbyDest {
  id: number;
  name: string;
  distance: number;
}
