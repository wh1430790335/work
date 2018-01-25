class Dialog {
    constructor (title='吕泽洲', content='烟火里的尘埃') {
        this.title = title
        this.content = content
        this.init()
    }
    init () {
        this.createWrap()
    }
    createWrap () {
        let oDiv = document.createElement('div')
        let oTit = this.createTitle()
        let oCon = this.createContent()

        oDiv.append(oTit)
        oDiv.append(oCon)

        oDiv.className = 'mark'

        document.body.append(oDiv)

        this.addEvent()
    }
    createTitle () {
        let p = document.createElement('p')
        let spanT = document.createElement('span')
        let spanE = document.createElement('span')

        spanE.className = 'close'
        p.className = 'title'

        spanT.innerHTML = this.title
        spanE.innerHTML = '关闭'

        p.append(spanT)
        p.append(spanE)

        return p
    }
    createBtns (sure, cancel) {

    }
    createContent () {
        let ul = document.createElement('ul')
        let ol = document.createElement('li')
        let li = document.createElement('li')

        let spanClose = document.createElement('span')
        let spanCancel = document.createElement('span')

        spanClose.className = 'sure'
        spanCancel.className = 'cancel'
        li.className = 'btn'
        ul.className = 'content'

        spanClose.innerHTML = '确定'
        spanCancel.innerHTML = '取消'

        li.append(spanClose)
        li.append(spanCancel)
        ol.innerHTML = this.content

        ul.append(ol)
        ul.append(li)

        return ul
    }
    addEvent () {
        let close = document.querySelector('.close')
        let sure = document.querySelector('.sure')
        let cancel = document.querySelector('.cancel')

        close.addEventListener('click', (event) => {
            this.hide()
        })
        sure.addEventListener('click', (event) => {
            this.hide()
        })
    }
    hide () {
        let mark = document.querySelector('.mark')
        mark.style.display = 'none'
    }
}