export interface RecipeFile {
  data: {
    name: string;
    description: string;
    tags: string[];
  };
  content: string;
  path: string;
}
