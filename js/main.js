var result = `
body {
    background: red;
}
`

var n = 0
var id = setInterval(()=> {
    n += 1
    code.innerHTML = result.substring(0,n)
    styleTag.innerHTML = result.substring(0,n)
    console.log(`第${n}轮`)
    if( n >= result.length) {
        window.clearInterval(id)
    }
},100)