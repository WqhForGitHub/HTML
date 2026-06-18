# 你写的 HTML 代码

用 HTML 创建表单并没有太过神秘的地方。实际上，你会在这一章中认识很多新的 HTML 元素，它们可以一起协作共同创建表单。要想了解表单，最好的办法就是来看一些 HTML，然后尝试一下。请看下面这个表单：
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Enter the Content</title>
	</head>
	
	<body>
		<form action="http://wickedlysmart.com/hfhtmlcss/contest.php" method="POST">
			<p>
				Just type in your name (and click submit)to enter the contest: <br>
				
				First name: <input type="text" name="firstname" value=""> <br>
				Last name: <input type="text" name="lastname" value=""> <br>
				<input type="submit">
			</p>
		</form>
	</body>
</html>
```
# 表单里可以有什么？

几乎任何元素都可以放在表单中，不过这不是我们关心的问题，现在我们只对在浏览器中创建控件的表单元素感兴趣。下面简要介绍各种常用的表单元素。先从 `<input>` 表单元素开始，它在表单世界里扮演着很多角色。
## 文本输入

```html
<input type="text" name="fullname">
```
## 提交输入

```html
<input type="submit">
```
## 单选钮输入

```html
<input type="radio" name="hotornot" value="hot">
<input type="radio" name="hotornot" value="not">
```
## 复选框输入

```html
<input type="checkbox" name="spice" value="Salt">
<input type="checkbox" name="spice" value="Pepper">
<input type="checkbox" name="spice" value="Garlic">
```
# 表单里可以有什么（第 2 部分）

嗯，没错，并不是所有表单元素都是 `<input>` 元素。还有很多其他的元素，比如用于菜单的 `<select>`，用于输入多行文本的 `<textarea>`。所以，在继续学习后面的内容之前，何不先来熟悉这些元素？噢，顺便说一句，一旦认识了这些元素，你就差不多掌握了 90% 的表单元素（甚至是 99% 的常用表单元素）。
## 文本区
```html
<textarea name="comments" rows="10" cols="48"></textarea>
```
## select
```html
<select name="characters">
	<option value="Buckaroo">Buckaroo Banzai</option>
	<option value="Tommy">Perfect Tommy</option>
	<option value="Penny">Penny Jersey</option>
	<option value="Jersey">New Jersey</option>
	<option value="John">John Parker</option>
</select>
```
## option
```html
<select name="characters">
	<option value="Buckaroo">Buckaroo Banzai</option>
	<option value="Tommy">Perfect Tommy</option>
	<option value="Penny">Penny Priddy</option>
	<option value="Jersey">New Jersey</option>
	<option value="John">John Parker</option>
</select>
```
# 哇，还有更多元素可以放在表单里

哈，没错，可不能忘了那些新元素。利用 HTML5，我们可以得到更专用的输入表单。下面来看一下：
## 数字输入

```html
<input type="number" min="0" max="20">
```

## 范围输入

```html
<input type="range" min="0" max="20" step="5">
```

## 颜色输入

```html
<input type="color">
```

## 日期输入

```html
<input type="date">
```

## email 输入

```html
<input type="email">
```

## tel 输入

```html
<input type="tel">
```

## url 输入

```html
<input type="url">
```
# 将这些 `<input>` 元素放在 HTML 中

现在要把这些 `<input>` 元素放在表单中。查看下面增加的元素，然后在你的 form.html 文件中完成修改。
```html
<form action="http://starbuzzcoffee.com/processorder.php" method="POST">
	<p>
		Ship to: <br>
		Name: <input type="text" name="name"> <br>
		Address: <input type="text" name="address"> <br>
		City: <input type="text" name="city"> <br>
		State: <input type="text" name="state"> <br>
		Zip: <input type="text" name="zip"> <br>
		Phone: <input type="tel" name="phone"> <br>
	</p>
	<p>
		<input type="submit" value="Order Now">
	</p>
</form>
```
# 增加 `<select>` 元素

```html
<form action="http://starbuzzcoffee.com/processorder.php" method="post">
	<p>
		Choose your beans:
		<select name="beans">
			<option value="House Blend">House Blend</option>
			<option value="Bolivia">Shade Grown Bolivia Supremo</option>
			<option value="Guatemala">Organic Guatemala</option>
			<option value="Kenya">Kenya</option>
		</select>
	</p>
	
	<p>
		Ship to: <br>
		Name: <input type="text" name="name" value=""> <br>
		Address: <input type="text" name="address" value=""> <br>
		City: <input type="text" name="city" value=""> <br>
		State: <input type="text" name="state" value=""> <br>
		Zip: <input type="text" name="zip" value=""> <br>
		Phone: <input type="tel" name="phone" value=""> <br>
	</p>
	<p>
		<input type="submit" value="Order Now">
	</p>
</form>
```

