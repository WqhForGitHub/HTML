```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Enter the Contest</title>
  </head>
  <body>
      <form action="http://wickedlysmart.com/hfhtmlcss/contest.php" method="POST">
          <p>Just type in your name（and click Submit）to enter the contest: <br>
              First name: <input type="text" name="firstname" value=""><br>
              Last name: <input type="text" name="lastname" value=""><br>
              <input type="submit>"
          </p>
      </form>
  </body>
</html>                                                     
```





## styledform.html

```html
<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>The Starbuzz Bean Machine</title>
	<link rel="stylesheet" href="starbuzz.css">
	<link rel="stylesheet" href="styledform.css">
</head>

<body>
    <h1>The Starbuzz Bean Machine</h1>
    <h2>Fill out the form below and click "order now" to order</h2>
    
    <form action="http://www.starbuzzcoffee.com/processorder.php" method="post">
        <div class="tableRow">
            <p>
                Choose your beans:
            </p>
            <p>
                <select name="beans">
                    <option value="House Blend">House Blend</option>
                    <option value="Bolivia">Shade Grown Bolivia Supremo</option>
                    <option value="Guatemala">Organic Guatemala</option>
                    <option value="Kenya">Kenya</option>
                </select>
            </p>
        </div>
        
        <div class="tableRow">
            <p>Type: </p>
            <p>
                <input type="radio" name="beantype" value="whole"> Whole bean <br>
                <input type="radio" name="beantype" value="ground" checked>
                Ground
            </p>
        </div>
        
        <div class="tableRow">
            <p>Number of bags: </p>
            <p> <input type="number" name="bags" min="1" max="10"></p>
        </div>
        
        <div class="tableRow label">
            <p> Must arrive by date: </p>
            <p> <input type="date" name="date"> </p>
        </div>
        
        <div class="tableRow">
            <p> Extras: </p>
            <p>
                <input type="checkbox" name="extras[]" value="giftwrap"> Gift wrap <br>
                <input type="checkbox" name="extras[]" value="catalog" checked>
                Include catalog with order
            </p>
        </div>
        
        <div class="tableRow">
            <p class="heading"> Ship to </p>
        </div>
        
        <div class="tableRow">
            <p> Name: </p>
            <p>
              <input type="text" name="name" value="" placeholder="Buckaroo Banzai" required >
            </p>
        </div>
    </form>
</body>

</html>
```

