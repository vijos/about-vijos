---
order: 0
title: 评测环境及编译器解释器参数
---

# 评测环境

操作系统：Ubuntu 16.04

注意，用户代码运行在一个沙盒中，因此您没有权限进行绝大多数系统调用。

# 编译器解释器版本和参数

各个语言采用的是 [debian:testing](https://wiki.debian.org/DebianTesting) 分支下的最新版编译器解释器。您可以查看 Vijos 的[版本配置](https://github.com/vijos/jd4/blob/master/Dockerfile) 和 [运行配置](https://github.com/vijos/jd4/blob/master/examples/langs.yaml)，或点击下方链接查看相应语言采用的编译器或解释器当前具体版本号。

| 语言名称 | Debian 包名称 | 编译或运行参数 |
|---------|--------------|------------ |
| Free Pascal | [fp-compiler](https://packages.debian.org/testing/devel/fp-compiler) | `fpc -O2 -o/out/foo /in/foo.pas` |
| C | [gcc](https://packages.debian.org/testing/devel/gcc) | `gcc -O2 -Wall -std=c99 -o /out/foo /in/foo.c -lm` |
| C++ | [g++](https://packages.debian.org/testing/devel/g++) | `g++ -O2 -Wall -std=c++11 -o /out/foo /in/foo.cc -lm` |
| Java | [openjdk-8-jdk-headless](https://packages.debian.org/testing/devel/openjdk-8-jdk-headless) | `javac -d /out -encoding utf8 /in/Main.java` |
| Python | [python](https://packages.debian.org/testing/devel/python) | `python foo.py` |
| Python 3 | [python3](https://packages.debian.org/testing/devel/python3) | `python3 foo.py` |
| PHP | [php7.0-cli](https://packages.debian.org/testing/devel/php7.0-cli) | `php foo.php` |
| Rust | [rustc](https://packages.debian.org/testing/devel/rustc) | `rustc -O -o /out/foo /in/foo.rs` |
| Haskell | [ghc](https://packages.debian.org/testing/devel/ghc) | `ghc -O -outputdir /tmp -o /out/foo /in/foo.hs` |
| JavaScript | [libjavascriptcoregtk-4.0-bin](https://packages.debian.org/testing/devel/libjavascriptcoregtk-4.0-bin) | `jsc foo.js` |
| Golang | [golang](https://packages.debian.org/testing/devel/golang) | `go build -o /out/foo /in/foo.go` |
