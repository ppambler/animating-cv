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
}
#code {
    border: 1px solid #444;
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
    console.log(n)
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
    }, 70)
}

writeCode('',result,'#code','#styleTag',()=>{
    createPaper(()=>{
        writeCode(result,result2,'#code','#styleTag',()=>{
            writeMardown('#paper > .content', md, ()=> {
                writeCode(result+result2,result3,'#code','#styleTag',()=>{
                    markdownToHtml(md, ()=>{
                        writeCode(result+result2+result3,result4,'#code','#styleTag',()=>{
                            console.log('完成')
                        })
                    })
                })
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
    background-color: #444;
    justify-content: center;
    align-item: center;
    padding: 16px;
}
#paper > .content {
    background: white;
    height: 100%;
    width: 100%;
}

    `

var result3 = `
/* 我需要把markdown转化成html */
/* 为此我用到了一个优秀的库 markded.js */






`

var result4 = `
/* 这就是我的会动的简历 */
/* 谢谢观赏 */
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
我叫 xxx
xxx 毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript

# 项目介绍
1. 不完全仿苹果轮播
2. 会动的简历
3. 简单的画板

# 联系方式
- QQ 1134720895
- Email 13790020331@163.com
- 手机 13790020331

# 联系方式
- QQ 1134720895
- Email 13790020331@163.com
- 手机 13790020331

# 联系方式
- QQ 1134720895
- Email 13790020331@163.com
- 手机 13790020331

# 联系方式
- QQ 1134720895
- Email 13790020331@163.com
- 手机 13790020331

# 联系方式
- QQ 1134720895
- Email 13790020331@163.com
- 手机 13790020331
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
    }, 70)
}

function markdownToHtml(content,fn) {
    var domPre = document.createElement('pre')
    domPre.className = 'markdownToHtml'
    domPre.innerHTML = marked(content)
    document.querySelector('#paper > .content').replaceWith(domPre)
    fn()
}