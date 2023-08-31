export type SearchBarProps = {
  hideIcon?: boolean;
  hideButtons?: boolean;
  handleSubmit: (q: string) => void;
  handleLuck?: () => void;
  value: string;
};

export type SearchProps = {
  q?: string;
	handleSubmit: (q: string) => void;
	navigateToIndex?: () => void;
};

export type CardProps = {
  header?: string;
  content?: string;
  footer?: string;
  url?: string;
  image?: string;
};

export type TabProps = {
  id: string;
  name: string;
  active: boolean;
  clickHandler: (id: string) => void;
};

export type LinkProps = {
  href: string;
  text: string;
  platform: string;
};
