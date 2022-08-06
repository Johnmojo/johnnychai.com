export interface Blog {
  postType: string;
  slug: number;
  title: string;
  date: Date;
  description: string;
  hero: string;
}

export interface BlogIndex {
  blogs: Blog;
}

export interface BlogData {
  postType: string;
  slug: number;
  title: string;
  date: Date;
  description: string;
  hero: string;
}

export type BlogContent<
  TScope = Record<string, unknown>,
  TFrontmatter = Record<string, string>
> = {
  compiledSource: string;
  scope?: TScope;
  frontmatter?: TFrontmatter;
};

export interface BlogSlug {
  data: BlogData;
  content: BlogContent;
}

export interface WorksData {
  title: string;
  description: string;
  date: string;
  slug: string;
  postType: string;
  hero: string;
}

export interface BlogsData {
  title: string;
  description: string;
  date: string;
  slug: string;
  postType: string;
  hero: string;
}

export interface WorkType {
  title: string;
  description: string;
  date: string;
  slug: string;
  postType: string;
  hero: string;
}

export interface BlogType {
  title: string;
  description: string;
  date: string;
  slug: string;
  postType: string;
  hero: string;
}

export interface SlideshowType {
  image: string;
}

export interface MDXContentType {
  compiledSource: string;
  frontmatter?: object;
  scope?: object;
}
