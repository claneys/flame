import { Model } from '.';

export interface NewApp {
  name: string;
  url: string;
  icon: string;
  isPublic: boolean;
  description: string;
  embed?: boolean;
}

export interface App extends Model, NewApp {
  orderId: number;
  isPinned: boolean;
}
