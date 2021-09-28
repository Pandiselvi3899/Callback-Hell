let thiru = document.createElement("div")
thiru.classList.add("thiru")

let span = document.getElementById("span")
span.innerHTML = 10


document.body.append(thiru)
let count = 10;
setTimeout(()=>{
    count = count-1
    span.innerHTML = count
    setTimeout(()=>{
        count = count-1
        span.innerHTML = count
        setTimeout(()=>{
            count = count-1
            span.innerHTML = count
            setTimeout(()=>{
                count = count-1
                span.innerHTML = count
                setTimeout(()=>{
                    count = count-1
                    span.innerHTML = count
                    setTimeout(()=>{
                        count = count-1
                        span.innerHTML = count
                        setTimeout(()=>{
                            count = count-1
                            span.innerHTML = count
                            setTimeout(()=>{
                                count = count-1
                                span.innerHTML = count
                                setTimeout(()=>{
                                    count = count-1
                                    span.innerHTML = count
                                    setTimeout(()=>{
                                        count = count-1
                                        span.innerHTML = "Happy Independence Day"
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)