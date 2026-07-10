import feedparser

def get_news(url):

    feed = feedparser.parse(url)

    articles=[]

    for entry in feed.entries[:5]:

        articles.append({
            "title":entry.title,
            "link":entry.link
        })

    return articles
