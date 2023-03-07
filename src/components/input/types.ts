export type InputProps = {
  id: string;
  name: string;
  label: string;
  height?: string;
  type: string;
  placeholder?: string;
  register: any;
  errors: any;
  min?: number;
  onChange?: (e: any) => void;
};
