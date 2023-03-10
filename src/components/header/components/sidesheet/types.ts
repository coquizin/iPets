export type SideSheetProps = {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  preventBodyScrolling?: boolean;
  overlay?: boolean;
};
