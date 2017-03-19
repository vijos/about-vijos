---
title: 安装 Vijos
description: 从源码安装部署 Vijos 的系统要求、目录结构、步骤等
---

# 前言

Vijos 由两部分组成：[Web 服务端](https://github.com/vijos/vj4) 和 [评测机](https://github.com/vijos/jd4)。本文将完整地介绍从源码部署安装 Vijos 服务端和评测机的步骤。

- 服务端和评测机不推荐运行在同一系统中，这会降低评测结果的准确度并且可能有潜在的安全问题。

- 服务端能运行在 Windows、Linux、MacOS 操作系统中，但我们推荐使用 Linux 操作系统。

- 评测机能安全地运行在 Windows 和 Linux 操作系统中，但我们推荐使用 Linux 操作系统。

- 可以将评测机部署在多个系统中，这将横向地扩展评测能力。

- 服务端需要部署在用户能网络访问到的环境中。评测机需要能访问到服务端，但用户不需要能访问到评测机。

  > 一个典型的场景是，服务端拥有一个公网 IP 可以被用户访问，而评测机位于 NAT 后端，能访问到服务端但不需要有公网 IP。

# 服务端安装部署

我们推荐使用 Ubuntu 16.04 (Xenial) 作为 Web 服务端的操作系统。

## 1. 安装 Vijos 所需依赖

Vijos 依赖于以下软件工作：

- [Python 3.5+](https://www.python.org/downloads/)
- [MongoDB 3.0+](https://docs.mongodb.com/manual/installation/)
- [Node.js 6.0+](https://nodejs.org/en/download/)
- [RabbitMQ](http://www.rabbitmq.com/)

本章将按照不同操作系统给出使用包管理工具的安装依赖软件的步骤。

### 1.1 对于 Debian 和 Ubuntu 系统

TODO

### 1.2 对于 RHEL, Fedora 和 CentOS 系统

TODO

### 1.3 对于 MacOS 系统

> 以下部署基于 [Homebrew](https://brew.sh/) 包管理器，请在继续前先确保已安装 Homebrew。

```bash
brew install python3 rabbitmq mongodb node
```

### 1.4 对于 Windows 系统

请分别访问这些软件的官方网站下载安装包。

## 2. 下载 Vijos 服务端源码

您可以使用 git 方式下载 [Vijos 服务端](https://github.com/vijos/vj4) 源码，或直接在 GitHub 网页中点击 Download 按钮下载。

对于 git 方式：

```bash
git clone https://github.com/vijos/vj4
```

## 3. 安装 Python 依赖包

```bash
# 在 vj4 目录下:
python3 -m pip install -r requirements.txt
```

## 4. 安装 npm 依赖包

```bash
# 在 vj4 目录下:
npm install
```

## 5. 下载 IP 地址数据库 (可选)

Vijos 使用 [MaxMind GeoLite City DB](http://dev.maxmind.com/geoip/geoip2/geolite2/) 数据库显示 IP 地址位置，这个数据库没有内置在源码中，若您要使用这个功能需要单独下载数据库：

```bash
# 在 vj4 目录下:
curl "http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz" | gunzip -c > GeoLite2-City.mmdb
```

## 6. 编译生成前端代码

```bash
# 在 vj4 目录下:
npm run build
```

至此，您已安装完毕，接下来可以启动 Vijos 服务端（运行在 8888 端口）：

```bash
# 在 vj4 目录下:
python3 -m vj4.server --debug --listen http://0.0.0.0:8888
```


# 评测机的安装部署

TODO
