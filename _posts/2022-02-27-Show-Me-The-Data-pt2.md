---

layout: post
title: Show me the Data. pt.2
subtitle: 'Overview of the data sources currently available for all levels'
description: >-
  1st Part of a 2 part post going through where we can find good quality & free data for analysis.
image: >-
  https://pbs.twimg.com/media/F0qp1pXWcAAmJ37?format=png&name=small
optimized_image: >-
  https://pbs.twimg.com/media/F0qp1pXWcAAmJ37?format=png&name=small
category: [Intro Post]
tags:
  - Blogging
  - Getting started
author: stephenaq7
paginate: true
---


### The Data Landscape

In short, the data landscape for sports analytics is flush with options at our disposal. There is a healthy mix of open sources as well as the big players in the data game asking for a pretty penny to get you in the know. Then there are the medium sized to smaller operations that operate semi-free or for small(er) fees. And then there are the grassroots operations scraping every tiny source for the much needed data. But in a nutshell you often get what you pay for or how much effort you put into it. I have taken this  list from the brilliant; [Christian Kotitschke](https://www.linkedin.com/in/tetris/christiankotitschke/) who was a great inspiration for this post. His [post](https://www.linkedin.com/pulse/soccer-analytics-data-beginners-guide-christian-kotitschke/) details a cartographic view of the data landscape going through all of the platforms and options that are available as of 2022.

#### Largely Free/ Open Source Datasets for high level player, team and performance data: 
- [Who Scored](https://www.whoscored.com/) - One of the largest detailed football statistics websites, covering Europe's top 5 leagues, this platform however does offer easy-to-use methods to gather data, so would need a web scraper to acquire all the data we need. 

- [Football Data](https://www.football-data.co.uk/data.php)-  Football-Data provides the casual football punter with computer-ready football results, match statistics and betting odds data for use with spreadsheet applications, to help with the development and analysis of football betting systems, all for free.

- [Kaggle](https://www.kaggle.com/stefanoleone992/fifa-20-complete-player-dataset or https://www.kaggle.com/thefc17/epl-results-19932018.) - These are great datasets to get started with and come ready with annotated code about how to load the data and start analysing it, also free as well which is a bonus, but the accuracy of the data provided is dubious (as it’s not provided by EA directly) and I’d only consider these for practicing coding.

- [Smarter Scout](https://smarterscout.com/) - This is one of the more premium services. It offers very scoped player facts, style and performance data, yet enables metrics on top of that, categorizations and some level of analysis. It offers free access, but if you want to do anything more than just getting used to their offering, access quickly shoots up to £100 per month. And that is mainly for web based access with no clear picture of export options. 

- [FBREF](https://fbref.com/) - Another one of my favored platforms, FBRef otherwise is your basic web access interface to league, player and game data with a few download options to get direct access to data (CSV and XLS on select tables). Over the last few years fbref’s growth in popularity for the casual has coincided with its ease of use and ability to acquire data through web scraping. Putting an asterix on this one for future use. 

This next batch of sources largely comprises platforms that offer either tiered services, that really focus more on match detail level data for more empirical analysis.

- Basic : 
    - [Footystats](https://footystats.org/)
    - [Injuries-and-suspensions](https://injuriesandsuspensions.com/)
    - [Statista](https://www.statista.com/search/?q=Soccer&Search=)


- Detailed event and tracking data for matches:

    - [Optasportspro](https://www.optasportspro.com/)
    - [Statsperform](https://www.statsperform.com/)
    - [Statsbomb](https://statsbomb.com/)
    - [Wyscout](https://wyscout.com/)
    - [Metrica-Sports](https://metrica-sports.com/)
    - [Statsbomb Open Data](https://github.com/statsbomb/open-data)
    - [Metrica Sports Open Data](https://metrica-sports.com/open-data-project/)

The following chart summarises the data-sources mentioned above and their various attributes:

![datalist](/images/datalist.png)

#### Are the pay-to-play platforms worth it for me?

I’ve found in my research that if you really want to access this data, you're going to need deep pockets; however, you are assured of a much higher level of trustworthiness in the data and support for your special data needs. 

Never fear though, as there are snippets and free trial versions of the paid data platforms available and as the popularity of open data grows I do see these free options growing in tandem:
Statsbomb actually offer a few data sets for free already [Statsbomb Open Data](https://github.com/statsbomb/open-data) & [Statsbomb.py](https://github.com/statsbomb/statsbombpy/blob/master/README.md0). Recently statsbomb have created their own python and R packages to allow easy access to their API without login credentials. This option is also very promising as I loved how easy to use it was and the level of detail available especially at match level blew me away considering it was free. Recency of the data is an issue and the ability to programmatically inspect matches and leagues has proved to be very challenging but, I can see myself happily spending a fair few quid on the whole 9 yards in the future.


#### So what’s the point and how do we make all of this information meaningful?

My initial problem statement -  *‘Can we identify a more suitable on field position for any given (outfield) player using machine learning’*, is quite open ended and it's key that I spend time looking in the right places. From a high level view, I'll be needing real time player & team performance data, for the purposes of time, cost and ease of data acquisition, I’ve decided to run with [FBREF](https://fbref.com/) for player, performance, team & league table info. Although there are export capabilities for fbref, the actual websites themselves offer accurate real time stats as well as a large repository of data from prior seasons, so with some work, all this info can be scraped using a python package like beautiful soup or selenium. It would help me in learning how to scrape websites and build my own repositories that hopefully others can pick up and use when this project grows with time. As I mentioned above, I was so impressed with what [Statsbomb Open Data](https://github.com/statsbomb/open-data) had to offer so I will also be looking at their platform for more match event level data. My thinking is that if i’m able to build some useful UDFs (User defined functions) for data visualizations and other types of reports using the free open data, when it comes to the time time actually purchase full access, I’d be equipped with the tools to jump straight in and pull out some meaningful analysis with all the information available at my disposal. 


I’ve been teeming with so many ideas since starting this so a source I’m keeping on the watchlist for the time being is going to be [Football Data](https://www.football-data.co.uk/data.php) the betting aspect of football is not something I considered to strongly however, betting is about the prediction of outcomes, so the fact that there’s a free source to help facilitate my learning about prediction techniques and the creation of my own prediction models is something that I can’t ignore. I do expect this list to change as I encounter various blockers and challenges however these statsbomb & fbref platforms are my dream team for the time being.

I hope you learned something from this post and if you feel like I’ve missed out some glaring holes or have any other suggestions about what I should be looking in to, then please feel free to reach out to me

Thanks for reading, 

Steve
