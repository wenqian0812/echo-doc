```javascript
const imageUrl = 'xxxx.png'
const imageObj = new Image()
image.src = imageUrl
imageUrl.onload = () => {
    const newUrl = cropperImage(imageObj, 0, 0, 200, 200, 1)
    image.src = newUrl
}

/**
 * 截取图片代码 返回一个新的base64对象
 * @param startX
 * @param startY
 * @param width
 * @param height
 * @param radio
 */
export function cropperImage(imgObj, startX, startY, width, height, ratio = 1) {
    const tnCanvas = document.createElement('canvas');
    const tnCanvasContext = tnCanvas.getContext('2d');
    tnCanvas.width = width;
    tnCanvas.height = height;

    const bufferCanvas = document.createElement('canvas');
    const bufferContext = bufferCanvas.getContext('2d');
    bufferCanvas.width = imgObj.width;
    bufferCanvas.height = imgObj.height;
    bufferContext.drawImage(imgObj, 0, 0);

    tnCanvasContext.drawImage(bufferCanvas, startX, startY, width * ratio, height * ratio, 0, 0, width, height);
    return tnCanvas.toDataURL();
}

```
