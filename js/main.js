var result = `/*
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

* {
    transition: all 1s;
}
body {
    background: rgb(222,222,222);
    font-size: 16px;
}
#code {
    border: 1px solid red;
    padding: 16px; 
}

/* 我需要一点代码高亮 */
.token.selector {
    color: #690;
}
.token.punctuation {
    color: #999;
}
.token.property {
    color: #905;
}
.token.function {
    color: #DD4A68;
}

/* 加点3D效果 */
#code {
    transform: rotate(360deg);
}

/* 不玩了，我来介绍一下我自己吧 */
/* 我需要一张白纸 */
`
// 把code写到#code和style标签里去
function writeCode(code,preTag,styleTag,createPaper) {
    let domPreTag = document.querySelector(preTag)
    let domStyleTag = document.querySelector(styleTag)
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPreTag.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css, 'css')
        domStyleTag.innerHTML = code.substring(0, n)
        console.log(`输出了${n}字符`)
        if (n >= result.length) {
            window.clearInterval(id)
            createPaper()
        }
    }, 10)
}

writeCode(result,'#code','#styleTag',createPaper)

function createPaper() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult) {
    var result = `#paper {
    width: 100px;
    height: 100px;
    background: red;
}
    `
    var n = 0
    var id = setInterval(() => {
        n += 1
        // 加上之前的结果很是关键，有个疑问？？每次都得刷新一大段文本？？
        // 没有吧？我的肉眼没有看到颜色一瞬间的变化
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
        styleTag.innerHTML += result.substring(n-1, n)
        console.log(`第${n}轮`)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 10)
}