# 如何在 Netlify 上部署 Astro 博客

这里有几种在 Netlify 上部署你的博客的方法。

## 方法一：通过 Git 自动部署（推荐）

这是最简单且最常用的方法。每次你推送到 GitHub/GitLab/Bitbucket 时，Netlify 都会自动构建并发布你的网站。

1.  **提交你的代码到 Git 仓库**（如 GitHub）。
    *   确保你的项目根目录有 `netlify.toml` 文件（我已经为你创建好了）。
2.  登录 [Netlify](https://app.netlify.com/)。
3.  点击 **"Add new site"** -> **"Import an existing project"**。
4.  选择你的 Git 提供商（如 GitHub）。
5.  选择你的仓库 `astro-blog` (或者你起的名字)。
6.  Netlify 会自动检测设置（因为有 `netlify.toml`）：
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
7.  点击 **"Deploy site"**。

## 方法二：手动上传（拖拽部署）

如果你不想使用 Git，可以直接上传构建好的文件。

1.  在本地终端运行构建命令：
    ```bash
    npm run build
    ```
    这会在你的项目目录下生成一个 `dist` 文件夹。
2.  登录 [Netlify](https://app.netlify.com/)。
3.  在 "Sites" 页面底部，你会看到一个可以拖拽文件的区域。
4.  将你的 `dist` 文件夹拖拽到那个区域。
5.  等待几秒钟，你的网站就上线了！

## 验证

部署完成后，Netlify 会给你一个类似 `https://random-name-12345.netlify.app` 的网址。你可以点击它来查看你的线上博客。
