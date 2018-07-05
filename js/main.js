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

/* 不过在此之前需要给白纸挪个位置 */
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
        if (n >= code.length) {
            window.clearInterval(id)
            createPaper()
        } 
    }, 0)
}

writeCode('',result,'#code','#styleTag',()=>{
    createPaper(()=>{
        writeCode(result,result2,'#code','#styleTag',()=>{
            writeMardown('#paper > .content', md, ()=> {
                alert('谢谢观看！')
            })
        })
    })
})

var result2 = `#code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}

/* 白纸变变变 */
#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    justify-content: center;
    align-item: center;
    padding: 16px;
}
#paper > .content {
    background: white;
    height: 100%;
    width: 100%;
}

#paper{

}
    `
function createPaper(xxx) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    xxx()
}  

var md = `
# 自我介绍

我叫 唐小桃
广东轻工职业技术学院毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉 JavaScript

# 项目介绍

1. 不完全仿苹果轮播
2. 会动的简历
3. 简单的画板

# 练习方式
QQ 1134720895
Email 13790020331@163.com
手机 13790020331
`
function writeMardown(paperSelector,markdown, fn) {
    let domPaper = document.querySelector(paperSelector)
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        console.log(`输出了${n}字符`)
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn()
        } 
    }, 0)
}