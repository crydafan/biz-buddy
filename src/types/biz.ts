export type BizType = {
  id: string;
  photo: string | null;
  name: string;
  address: string;
  summary: string;
  location: {
    lat: number;
    lng: number;
  };
};
