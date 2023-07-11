---
layout: post
menu: True
date: '2022-02-27 01:53:59'
title: Projects
author: stephenaq7
description: Some description.
permalink: /navigation/
---

## Key Projects


These are some of the code bases that I have built recently. These projects are typically in Python. The level of documentation will vary from project to project.  Recently I have been more rigorous in my documentation for commonly used python functions.


<h2>Web Scraping based Tutorials</h2>

These largely focus on the basics of web scraping, data analysis and visualisation in relation to football data. 
Web scraping refers to the process of extracting data from websites automatically using code. In the context of the Github repository you mentioned, the purpose of the Jupyter notebook file "FBREF League & Team Data Exploration.ipynb" is to explore and analyze football data from the FBREF website by web scraping the required information from the website's HTML code.

The notebook is divided into several sections, with each section performing a specific task. The initial sections cover the installation of required packages and libraries such as BeautifulSoup, Pandas, and Requests, which are essential for web scraping.

The subsequent sections include the actual web scraping process, where the code navigates to the FBREF website, extracts data from tables on the website, cleans and manipulates the data, and saves it into a Pandas dataframe. The extracted data includes various statistics and information about football leagues, teams, and players.

After the data has been extracted and cleaned, the notebook then uses the Pandas and Matplotlib libraries to create visualizations of the data, such as bar charts, scatter plots, and heatmaps.

Overall, the notebook is a comprehensive example of web scraping and data exploration techniques for extracting and analyzing football data from a website.

Visit any of the buttons below to go through my step-by-step tutorials throughout this process

![placeholder](https://pbs.twimg.com/media/Fupd4xVWYAEtxLn?format=jpg&name=large "Large example image")


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

![placeholder](https://pbs.twimg.com/media/FUEsmqeXsAEyxtS?format=jpg&name=900x900 "Large example image")


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

Shinnar-Le Roux (SLR) radiofrequency (RF) pulses are common on MRI.  While [many tools](http://rsl.stanford.edu/research/software.html) exist to design such pulses, these are often in Matlab.  This is a version similar to the Pauly implementation, though the interface is written in Python and incorporates object-oriented design.  Source and examples are here. The backend of this code is written in C/C++ and requires Boost 1.63 to compile (with the proper paths needing to be set in the Makefile).  C++ code using the Boost Python/Numpy interfaces.  This also requires an FIR pulse design toolbox I have designed.

![placeholder](https://pbs.twimg.com/media/FnkZDcBWQAE1fqS?format=jpg&name=900x900 "Large example image")


<div style="text-align:center;">
  <a href="https://example.com">
    <button class="myButton red">Button 1</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 2</button>
  </a>
  <a href="https://example.com">
    <button class="myButton red">Button 3</button>
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



