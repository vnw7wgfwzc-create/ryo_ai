from config import AI_NEWS
from sources import get_news

for url in AI_NEWS:

    news=get_news(url)

    print(news)
