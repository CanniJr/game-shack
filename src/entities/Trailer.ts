interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string }; //from the api results
}

export default Trailer;
