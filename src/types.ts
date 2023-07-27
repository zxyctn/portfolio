export type SearchBarProps = {
  hideIcon?: boolean;
  hideButtons?: boolean;
  handleSubmit: (q: string) => void;
  value: string;
};

export type SearchProps = {
  q?: string;
	handleSubmit: (q: string) => void;
};
