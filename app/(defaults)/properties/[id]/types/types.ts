export interface PropertyDetails {
  general_details: {
    price: string;
    taxes: string;
    address: string;
    lot_size: string;
    directions: string;
  };
  room_interior: {
    rooms: number;
    rooms_plus: number;
    bedrooms: number;
    bedrooms_plus: number;
    kitchens: number;
    family_room: string;
    basement: string;
  };
  exterior: {
    property_type: string;
    style: string;
    exterior: string;
    garage_type: string;
    drive_parking_spaces: number;
    pool: string;
  };
  utilities: {
    fireplace_stove: string;
    heat_source: string;
    heat_type: string;
    central_air_conditioning: string;
    laundry_level: string;
    sewers: string;
    water: string;
  };
  at_a_glance: {
    type: string;
    area: string;
    municipality: string;
    neighborhood: string;
    style: string;
    lot_size: string;
    tax: string;
    beds: number;
    baths: number;
    fireplace: string;
    pool: string;
  };
  _id: string;
  name: string;
  category: string;
  available_for: string;
  listing_id: string;
  property_description: string;
  image_urls: string[];
  street_view: string;
  map_location: string;
  latitude: string;
  longitude: string;
  place_id: string;
  agent_id: string;
  pincode: string;
  country: string;
  state: string;
  city: string;
  square_feet: number;
  is_deleted: boolean;
}
export const initialPropertyDetails: PropertyDetails = {
  general_details: {
    price: "",
    taxes: "",
    address: "",
    lot_size: "",
    directions: "",
  },
  room_interior: {
    rooms: 0,
    rooms_plus: 0,
    bedrooms: 0,
    bedrooms_plus: 0,
    kitchens: 0,
    family_room: "",
    basement: "",
  },
  exterior: {
    property_type: "",
    style: "",
    exterior: "",
    garage_type: "",
    drive_parking_spaces: 0,
    pool: "",
  },
  utilities: {
    fireplace_stove: "",
    heat_source: "",
    heat_type: "",
    central_air_conditioning: "",
    laundry_level: "",
    sewers: "",
    water: "",
  },
  at_a_glance: {
    type: "",
    area: "",
    municipality: "",
    neighborhood: "",
    style: "",
    lot_size: "",
    tax: "",
    beds: 0,
    baths: 0,
    fireplace: "",
    pool: "",
  },
  _id: "",
  name: "",
  category: "",
  available_for: "",
  listing_id: "",
  property_description: "",
  image_urls: [],
  street_view: "",
  map_location: "",
  latitude: "",
  longitude: "",
  place_id: "",
  agent_id: "",
  pincode: "",
  country: "",
  state: "",
  city: "",
  square_feet: 0,
  is_deleted: false,
};
