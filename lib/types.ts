export interface Blog {
  postType: string;
  slug: number;
  title: string;
  date: Date;
  description: string;
  featuredImg: string;
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
  featuredImg: string;
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
