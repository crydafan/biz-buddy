type Biz = {
  id: string;
  photo: google.maps.places.Photo | null;
  name: string;
  address: string;
  summary: string;
  location: {
    lat: number;
    lng: number;
  };
};
