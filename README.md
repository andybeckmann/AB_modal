AB_modal
==========

AB_modal is annoying. Don't use it.

## Screenshot
![Screenshot](/screenshot.png?raw=true)

## Required files

### Styles
[AB_signup/scss/components/_AB_signup.scss](https://github.com/andybeckmann/AB_signup/blob/master/scss/components/_AB_signup.scss)

### Scripts
[AB_signup/js/AB_signup.js](https://github.com/andybeckmann/AB_signup/blob/master/js/AB_signup.js)

## Example

### HTML
```html
<div class="modal" id="modal">
    <div class="modal--overlay"></div>
    <div class="signup">
        <div class="signup--image">
        </div>
        <div class="signup--content">
            <button class="close" id="modal--close">+</button>
            <h1>Sign up</h1>
            <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do elusmod!</p>
            <div class="signup--content-form">
                <form>
                    <input class="signup--content-form-email"type="text" placeholder="account@domain.com" />
                    <input class="signup--content-form-submit"type="submit" value="SUBMIT" />
                    <p>* Terms, conditions or clarifications</p>
                </form>
            </div>
        </div>
    </div>
</div>
```

### JavaScript
```javascript
modal();
```