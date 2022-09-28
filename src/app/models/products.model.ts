 export interface ProductsState {
  id:          string;
  title:       string;
  price:       number;
  description: string;
  category:    string;
  image:       string;
  rating:      Rating;
}

export interface Rating {
  rate:  number;
  count: number;
}

export interface ProductsCart{
  id: string;
}
