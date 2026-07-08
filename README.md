# Head First HTML 与 CSS

《Head First HTML and CSS（第2版）》学习笔记与示例代码

> 作者：Elisabeth Robson & Eric T. Freeman
> 出版日期：2012年8月20日

## 学习笔记

| 章节 | 笔记文件 |
|------|---------|
| 第3章 | [第3章：构建模块.md](第3章：构建模块.md) |
| 第5章 | [第5章：为你的页面增加图像.md](第5章：为你的页面增加图像.md) |
| 第13章 | [第13章：表格与更多列表.md](第13章：表格与更多列表.md) |
| 第14章 | [第14章：HTML 表单.md](第14章：HTML 表单.md) |

## 示例代码目录结构

```
Head First HTML 与 CSS/
├── demo/
│   ├── README
│   ├── chapter1/
│   │   └── starbuzz/
│   │       ├── index.html
│   │       └── mission.html
│   ├── chapter2/
│   │   ├── completelounge/
│   │   │   ├── about/
│   │   │   │   └── directions.html
│   │   │   ├── beverages/
│   │   │   │   └── elixir.html
│   │   │   ├── images/
│   │   │   │   ├── blue.jpg
│   │   │   │   ├── drinks.gif
│   │   │   │   ├── green.jpg
│   │   │   │   ├── lightblue.jpg
│   │   │   │   └── red.jpg
│   │   │   └── lounge.html
│   │   └── lounge/
│   │       ├── blue.jpg
│   │       ├── directions.html
│   │       ├── drinks.gif
│   │       ├── elixir.html
│   │       ├── green.jpg
│   │       ├── lightblue.jpg
│   │       ├── lounge.html
│   │       └── red.jpg
│   ├── chapter3/
│   │   └── journal/
│   │       ├── 1.html
│   │       ├── 2.html
│   │       ├── images/
│   │       │   ├── segway1.jpg
│   │       │   └── segway2.jpg
│   │       └── journal.html
│   ├── chapter4/
│   │   ├── buzz/
│   │   │   ├── header.jpg
│   │   │   └── index.html
│   │   ├── starbuzz/
│   │   │   ├── index.html
│   │   │   └── mission.html
│   │   └── starbuzz-complete/
│   │       ├── index.html
│   │       ├── mission.html
│   │       └── test.html
│   ├── chapter5/
│   │   ├── lounge/
│   │   │   ├── about/
│   │   │   │   └── directions.html
│   │   │   ├── beverages/
│   │   │   │   └── elixir.html
│   │   │   ├── images/
│   │   │   │   ├── blue.jpg
│   │   │   │   ├── drinks.gif
│   │   │   │   ├── green.jpg
│   │   │   │   ├── lightblue.jpg
│   │   │   │   └── red.jpg
│   │   │   └── lounge.html
│   │   ├── mypod/
│   │   │   ├── html/
│   │   │   │   ├── applestore.html
│   │   │   │   ├── britain.html
│   │   │   │   ├── seattle_classic.html
│   │   │   │   ├── seattle_shuffle.html
│   │   │   │   └── seattle_video_med.html
│   │   │   ├── index.html
│   │   │   ├── logo/
│   │   │   │   ├── mypod.png
│   │   │   │   └── mypod.psd
│   │   │   ├── photos/
│   │   │   │   ├── applestore.jpg
│   │   │   │   ├── britain.jpg
│   │   │   │   ├── seattle_classic.jpg
│   │   │   │   ├── seattle_classic_large.jpg
│   │   │   │   ├── seattle_downtown.jpg
│   │   │   │   ├── seattle_medium.jpg
│   │   │   │   ├── seattle_shuffle.jpg
│   │   │   │   ├── seattle_video.jpg
│   │   │   │   └── seattle_video_med.jpg
│   │   │   └── thumbnails/
│   │   │       ├── applestore.jpg
│   │   │       ├── britain.jpg
│   │   │       ├── seattle_classic.jpg
│   │   │       ├── seattle_downtown.jpg
│   │   │       ├── seattle_shuffle.jpg
│   │   │       └── seattle_video_med.jpg
│   │   ├── mypod-complete/
│   │   │   ├── html/
│   │   │   │   ├── applestore.html
│   │   │   │   ├── britain.html
│   │   │   │   ├── seattle_classic.html
│   │   │   │   ├── seattle_shuffle.html
│   │   │   │   └── seattle_video_med.html
│   │   │   ├── index.html
│   │   │   ├── index_bak.html
│   │   │   ├── index_thumbs.html
│   │   │   ├── logo/
│   │   │   │   ├── mypod.png
│   │   │   │   └── mypod.psd
│   │   │   ├── photos/
│   │   │   │   ├── applestore.jpg
│   │   │   │   ├── britain.jpg
│   │   │   │   ├── seattle_classic.jpg
│   │   │   │   ├── seattle_classic_large.jpg
│   │   │   │   ├── seattle_downtown.jpg
│   │   │   │   ├── seattle_medium.jpg
│   │   │   │   ├── seattle_shuffle.jpg
│   │   │   │   ├── seattle_video.jpg
│   │   │   │   └── seattle_video_med.jpg
│   │   │   └── thumbnails/
│   │   │       ├── applestore.jpg
│   │   │       ├── britain.jpg
│   │   │       ├── seattle_classic.jpg
│   │   │       ├── seattle_downtown.jpg
│   │   │       ├── seattle_shuffle.jpg
│   │   │       └── seattle_video_med.jpg
│   │   ├── testimage/
│   │   │   └── eye.jpg
│   │   └── trivia/
│   │       ├── pencil.png
│   │       └── trivia.html
│   ├── chapter6/
│   │   ├── about/
│   │   │   └── directions.html
│   │   ├── beverages/
│   │   │   └── elixir.html
│   │   ├── images/
│   │   │   ├── blue.jpg
│   │   │   ├── drinks.gif
│   │   │   ├── green.jpg
│   │   │   ├── lightblue.jpg
│   │   │   └── red.jpg
│   │   ├── lounge.html
│   │   └── lounge-complete.html
│   ├── chapter7/
│   │   ├── about/
│   │   │   └── directions.html
│   │   ├── beverages/
│   │   │   └── elixir.html
│   │   ├── images/
│   │   │   ├── blue.jpg
│   │   │   ├── drinks.gif
│   │   │   ├── green.jpg
│   │   │   ├── lightblue.jpg
│   │   │   └── red.jpg
│   │   ├── lounge.css
│   │   ├── lounge.html
│   │   └── lounge-complete.html
│   ├── chapter8/
│   │   └── journal/
│   │       ├── EmblemaOne-Regular.eot
│   │       ├── EmblemaOne-Regular.svg
│   │       ├── EmblemaOne-Regular.ttf
│   │       ├── EmblemaOne-Regular.woff
│   │       ├── images/
│   │       │   ├── segway1.jpg
│   │       │   └── segway2.jpg
│   │       ├── journal.css
│   │       └── journal.html
│   ├── chapter9/
│   │   ├── lounge/
│   │   │   ├── about/
│   │   │   │   └── directions.html
│   │   │   ├── beverages/
│   │   │   │   └── elixir.html
│   │   │   ├── images/
│   │   │   │   ├── background.gif
│   │   │   │   ├── black.gif
│   │   │   │   ├── blue.gif
│   │   │   │   ├── blue.jpg
│   │   │   │   ├── chai.gif
│   │   │   │   ├── cocktail.gif
│   │   │   │   ├── drinks.gif
│   │   │   │   ├── green.gif
│   │   │   │   ├── green.jpg
│   │   │   │   ├── lightblue.gif
│   │   │   │   ├── lightblue.jpg
│   │   │   │   ├── logo.gif
│   │   │   │   ├── red.gif
│   │   │   │   ├── red.jpg
│   │   │   │   └── yellow.gif
│   │   │   ├── lounge.html
│   │   │   ├── lounge-mobile.css
│   │   │   └── lounge-print.css
│   │   └── lounge-complete/
│   │       ├── about/
│   │       │   └── directions.html
│   │       ├── beverages/
│   │       │   └── elixir.html
│   │       ├── images/
│   │       │   ├── background.gif
│   │       │   ├── black.gif
│   │       │   ├── blue.gif
│   │       │   ├── blue.jpg
│   │       │   ├── chai.gif
│   │       │   ├── cocktail.gif
│   │       │   ├── drinks.gif
│   │       │   ├── green.gif
│   │       │   ├── green.jpg
│   │       │   ├── lightblue.gif
│   │       │   ├── lightblue.jpg
│   │       │   ├── logo.gif
│   │       │   ├── red.gif
│   │       │   ├── red.jpg
│   │       │   └── yellow.gif
│   │       ├── lounge.css
│   │       ├── lounge.html
│   │       ├── lounge-mediaquery.css
│   │       ├── lounge-mediaquery.html
│   │       ├── lounge-mobile.css
│   │       └── lounge-print.css
│   ├── chapter10/
│   │   ├── lounge/
│   │   │   ├── about/
│   │   │   │   └── directions.html
│   │   │   ├── beverages/
│   │   │   │   └── elixir.html
│   │   │   ├── images/
│   │   │   │   ├── background.gif
│   │   │   │   ├── black.gif
│   │   │   │   ├── blue.gif
│   │   │   │   ├── blue.jpg
│   │   │   │   ├── chai.gif
│   │   │   │   ├── cocktail.gif
│   │   │   │   ├── drinks.gif
│   │   │   │   ├── green.gif
│   │   │   │   ├── green.jpg
│   │   │   │   ├── lightblue.gif
│   │   │   │   ├── lightblue.jpg
│   │   │   │   ├── logo.gif
│   │   │   │   ├── red.gif
│   │   │   │   ├── red.jpg
│   │   │   │   └── yellow.gif
│   │   │   ├── lounge.css
│   │   │   ├── lounge.html
│   │   │   └── print/
│   │   │       └── print.css
│   │   └── lounge-complete/
│   │       ├── about/
│   │       │   └── directions.html
│   │       ├── beverages/
│   │       │   └── elixir.html
│   │       ├── images/
│   │       │   ├── background.gif
│   │       │   ├── black.gif
│   │       │   ├── blue.gif
│   │       │   ├── blue.jpg
│   │       │   ├── chai.gif
│   │       │   ├── cocktail.gif
│   │       │   ├── drinks.gif
│   │       │   ├── green.gif
│   │       │   ├── green.jpg
│   │       │   ├── lightblue.gif
│   │       │   ├── lightblue.jpg
│   │       │   ├── logo.gif
│   │       │   ├── red.gif
│   │       │   ├── red.jpg
│   │       │   └── yellow.gif
│   │       ├── lounge.css
│   │       └── lounge.html
│   ├── chapter11/
│   │   ├── absolute/
│   │   │   ├── images/
│   │   │   │   ├── award.gif
│   │   │   │   ├── background.gif
│   │   │   │   ├── background2.gif
│   │   │   │   ├── bag.gif
│   │   │   │   ├── cardboard_bg.jpg
│   │   │   │   ├── coupon.gif
│   │   │   │   ├── final.jpeg
│   │   │   │   ├── header.gif
│   │   │   │   ├── headerlogo.gif
│   │   │   │   ├── headerlogo2.gif
│   │   │   │   └── ticket.gif
│   │   │   ├── index.html
│   │   │   └── starbuzz.css
│   │   ├── lounge/
│   │   │   ├── about/
│   │   │   │   └── directions.html
│   │   │   ├── beverages/
│   │   │   │   └── elixir.html
│   │   │   ├── images/
│   │   │   │   ├── background.gif
│   │   │   │   ├── black.gif
│   │   │   │   ├── blue.gif
│   │   │   │   ├── blue.jpg
│   │   │   │   ├── chai.gif
│   │   │   │   ├── cocktail.gif
│   │   │   │   ├── drinks.gif
│   │   │   │   ├── green.gif
│   │   │   │   ├── green.jpg
│   │   │   │   ├── lightblue.gif
│   │   │   │   ├── lightblue.jpg
│   │   │   │   ├── logo.gif
│   │   │   │   ├── red.gif
│   │   │   │   ├── red.jpg
│   │   │   │   └── yellow.gif
│   │   │   ├── lounge.css
│   │   │   └── lounge.html
│   │   ├── starbuzz/
│   │   │   ├── freecoffee.html
│   │   │   ├── images/
│   │   │   │   ├── award.gif
│   │   │   │   ├── background.gif
│   │   │   │   ├── bag.gif
│   │   │   │   ├── coupon.gif
│   │   │   │   ├── header.gif
│   │   │   │   └── ticket.gif
│   │   │   ├── index.html
│   │   │   └── starbuzz.css
│   │   ├── starbuzz-complete/
│   │   │   ├── freecoffee.html
│   │   │   ├── images/
│   │   │   │   ├── award.gif
│   │   │   │   ├── background.gif
│   │   │   │   ├── bag.gif
│   │   │   │   ├── header.gif
│   │   │   │   ├── headerLogo.gif
│   │   │   │   ├── headerSlogan.gif
│   │   │   │   └── ticket.gif
│   │   │   ├── index.html
│   │   │   └── starbuzz.css
│   │   └── tabledisplay/
│   │       ├── freecoffee.html
│   │       ├── images/
│   │       │   ├── award.gif
│   │       │   ├── background.gif
│   │       │   ├── background2.gif
│   │       │   ├── bag.gif
│   │       │   ├── cardboard_bg.jpg
│   │       │   ├── coupon.gif
│   │       │   ├── final.jpeg
│   │       │   ├── header.gif
│   │       │   ├── headerlogo.gif
│   │       │   ├── headerlogo2.gif
│   │       │   └── ticket.gif
│   │       ├── index.html
│   │       └── starbuzz.css
│   ├── chapter12/
│   │   └── starbuzz/
│   │       ├── blog-complete.html
│   │       ├── blog.html
│   │       ├── images/
│   │       │   ├── award.gif
│   │       │   ├── background.gif
│   │       │   ├── background2.gif
│   │       │   ├── bag.gif
│   │       │   ├── cardboard_bg.jpg
│   │       │   ├── coupon.gif
│   │       │   ├── final.jpeg
│   │       │   ├── header.gif
│   │       │   ├── headerLogo.gif
│   │       │   ├── headerSlogan.gif
│   │       │   ├── headerlogo2.gif
│   │       │   ├── poster.png
│   │       │   └── ticket.gif
│   │       ├── index.html
│   │       ├── starbuzz.css
│   │       └── video/
│   │           ├── tweetsip.mp4
│   │           ├── tweetsip.ogv
│   │           └── tweetsip.webm
│   ├── chapter13/
│   │   ├── journal/
│   │   │   ├── EmblemaOne-Regular.eot
│   │   │   ├── EmblemaOne-Regular.svg
│   │   │   ├── EmblemaOne-Regular.ttf
│   │   │   ├── EmblemaOne-Regular.woff
│   │   │   ├── images/
│   │   │   │   ├── backpack.gif
│   │   │   │   ├── segway1.jpg
│   │   │   │   └── segway2.jpg
│   │   │   ├── journal.css
│   │   │   ├── journal.html
│   │   │   └── table.html
│   │   └── journal-complete/
│   │       ├── EmblemaOne-Regular.eot
│   │       ├── EmblemaOne-Regular.svg
│   │       ├── EmblemaOne-Regular.ttf
│   │       ├── EmblemaOne-Regular.woff
│   │       ├── images/
│   │       │   ├── backpack.gif
│   │       │   ├── segway1.jpg
│   │       │   └── segway2.jpg
│   │       ├── journal.css
│   │       ├── journal.html
│   │       └── table.html
│   ├── chapter14/
│   │   ├── contest/
│   │   │   ├── contest.php
│   │   │   └── form.html
│   │   └── starbuzz/
│   │       ├── .formtypes.html.swp
│   │       ├── accessform.css
│   │       ├── accessform.html
│   │       ├── blog.html
│   │       ├── form-complete.html
│   │       ├── form.html
│   │       ├── images/
│   │       │   ├── award.gif
│   │       │   ├── background.gif
│   │       │   ├── background2.gif
│   │       │   ├── bag.gif
│   │       │   ├── cardboard_bg.jpg
│   │       │   ├── coupon.gif
│   │       │   ├── final.jpeg
│   │       │   ├── header.gif
│   │       │   ├── headerLogo.gif
│   │       │   ├── headerSlogan.gif
│   │       │   ├── headerlogo2.gif
│   │       │   └── ticket.gif
│   │       ├── index.html
│   │       ├── starbuzz.css
│   │       ├── styledform.css
│   │       └── styledform.html
│   └── chapter15/
│       └── transform.html
├── 第3章：构建模块.md
├── 第5章：为你的页面增加图像.md
├── 第13章：表格与更多列表.md
└── 第14章：HTML 表单.md
```

## 章节内容说明

| 章节 | 主题 | 主要示例 |
|------|------|---------|
| 第1章 | Web 语言 | Starbuzz Coffee 入门页面 |
| 第2章 | 认识 HTML 元素 | Head First 休闲室 |
| 第3章 | 构建模块 | Tony 的 Segway 旅行日记 |
| 第4章 | 链接 | Starbuzz Coffee 网站链接 |
| 第5章 | 为页面增加图像 | mypod 照片展示 |
| 第6章 | 标准 HTML | 休闲室完整版 |
| 第7章 | CSS 入门 | 休闲室样式表 |
| 第8章 | CSS 字体与文本 | 旅行日记字体应用 |
| 第9章 | 盒模型 | 休闲室盒模型布局 |
| 第10章 | div 与布局 | 休闲室 div 布局 + 打印样式 |
| 第11章 | 布局与定位 | Starbuzz 绝对定位与表格显示 |
| 第12章 | HTML5 媒体 | Starbuzz 博客与视频 |
| 第13章 | 表格与更多列表 | 旅行日记表格 |
| 第14章 | HTML 表单 | Starbuzz 表单与竞赛表单 |
| 第15章 | CSS 变换 | transform 变换示例 |
