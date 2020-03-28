# Scroll Indicator

Scroll Indicator : 페이지가 얼마나 스크롤 되었는지를 보여주는 진행 표시줄입니다.

![scroll indicator image](./imgs/scroll-indicator.gif "Scroll Indicator" )

---
### 1. HTML
- 페이지 스크롤에 대한 진행 표시줄 표시를 위한 div 태그

```
    <div class="progress-container">
        <div class="progress-bar" id="headerBar"></div>
    </div>
```

### 2. CSS
- 페이지 스크롤에 대한 진행 표시줄 표시를 위한 CSS

```
    .header {
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        background-color: #f1f1f1;
    }

    .header > h2 {
        padding: 10px 10%;
    }
    
    section > p, h3 {
        padding: 10px 10%;
    }


    .progress-bar {
        height: 8px;
        background: #4caf50;
        width: 0%;
    }

    .progress-container {
        width: 100%;
        height: 8px;
        background: #ccc;
    }
```

### 3. Javascript

```
    <script type="text/javascript">
        window.onscroll = function () {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("headerBar").style.width = scrolled + "%";
        };
    </script>
```

- 사용 속성 설명
 1. Element.scrollTop : 해당 요소의 수직으로 스크롤 된 픽셀 수를 가져오거나 설정합니다.

 1. Element.scrollHeight : padding 값 + 보이지 않는 내용까지 포함한 높이 값의 픽셀 수. 읽기 전용 속성으로 수직 스크롤바가 있는 엘리먼트(element)의 CSS 높이를 초과하여, 보이지 않는 부분까지 포함한 내용(content)의 높이(height)를 픽셀로 반환합니다.

 1. Element.clientHeight : CSS height 값 + CSS padding 값 - 수평 스크롤바 높이 값. 읽기 전용 속성으로 엘리먼트의 내부 높이를 픽셀로 반환합니다. 이 내부 높이라는 것은 내부 여백(padding)을 포함하지만, 수평 스크롤바의 높이, 경계선, 또는 외부 여백(margin)은 포함하지 않습니다.
  
 > 수직 스크롤 된 픽셀 수 = Element.scrollHeight - Element.clientHeight​

