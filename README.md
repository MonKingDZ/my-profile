# MonKingdz 个人网站

[monkingdz.com](https://monkingdz.com) 的源码：个人介绍、经历、项目展示与 MDX 博客。

技术栈：Next.js 16（App Router + Turbopack）· React 19 · TypeScript · Tailwind CSS 4 · Motion + GSAP · MDX

## 本地开发

```bash
npm install
npm run dev            # http://localhost:3000
npm run dev -- -p 1888 # 指定端口
```

其他命令：`npm run build`（生产构建）、`npm run start`（运行构建产物）、`npm run lint`。

## 发布文章

在 `content/posts/zh/` 下新建 `<slug>.mdx`，文件名即网址（`/blog/<slug>`）：

```mdx
---
title: "文章标题"          # 必填
date: "2026-11-10"         # 必填，用于排序、RSS、sitemap
excerpt: "一句话摘要"       # 必填，用于列表、RSS、分享卡片
subtitle: "副标题"          # 选填
tags: ["标签"]             # 选填
cover: "/images/xxx.jpg"   # 选填，图片放 public/ 下
featured: true             # 选填，出现在首页「推荐内容」
---

正文……
```

缺少必填字段会直接构建失败。文章页、RSS、sitemap 都在构建时静态生成，新文章需要重新部署才会上线。

## 目录要点

| 路径 | 内容 |
|---|---|
| `app/` | 页面与路由（首页、`/blog`、`/projects`、`/subscribe`、RSS、sitemap、OG 图） |
| `components/home/` | 首页各区块（Bio、推荐内容、经历、联系） |
| `lib/about.ts` / `lib/projects.ts` | 经历与项目数据（手动维护） |
| `lib/posts.ts` | 文章数据层（读取 MDX frontmatter） |
| `lib/site.ts` | 线上域名与站点描述 |
| `public/fonts/` | 自托管的中文字体分片（国内可访问） |
| `CONTEXT.md` / `docs/adr/` | 领域术语与架构决策记录 |
