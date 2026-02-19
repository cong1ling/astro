---
title: 'Linux 常用命令速查手册'
pubDate: 2026-02-10
description: '整理了日常开发中最常用的 Linux 命令，让你的终端操作更加高效'
author: '言西早木'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Linux Commands'
tags: ["linux", "命令行", "开发工具"]
---

# Linux 常用命令速查手册

作为开发者，熟练掌握 Linux 命令是必备技能。这里整理了日常工作中最常用的命令。

## 📁 文件和目录操作

### 基础导航

```bash
# 查看当前目录
pwd

# 列出文件
ls          # 基本列表
ls -la      # 详细信息，包括隐藏文件
ls -lh      # 人类可读的文件大小

# 切换目录
cd /path/to/dir    # 进入指定目录
cd ..              # 返回上级目录
cd ~               # 回到家目录
cd -               # 返回上一个目录
```

### 文件操作

```bash
# 创建文件
touch file.txt
echo "内容" > file.txt

# 复制文件
cp source.txt dest.txt
cp -r dir1/ dir2/      # 递归复制目录

# 移动/重命名
mv old.txt new.txt
mv file.txt /path/to/

# 删除文件
rm file.txt
rm -rf directory/      # 强制删除目录（危险！）

# 创建目录
mkdir mydir
mkdir -p path/to/nested/dir    # 创建多级目录
```

## 📝 文件查看和编辑

```bash
# 查看文件内容
cat file.txt           # 显示全部内容
less file.txt          # 分页查看（推荐）
head -n 10 file.txt    # 查看前10行
tail -n 20 file.txt    # 查看后20行
tail -f log.txt        # 实时查看日志

# 文件搜索
grep "关键词" file.txt
grep -r "关键词" ./    # 递归搜索目录
grep -i "keyword" *    # 忽略大小写

# 查找文件
find . -name "*.js"
find /path -type f -mtime -7    # 查找7天内修改的文件
```

## 🔧 系统信息

```bash
# 系统信息
uname -a               # 系统信息
df -h                  # 磁盘使用情况
du -sh *               # 当前目录各文件大小
free -h                # 内存使用情况
top                    # 实时进程监控
htop                   # 更友好的进程监控

# 网络
ifconfig               # 网络接口信息
ip addr                # 查看IP地址
ping google.com        # 测试网络连接
netstat -tuln          # 查看端口占用
```

## 🔐 权限管理

```bash
# 修改权限
chmod 755 script.sh    # rwxr-xr-x
chmod +x file.sh       # 添加执行权限
chmod -R 644 dir/      # 递归修改

# 修改所有者
chown user:group file.txt
chown -R user:group dir/

# 查看权限
ls -l file.txt
```

## 📦 压缩和解压

```bash
# tar 归档
tar -czf archive.tar.gz dir/     # 压缩
tar -xzf archive.tar.gz          # 解压
tar -tzf archive.tar.gz          # 查看内容

# zip
zip -r archive.zip dir/
unzip archive.zip
unzip -l archive.zip             # 查看内容
```

## 🔄 进程管理

```bash
# 查看进程
ps aux                 # 所有进程
ps aux | grep node     # 查找特定进程

# 终止进程
kill PID               # 正常终止
kill -9 PID            # 强制终止
killall process_name   # 按名称终止

# 后台运行
command &              # 后台运行
nohup command &        # 后台运行，不受终端关闭影响
```

## 🌐 网络和下载

```bash
# 下载文件
wget https://example.com/file.zip
curl -O https://example.com/file.zip

# SSH 连接
ssh user@hostname
ssh -p 2222 user@hostname    # 指定端口

# 文件传输
scp file.txt user@host:/path/
scp -r dir/ user@host:/path/
```

## 💡 实用技巧

### 管道和重定向

```bash
# 管道
ls -l | grep ".txt"
cat file.txt | wc -l           # 统计行数

# 重定向
command > output.txt           # 覆盖写入
command >> output.txt          # 追加写入
command 2> error.log           # 错误输出
command &> all.log             # 所有输出
```

### 快捷键

- `Ctrl + C`: 终止当前命令
- `Ctrl + Z`: 暂停当前命令
- `Ctrl + D`: 退出当前 shell
- `Ctrl + L`: 清屏
- `Ctrl + R`: 搜索历史命令
- `Ctrl + A`: 光标移到行首
- `Ctrl + E`: 光标移到行尾

### 别名设置

```bash
# 在 ~/.bashrc 或 ~/.zshrc 中添加
alias ll='ls -lah'
alias gs='git status'
alias ..='cd ..'
alias update='sudo apt update && sudo apt upgrade'
```

## 🎯 常用组合命令

```bash
# 查找并删除
find . -name "*.log" -delete

# 批量重命名
for f in *.txt; do mv "$f" "${f%.txt}.md"; done

# 统计代码行数
find . -name "*.js" | xargs wc -l

# 查看最大的文件
du -ah . | sort -rh | head -n 10

# 监控日志
tail -f /var/log/nginx/access.log | grep "ERROR"
```

## 📚 学习资源

- `man command`: 查看命令手册
- `command --help`: 查看帮助信息
- [tldr.sh](https://tldr.sh/): 简化的命令示例
- [explainshell.com](https://explainshell.com/): 命令解释工具

## 总结

掌握这些命令可以大大提高你的工作效率。记住：

1. 多用 `man` 和 `--help` 查看文档
2. 善用 Tab 键自动补全
3. 使用 `history` 查看历史命令
4. 危险命令（如 `rm -rf`）要三思而后行

熟能生巧，多练习就能成为命令行高手！🚀
