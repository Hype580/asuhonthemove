export interface Nanny {
  id?: string;
  name: string;
  image: string;
  background: {
    label: string;
    items: string[];
  };
  education: {
    label: string;
    value: string;
  };
  experience: {
    label: string;
    value: string;
  };
  zoom?: boolean;
  zoomLevel?: number;
  objectPosition?: string;
}

export interface NannyFormData extends Omit<Nanny, 'image'> {
  imageFile?: File;
} 