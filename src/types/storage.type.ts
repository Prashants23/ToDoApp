export interface AuthDetails {
  isAuthenticated?: boolean;
  tokens?: {
    name: string;
  };
}
interface Event {
  name: string;
  category: string;
  date: string;
  status: string;
  description: string;
}

export interface DataConfig {
  [date: string]: Event[];
}
export interface TodoList {
  data: DataConfig;
}
