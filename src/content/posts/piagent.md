---
title: 高自定义Agent——pi
pubDate: 2026-05-02
description: 介绍Pi Agent的核心概念和使用方式。
author: weiwo
image:
  url: ""
  alt: ""
tags:
  - Pi Agent
  - AI
  - 编程工具
---

## pi 里最重要的几个概念

### 1. Skills

Skills 是按需加载的能力包，符合 Agent Skills 标准。

你可以把 skill 理解为：

- 一份结构化的操作说明
- 可能附带脚本、参考文档、资源文件
- 当任务匹配时由 agent 加载执行

比如：

- code review skill
- debugging skill
- PDF 处理 skill
- web 搜索 skill

在 pi 里，skills 可以通过 /skill:name 手动触发，也可以让 agent 自动读取。

---

### 2. Extensions

Extensions 是 pi 的"真正超能力"。

它们是 TypeScript 模块，可以做很多事：

- 注册新工具
- 注册新命令
- 监听事件
- 拦截工具调用
- 自定义 UI
- 加权限确认
- 加 path protection
- 集成外部系统
- 自定义 compaction
- 实现 sub-agent / plan mode

比如你完全可以写一个 extension：

- 在执行危险 bash 前弹确认
- 给模型增加一个 deploy 工具
- 把 session 自动同步到某个系统
- 在 TUI 里放一个交互式小面板

所以如果你问"pi 能不能做 X"，答案通常是：
核心不一定内置，但可以通过 extension 做。

---

### 3. Prompt Templates

就是可复用的提示词模板。

例如定义一个 /review：

```md
Review this code for bugs, security issues, and performance problems.
Focus on: {{focus}}
```

然后在终端里快速展开使用。

适合做：

- 代码审查
- 提交信息生成
- issue 分析
- 需求拆解

---

### 4. Themes

pi 的 TUI 支持主题，内置 dark 和 light，也支持自定义 JSON 主题，还支持热重载。

如果你在乎终端美观或者团队统一风格，这个挺方便。

---

### 5. Pi Packages

Pi Packages 是分发机制。

你可以把：

- extensions
- skills
- prompts
- themes

打成 npm 或 git 包，然后用 pi install 安装。

这让 pi 不只是"单机工具"，而是一个可以分享能力的生态。

---

## 使用方式大概是怎样的

最基础就是：

```bash
npm install -g @mariozechner/pi-coding-agent
pi
```

然后在终端里直接和它说话。

它默认会给模型这几个工具：

- read
- write
- edit
- bash

然后你可以继续加自己的能力。

---

## 交互体验上有什么

pi 的交互模式里有一些挺实用的设计：

- /model 切模型
- /settings 改设置
- /resume 恢复历史 session
- /tree 在会话树里跳转分支
- /fork / /clone 分叉会话
- /compact 做上下文压缩
- @ 引用文件
- !command 直接跑 shell 命令

它的 session 是树状的，不只是线性的聊天记录，这对实验不同方案挺有用。

---

## SDK 和程序化使用

pi 不只是 CLI，还提供 SDK。

可以在 TypeScript/Node 里这样用：

- 创建 agent session
- 订阅流式事件
- 发送 prompt
- 控制模型和 thinking level
- 管理 session runtime

这意味着你可以把 pi 当成底层 agent 引擎，去做：

- 自定义前端 UI
- 桌面应用
- Web 应用
- 自动化工作流
- 多 agent 协作系统

如果你是开发者，这部分很值得看。

---

## pi 适合什么人

我觉得 pi 特别适合这几类人：

### 1. 喜欢终端、想要可控 agent 的开发者

如果你不喜欢太"封闭"的 agent 产品，pi 很适合。

### 2. 想自己定义工作流的人

比如你有自己的一套：

- 审查流程
- 测试流程
- 发布流程
- 安全限制
- 团队规范

pi 比较容易贴合这些东西。

### 3. 想做 agent 二次开发的人

如果你不是只"用 agent"，而是想"基于 agent 做产品/工具"，pi 的 extension 和 SDK 很有吸引力。

---

## 它可能不适合什么人

如果你想要的是：

- 开箱即用、啥都内置
- 图形界面丰富
- 默认就有完整多 agent / planner / permission 系统
- 不想折腾任何配置

那 pi 可能不是最省心的选择。
它的价值在于 自由度，而自由度通常也意味着你要自己设计一些东西。

---

## 官方哲学总结

根据 README，我会把 pi 的设计哲学概括成三句话：

1. 核心最小化
2. 能力外置化
3. 工作流用户化

也就是：

- 核心少做事
- 把复杂能力做成扩展/技能/包
- 让用户按自己的方式组织 agent 工作流