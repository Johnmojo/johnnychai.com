/**
 * Types
 * @date 26th August 2022
 */

// TODO Tidy up

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
  postType: string;
  title: string;
  slug: string;
  date: Date;
  category: string;
  tool: string;
  link?: string;
  github?: string;
  summary: string;
  description: string;
  thumbnail: string;
  hero: string;
}

export interface BlogsData {
  title: string;
  description: string;
  date: Date;
  slug: string;
  postType: string;
  hero: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: { total: number };
  };
}

export interface WorkType {
  postType: string;
  title: string;
  slug: string;
  date: Date;
  category: string;
  tool: string;
  link?: string;
  github?: string;
  summary: string;
  description: string;
  thumbnail: string;
  hero: string;
}

export interface BlogType {
  title: string;
  description: string;
  date: Date;
  slug: string;
  postType: string;
  hero: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: { total: number };
  };
}

export interface SlideshowType {
  image: string;
}

export interface MDXContentType {
  compiledSource?: string;
  frontmatter?: object;
  scope?: object;
}
