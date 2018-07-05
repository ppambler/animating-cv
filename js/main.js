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
function writeCode(prefix,code,preTag,styleTag,createPaper) {
    let domPreTag = document.querySelector(preTag)
    let domStyleTag = document.querySelector(styleTag)
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPreTag.innerHTML = Prism.highlight(prefix+code.substring(0, n), Prism.languages.css, 'css')
        domStyleTag.innerHTML =prefix+ code.substring(0, n)
        // 拉10000像素的滚动条，拉不动就拉到拉不动位置
        // domPreTag.scrollTop = 10000
        // 换个，换个能拉的最大高度
        domPreTag.scrollTop = domPreTag.scrollHeight
        console.log(`输出了${n}字符`)
        if (n >= result.length) {
            window.clearInterval(id)
            createPaper()
        } 
    }, 10)
}

writeCode('',result,'#code','#styleTag',()=>{
    createPaper(()=>{
        writeCode(result,result2,'#code','#styleTag')
    })
})

var result2 = `#paper {
    width: 100px;
    height: 100px;
    background: red;
}
    `
function createPaper(xxx) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    xxx()
}  

