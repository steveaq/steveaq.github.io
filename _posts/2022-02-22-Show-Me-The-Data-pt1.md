---

layout: post
title: Show me the Data. pt.1
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
author: steveaq
comments: true
---

##### *“Without data you're just another person with an opinion.”*

This simple quote is one of, if not my favourite quote that encapsulates what I'm trying to do with this blog and even at greater extent the kind of assertion I hope to make in this journey. So before I even think about loading VS Code. I need to acquire the right, high quality data in order to answer my problem statement.

‘Can we identify a more suitable on field position for any given (outfield) player using machine learning’

In the following sections this will break down to:

- What is the purpose of analytics for me and how does it play a role in defining the types of data I need?

- What’s the current football data landscape out there and where is it being sourced from?

- How do I make all this information meaningful for my analysis?

### The objective of analytics

In order to even get started to make assertions about football or any event based activity, we need the capability to analyse historical data and forecast what might happen in the future. Assessing all the available analytical options we have at our disposal is a huge task. We can categorise analytics at a high level into three distinct types. It’s also key to note that no one type of analytic is better than another, in-fact if we are looking to create a robust and thorough analytics, these types coexist with, and work in tandem with each other.

- Descriptive Analytics, which use data aggregation and data mining to provide insight into the past and answer: “What has happened?”
Predictive Analytics, which use statistical models and forecasting techniques to understand the future and answer: *“What could happen?”*
Prescriptive Analytics, which use optimisation and simulation algorithms to advise on possible outcomes and answer: *“What should we do?”*

##### Descriptive Analytics: Insight into the past

Descriptive analysis or statistics does exactly what the name implies: they “describe”, or summarise, raw data and make it something that is interpretable by humans. They are analytics that describe the past. The past refers to any point of time that an event has occurred, whether it is one minute ago, or one year ago. Descriptive analytics are useful because they allow us to learn from past behaviors, and understand how they might influence future outcomes.
The vast majority of the statistics we encounter in football fall into this category. This comprises of information such as: 

- League standings and results data: Pretty basic league stats that give you an idea of a league and it's seasons and how it played out. Let's you follow teams and their high-level progression during that time.

- Player details & characteristics data: The ‘Fifa’ stats if you will, This is data and information specifically on players, their strengths, weaknesses and other metadata. Think of attacking qualities, speed, endurance, defensive qualities, work rate, goals scored, assists, teams played for, salary history data.

- Major event data (Game basic statistics): Details on a per game basis, like line-ups, attendance, goals scored, cards, substitutions, attempted shots & passes, all of the above with timestamps.
Game event and tracking data: Detailed data usually on a frame-by-frame basis of players from both teams, their locations, ball locations, action details, like tackles and passes, their direction and in some cases level of intensity or speed.

- Health and performance data: This is data that tracks not only the squad availability of any given team but also the players physical performance or health data. This is facilitated by data gathered in game and training situations to measure and understand a given player's readiness for the game and detail areas of improvement in that respect. For the fans of the Football Manager games, think of this as the real life version of the player health bar and the ‘match-fitness bar’.

##### Predictive Analytics: Understanding the future

Predictive analytics has its roots in the ability to “predict” what might happen. These analytics are about understanding the future. Predictive analytics provides us with actionable insights through applying the descriptive data we have aggregated to statistical models in order to estimate the likelihood of a future outcome. It is important to remember that no statistical algorithm can “predict” the future with 100% certainty. This is because the foundation of predictive analytics is based on probabilities. Key aspects for consideration in predictive analytics can include:

- Metrics used for team and player evaluation
Use of “expected” metrics for the evaluation of teams & players i.e. Expected goals (or xG) measures the quality of a chance by calculating the likelihood that it will be scored from a particular position on the pitch during a particular phase of play. This value is based on several factors from before the shot was taken. xG is measured on a scale between zero and one, where zero represents a chance that is impossible to score and one represents a chance that a player would be expected to score every single time.

- Team ranking using methods such as Elo 

- Predictive models for win/loss probabilities

- Regression techniques for machine learning

- Sentiment analysis and its role in predicting the game outcomes


##### Prescriptive Analytics: Advise on possible outcomes

The relatively new field of prescriptive analytics allows users to “prescribe” a number of different possible actions and guide them towards a solution. In a nutshell, these analytics are all about providing advice. Prescriptive analytics attempts to quantify the effect of future decisions in order to advise on possible outcomes before the decisions are actually made. At their best, prescriptive analytics predict not only what will happen, but also why it will happen, providing recommendations regarding actions that will take advantage of the predictions. This category effectively aims to answer my initial hypothesis. 
For the prescriptive analytics we will assess the actual validity of our predictive outcomes with respect to the real life scenario. 

In [part two](https://steveaq.github.io/posts/Show-Me-The-Data-pt2/), we will assess the data landscape in football analytics and how that data can be used for meaningful analysis.
 
 Thanks for reading,

 Steve
