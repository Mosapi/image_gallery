# Image Gallery
![ice_screenshot_20220731-210837](https://user-images.githubusercontent.com/22084187/182040252-72cc1bfe-2a28-4509-9689-7b5814333e0f.png)

This is my images gallery for a website in pure javascript, without using third-party plugins.

## How to use:

***1. Place the block for images gallery in the place you need***
```
<div id='gall_cont'></div>
```

***2. Connect the galgam.js before closing the tag <body>***
```
<script src="galgam.js"></script>
</body>
```

***3. Connect the gal.css in the tag <head>***
```
<link rel="stylesheet" type="text/css" media="all"  href="gall.css" />
```

***4. The script works with data selected from the database. We specify them before connecting the script***

```
<script>
// all data select from db (msql or other)
galpics = ["nir1.jpg", "nir2.jpg", "nir3.jpg", "nir4.jpg", "nir5.jpg", "nir6.jpg", "nir7.jpg", "nir8.jpg", "nir9.jpg"];
</script>
```

***5. The general style of the arrows is set by class="arr", the direction is indicated by id="_lefs" - left arrow and id="_rifs" - right arrow***

You can set the number of images displayed on the screen. All other images will be hidden.
```
gg_cols = 4;
```
You can set image folder for gallery images
```
qq_urlt = 'imgs/';
```

***6. For a better idea of how controllers, arrows, and other elements can be positioned, see example***


## Preview
![ice_screenshot_20220731-210852](https://user-images.githubusercontent.com/22084187/182040285-7ddca4fa-1d3a-413f-bce7-79526463fb94.png)
![ice_screenshot_20220731-210914](https://user-images.githubusercontent.com/22084187/182040291-fd004db4-91d1-40c4-b9db-9797564494af.png)


