import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs?: any;
    created: string;
    lastActive: string;
    gender: string;
    introduction: string;
    loolingFor?: any;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
  }
  
