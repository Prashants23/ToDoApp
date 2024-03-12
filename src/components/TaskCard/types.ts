export interface TaskCardProps {
  name: string;
  description: string;
  category: string;
  initialState: "complete" | "pending";
  onStatusToggle: (status: boolean) => void;
  onDelete: () => void;
}
