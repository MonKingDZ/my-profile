# Personal Site

个人主页，用于建立个人技术品牌、支撑求职简历，并展示项目与技术栈。

## Language

**Homepage**:
网站根路由（`/`）页面，由 About、精选 Project 列表与 Contact 区块组成。
_Avoid_: Landing Page

**About**:
首页的静态个人介绍区块，写死在代码中，包含三部分：Bio、Experience、Tech Stack。文案中包含指向外部网站的超链接。
_Avoid_: Profile, Intro

**Bio**:
About 区块中的个人简介文字，含超链接。
_Avoid_: Hero

**Experience**:
About 区块中的履历/工作与教育经历时间线。
_Avoid_: Resume, 简历

**Tech Stack**:
About 区块中展示的技术栈/工具列表。

**Project**:
个人项目模块中的一个条目。手动维护的精选配置（写在代码/配置文件中），不从 GitHub API 自动拉取。字段包括：标题、简介、技术标签、GitHub 链接、Demo 链接、封面图。无独立详情页。首页展示 3-4 个精选，`/projects` 展示完整列表。
_Avoid_: Repo, Repository

**Post**:
博客模块中的一篇文章，内容以本地 MDX 文件驱动。数据层做了抽象，未来可替换为后端/CMS 数据源而不改动前端展示逻辑。带 Tag，列表按发布时间倒序排列，不做分组视图。字段：标题、发布日期、摘要（必填，复用于列表预览/RSS 描述/OG 分享卡片）、封面图（选填，缺省用默认占位图）、Tag、正文。
_Avoid_: Article, Entry

**Tag**:
Post 的分类标签，用于标注文章主题。不影响默认列表排序（仍按时间倒序）。
_Avoid_: Category

**Subscribe**:
导航栏中的独立页面，用于让访客订阅博客更新。首期只产出静态 RSS feed（无需邮箱、无后端）；邮件订阅（访客输入邮箱）是后续迭代项，届时用 PostgreSQL 存储订阅者邮箱并接入发信服务。两者共用同一个 Subscribe 页面入口。
_Avoid_: RSS（单指 feed 本身，不等于 Subscribe 页面）

**Contact**:
首页内的一个区块（Bio/Experience/Tech Stack/Projects 精选之后），包含邮箱与简历下载。导航栏的 Contact 是锚点跳转，不是独立路由。常用社交链接常驻 Footer。
_Avoid_: 独立 Contact 页面
