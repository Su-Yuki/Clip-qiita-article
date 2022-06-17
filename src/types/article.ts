export type Article = {
  id?:         string;
  user:        {[index: string]: string};
  title:       string;
  likes_count: number;
  created_at:  string;
}