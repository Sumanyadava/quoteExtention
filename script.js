fetch('https://api.quotable.io/random').then(data => data.json()).then(quotesData => {
    quotes_content = quotesData.content
    quotes_author = quotesData.author


    const quotesContent = document.getElementById("quotediv")
    quotesContent.innerHTML = quotes_content


    const quotesAuthor = document.getElementById("authordiv")
    quotesAuthor.innerHTML = quotes_author

})