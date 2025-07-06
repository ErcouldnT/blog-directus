/** * Generated TypeScript types for Directus Schema * Generated on: 2025-07-06T05:25:47.371Z */
export interface Website {
  id: string;
}

export interface Category {
  id: number;
  sort: number;
  user_created: string | DirectusUser;
  date_created: 'datetime';
  user_updated: string | DirectusUser;
  date_updated: 'datetime';
  name: string;
  posts: number[] | Post[];
}

export interface Comment {
  id: number;
  status: string;
  sort: number;
  user_created: string | DirectusUser;
  date_created: 'datetime';
  user_updated: string | DirectusUser;
  date_updated: 'datetime';
  username: string;
  comment: string;
  post: number | Post;
}

export interface Post {
  id: number;
  status: string;
  sort: number;
  user_created: string | DirectusUser;
  date_created: 'datetime';
  user_updated: string | DirectusUser;
  date_updated: 'datetime';
  title: string;
  /** It will be generated automatically based on your post title. */
  slug: string;
  content: string;
  author: string | DirectusUser;
  image: string | DirectusFile;
  view_count: number;
  like_count: number;
  share_count: number;
  description: string;
  comments: number[] | Comment[];
  tags: number[] | PostsTag[];
  category: number | Category;
  SEO: Record<string, unknown>;
}

export interface PostsTag {
  id: number;
  posts_id: number | Post;
  tags_id: number | Tag;
}

export interface Project {
  id: number;
  user_created: string | DirectusUser;
  date_created: 'datetime';
  user_updated: string | DirectusUser;
  date_updated: 'datetime';
  title: string;
  description: string;
}

export interface Tag {
  id: number;
  sort: number;
  user_created: string | DirectusUser;
  date_created: 'datetime';
  user_updated: string | DirectusUser;
  date_updated: 'datetime';
  name: string;
  posts: number[] | PostsTag[];
}

export interface DirectusUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  location: string;
  title: string;
  description: string;
  tags: string;
  avatar: string;
  language: string;
  tfa_secret: boolean;
  status: string;
  role: string;
  token: string;
  last_access: string;
  last_page: string;
  provider: string;
  external_identifier: string;
  auth_data: string;
  email_notifications: boolean;
  appearance: string;
  theme_dark: string;
  theme_light: string;
  theme_light_overrides: string;
  theme_dark_overrides: string;
  policies: string;
}

export interface DirectusFile {
  id: string;
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder: string;
  uploaded_by: string;
  uploaded_on: string;
  modified_by: string;
  modified_on: string;
  charset: string;
  filesize: number;
  width: number;
  height: number;
  duration: number;
  embed: string;
  description: string;
  location: string;
  tags: string;
  metadata: string;
  created_on: string;
  focal_point_x: string;
  focal_point_y: string;
  tus_id: string;
  tus_data: string;
}

export interface DirectusFolder {
  id: string;
  name: string;
  parent: string;
}

export interface DirectusRole {
  id: string;
  name: string;
  icon: string;
  description: string;
  admin_access: boolean;
  app_access: boolean;
  children: string;
  users: string;
  parent: string;
  policies: string;
}

export interface ApiCollections {
  Website: Website[];
  categories: Category[];
  comments: Comment[];
  posts: Post[];
  posts_tags: PostsTag[];
  project: Project;
  tags: Tag[];
  directus_users: DirectusUser[];
  directus_files: DirectusFile[];
}

