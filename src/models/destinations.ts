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

export interface IDestinationDetailsResponse {
  destination?: IDestination;
  errorMessage?: string;
}
