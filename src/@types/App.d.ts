interface AppProps {
  children?: React.ReactNode;
}

type CtxProps = {
  theme?: string | null;
  etStorageTheme?: () => void;
  toggleTheme?: () => void;
};

type ArticleProps = {
  id: number;
  title: string;
  date: Date;
  length: number;
  snippet: string;
};

type ButtonProps = {
  label: string;
  toggled: boolean;
  onToggleTheme?: () => void;
};
