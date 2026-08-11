# src 与 href 的区别

## 一、核心定义

| 属性 | 全称 | 含义 | 是否阻塞 | 典型标签 |
| --- | --- | --- | --- | --- |
| **src** | Source | 引入并**替换**当前元素的内容（资源会被下载、执行/渲染到文档中） | 会阻塞，下载并执行完才继续解析 HTML | `<script>`、`<img>`、`<iframe>`、`<video>`、`<audio>`、`<source>` |
| **href** | Hypertext Reference | 建立当前文档与外部资源的**链接关系**（指向一个地址，而不替换当前元素） | 不阻塞，并行下载 | `<a>`、`<link>`、`<area>` |

## 二、执行机制差异

### 1. src（阻塞式加载）
- 浏览器遇到 `src` 会**暂停 HTML 解析**，先下载资源。
- 对 `<script>` 还会**执行**完毕后才继续解析后续 HTML。
- 适用于「资源必须嵌入到文档中」的场景。

```html
<script src="app.js"></script>      <!-- 下载并执行 -->
<img src="logo.png" alt="logo" />    <!-- 下载并渲染 -->
<iframe src="page.html"></iframe>   <!-- 下载并嵌入 -->
```

### 2. href（链接式引用）
- 浏览器遇到 `href` **不会暂停解析**，资源会被**并行下载**。
- `<link rel="stylesheet" href="x.css">`：CSS 并行下载，但会**阻塞渲染**（不阻塞 DOM 解析）。
- `<a href="...">`：仅声明地址，直到**用户点击**才发起请求。

```html
<a href="https://example.com">跳转</a>
<link rel="stylesheet" href="style.css" />
```

## 三、完整对比表

| 对比项 | src | href |
| --- | --- | --- |
| 语义 | 嵌入资源 | 链接资源 |
| 是否下载 | 会下载并嵌入文档 | 视情况（link 会下载，a 点击才下载） |
| 是否阻塞解析 | 是 | 否 |
| 是否阻塞渲染 | 视资源（script 会） | link[stylesheet] 会 |
| 典型用法 | script / img / iframe | a / link / area |

## 四、记忆口诀

> **src = 资源进入页面**（要下载并执行/渲染）
> **href = 链接指向外面**（只是一个地址引用）

## 五、性能优化提示

- `<script src>` 会阻塞解析，可放到 `</body>` 前，或加 `defer` / `async`：
  - `defer`：延迟到 DOM 解析完成后、DOMContentLoaded 前执行，保持顺序。
  - `async`：下载不阻塞，下载完立即执行，执行顺序不确定。
- `<link href>` 虽然 CSS 不阻塞解析，但会**阻塞渲染**，关键 CSS 应放 `<head>`，非关键 CSS 可异步加载。

```html
<script defer src="main.js"></script>
<script async src="ads.js"></script>
```

## 六、一句话总结

**src 把资源「拉进来」并替换当前元素，会阻塞；href 把页面「指过去」建立链接关系，不阻塞。**