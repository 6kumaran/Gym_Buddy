export interface Exercise {
  id: string;
  name: string;
  image?: string; // thumbnail
  video?: string; // optional demo video
  equipment: string[];
  muscles: { name: string; image?: string }[];
  steps: string[];
}
