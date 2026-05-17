function getNoun(number,one,two,five){
    let n=Math.abs(number)
    n = n%100
    if (n>=5&&n<=20)return five
    n=n%10
    if (n==1)return one
    if (n>=2&&n<=4)return two
}

const elements_date=document.querySelectorAll('.topic-date')

elements_date.forEach(el=>{
    const timestamp=el.getAttribute('data-timestamp')
    if (!timestamp) return
    const date=new Date(timestamp)
    const now= new Date
    const diffInSeconds=Math.floor((now-date)/1000)
    if (diffInSeconds<0) return
    const intervals=[
        {seconds: 31536000000, forms:['тысячелетие','тысячелетия','тысячелетий']},
        {seconds: 31536000, forms:['год','года','лет']},
        {seconds: 2592000, forms:['месяц','месяца','месяцев']},
        {seconds: 604800, forms:['неделю','недели','недель',]},
        {seconds: 86400, forms:['день','дня','дней',]},
        {seconds: 3600, forms:['час','часа','часов',]},
        {seconds: 60, forms:['минуту','минуты','минут']},
        {seconds: 1, forms:['секунду','секунды','секунд']}
    ]
    let result='только что'
    for (let i=0;i<intervals.length;i++){
        const interval=intervals[i]
        const count=Math.floor(diffInSeconds/interval.seconds)
        if (count>=1){
            const word = getNoun(count,interval.forms[0],interval.forms[1],interval.forms[2])
            result=`${count} ${word} назад`
            break
        }
    }
    el.innerText=result
})