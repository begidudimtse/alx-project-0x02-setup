export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";       // optional prop
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // optional prop
  children: React.ReactNode;                 // button content
  onClick?: () => void;                      // optional click handler
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
