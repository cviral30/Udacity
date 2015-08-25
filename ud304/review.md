# Review

# Score : 6 / 10 

> You could have got 7 but you did not follow project structure as discussed. You did not take into account scalability of your work. You should have put your work in a folder with assignment name / code. 

## HTML
- Use double quotes for HTML attributes 
  - `<link href='http://fonts.googleapis.com/css?family=Lato:100,400' rel='stylesheet' type='text/css'>` should be `<link href="http://fonts.googleapis.com/css?family=Lato:100,400" rel="stylesheet" type="text/css">`
- URLs should always be links. 
  - Eg. `<p>https://github.com/udacity/appify</p>` should be `<p><a href="https://github.com/udacity/appify" target="_blank">https://github.com/udacity/appify</a></p>`
- External links should always have `targer="_blank"` attribute defined.

## CSS
- Always leave a space before opening bracket of the selector rules
- Avoid giving height to an image
  - Eg. You could have avoided height in
    ```
    .image-length {
        width: 100%;
        height: 400px;
    }
    ```
- Understand the difference between `col-md-*` & `col-sm-*`.
- Keep class names semantic. `image-length` does not make sense, could have used `responsive-img` instead. 
- Try to reuse classes. Do not define multiple classes with same rules.
  - Eg. `.image-length` & `.image-height` could have been the same class
    ```
    .responsive-img {
        width: 100%;
        max-height: auto;
    }
    ```

