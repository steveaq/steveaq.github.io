---
layout: page
menu: True
date: '2022-02-27 01:53:59'
title: Projects
author: steveaq
description: Some description.
permalink: /navigation/
---

<img class="img-rounded" src="https://pbs.twimg.com/profile_images/1678337862624854016/SU2rOMuY_400x400.jpg" alt="Stephen Ahiabah" width="200">

# Key Projects


These are some of the code bases that I have built recently. These projects are typically in Python. The level of documentation will vary from project to project.  Recently I have been more rigorous in my documentation for commonly used python functions.


<h2>Web Scraping based Tutorials</h2>

These largely focus on the basics of web scraping, data analysis and visualisation in relation to football data. 
Web scraping refers to the process of extracting data from websites automatically using code. In the context of the Github repository you mentioned, the purpose of the Jupyter notebook file "FBREF League & Team Data Exploration.ipynb" is to explore and analyze football data from the FBREF website by web scraping the required information from the website's HTML code.

The notebook is divided into several sections, with each section performing a specific task. The initial sections cover the installation of required packages and libraries such as BeautifulSoup, Pandas, and Requests, which are essential for web scraping.

The subsequent sections include the actual web scraping process, where the code navigates to the FBREF website, extracts data from tables on the website, cleans and manipulates the data, and saves it into a Pandas dataframe. The extracted data includes various statistics and information about football leagues, teams, and players.

After the data has been extracted and cleaned, the notebook then uses the Pandas and Matplotlib libraries to create visualizations of the data, such as bar charts, scatter plots, and heatmaps.

Overall, the notebook is a comprehensive example of web scraping and data exploration techniques for extracting and analyzing football data from a website.

Visit any of the buttons below to go through my step-by-step tutorials throughout this process

![placeholder](https://pbs.twimg.com/media/FTiJzEsWUAIJ9Hp?format=jpg&name=small)


<div style="text-align:center;">
  <a href="https://steveaq.github.io/FBREF-Data-Scraping-Walk-Through-pt1/">
    <button class="myButton red">Team Data</button>
  </a>
  <a href="https://steveaq.github.io/FBREF-Data-Scraping-Walk-Through-pt2/">
    <button class="myButton red">Player Data</button>
  </a>
  <a href="https://steveaq.github.io/FBREF-Data-Scraping-Walk-Through-pt3/">
    <button class="myButton red">Building Data-Pipelines</button>
  </a>
</div>

<h2>StatsBomb API based Tutorials</h2>

Unlike in the web scraping tutorials where we largely focuded on player and team data, these notbooks/tutorials focus on accessing StatsBomb's API that allows for inspection of match level data that can be quite cumbersome to scrape of the internet. 

The code starts by importing necessary packages like statsbombpy, pandas, numpy, and matplotlib.pyplot, etc. Then it imports competitions and matches data from the 2022 FIFA World Cup and saves them to CSV files. 

These tutotials should give you a good idea about how to efficiently sift through match data from statsbomb and build insights on top. 

![placeholder](https://pbs.twimg.com/media/F0ysxORXwAAdLvA?format=png&name=900x900 "Large example image")


<div style="text-align:center;">
  <a href="https://steveaq.github.io/StatsBomb-Data-Exploration-pt1/">
    <button class="myButton red">Intial Data Exploration</button>
  </a>
  <a href="https://steveaq.github.io/StatsBomb-Data-Exploration-pt2/">
    <button class="myButton red">Analysing Match Data</button>
  </a>
  <a href="https://steveaq.github.io/StatsBomb-Data-Exploration-pt3/">
    <button class="myButton red">Advanced Data Wrangling</button>
  </a>
</div>

<h2>Data Visuals</h2>

In this website section, I explore the application of data visualization techniques to football xG (expected goals) metrics. Through three informative posts, I analyze how these techniques shed light on team and player performance.

The first post focuses on team xG metrics, using visualizations like heatmaps and shot maps to illustrate a team's attacking prowess and goal-scoring efficiency. These visualizations offer valuable insights into a team's strengths and areas for improvement.

The second post delves into individual player performance using xG metrics. Through interactive charts and graphs, I present xG maps, scatter plots, and player radars to evaluate player shot quality, conversion rates, and positioning. These visualizations help identify key performers and emerging talents.

The third post introduces advanced visualization techniques that combine team and player xG metrics. Network graphs and heatmaps overlaid with player-specific data points reveal player interactions, goal-scoring partnerships, and assist networks. This provides deeper insights into team dynamics and the collaborative nature of goal-scoring.

By employing data visualization techniques, these posts provide a personal perspective on understanding football xG metrics. They offer practical tools for fans, coaches, and analysts to interpret and appreciate team and player performance in a more engaging and insightful way.

Through this section of the website, readers can gain a deeper understanding of how data visualization enhances our comprehension of football xG metrics, and how these insights can be applied in practical contexts.

![placeholder](https://pbs.twimg.com/media/F0yr1JPXwAIY2ht?format=png&name=900x900 "Large example image")


<div style="text-align:center;">
  <a href="https://steveaq.github.io/Figuring-Out-xG-pt1/">
    <button class="myButton red">Figuring Out xG Pt1</button>
  </a>
  <a href="https://steveaq.github.io/Figuring-Out-xG-pt2/">
    <button class="myButton red">Figuring Out xG Pt2</button>
  </a>
  <a href="https://steveaq.github.io/Figuring-Out-xG-pt3/">
    <button class="myButton red">Figuring Out xG Pt3</button>
  </a>
</div>

<style>
  .myButton {
    background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }
</style>



