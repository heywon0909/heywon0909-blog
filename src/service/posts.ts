import path from "path";
import { promises as fs } from "fs";

export type TPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};
// 게시글 목록 조회 api
export async function getPosts(): Promise<Array<TPost>> {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// 게시글 정보 api
export async function getPostInfo(id: string): Promise<TPost> {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data).find((v: TPost) => v.id === id) ?? null;
}

// 게시글 상세 api
export async function getPost(id: string): Promise<string> {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  const data = await fs.readFile(filePath, "utf-8");

  const findItemPath =
    JSON.parse(data).find((item: TPost) => item.id === id).path ?? null;

  const fileItemPath = path.join(
    process.cwd(),
    "data/posts",
    `${findItemPath}.md`
  );
  const findData = await fs.readFile(fileItemPath, "utf-8");
  return findData;
}
