## Portlet

A simple jQuery plugin to create the portlet.

## Usage

First include jQuery theme.

```html
<link type="text/css" href="lib/jquery-ui-themes-1.10.3/themes/smoothness/jquery-ui.css" rel="stylesheet" />
<link type="text/css" href="lib/jquery-ui-portlet/themes/base/jquery.ui.portlet.css" rel="stylesheet" />
```

Include jQuery script.

```html
<script type="text/javascript" src="lib/jquery-1.10.2/jquery-1.10.2.js"></script>
<script type="text/javascript" src="lib/jquery-ui-1.10.3/ui/jquery-ui.js"></script>
<script type="text/javascript" src="lib/jquery-ui-portlet/ui/jquery.ui.portlet.js"></script>
<script type="text/javascript" src="lib/jquery-cookie-1.4.0/jquery.cookie.js"></script>
```

Add following to create the portlet.

```javascript
$("#portlet").portlet({ persist: true });
```

Add following for a sample portlet content.

```html
<div id="portlet">
  <div class="ui-portlet-column">
    <div class="ui-portlet">  
      <div class="ui-portlet-header">Feeds</div>  
      <div class="ui-portlet-content">Content</div>  
    </div>  
    <div class="ui-portlet">  
      <div class="ui-portlet-header">News</div>  
      <div class="ui-portlet-content">Content</div>  
    </div>
  </div>  
  <div class="ui-portlet-column">
    <div class="ui-portlet">
      <div class="ui-portlet-header">Shopping</div>  
      <div class="ui-portlet-content">Content</div>  
    </div>
  </div>  
  <div class="ui-portlet-column">
    <div class="ui-portlet">
      <div class="ui-portlet-header">Links</div>
      <div class="ui-portlet-content">Content</div>
    </div>
    <div class="ui-portlet">
       <div class="ui-portlet-header">Images</div>
       <div class="ui-portlet-content">Content</div>
    </div>
  </div> 
```

That's it. Enjoy.

## Authors

[Alex Xia](https://github.com/xiaalex)

