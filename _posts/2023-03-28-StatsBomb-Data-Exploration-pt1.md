---

layout: post
title: Statsbomb Data Exploration pt1
subtitle: 'Overview of the data sources currently available for all levels'
description: >-
  1st Part of a 3 part post going through the basics of writing some simple applications & functions to get high quality player & team data.
image: >-
  https://pbs.twimg.com/media/FnkZDcHWYAAU4rK?format=jpg&name=small
optimized_image: >-
  https://pbs.twimg.com/media/FnkZDcHWYAAU4rK?format=jpg&name=small
category: [Match Analysis]
tags:
  - Blogging
  - Data Viz
author: stephenaq7
paginate: true
---

In part two of the data scraping walk through, we successfully achieved the following items; 

- [x] *Create a set of working functions to aggregate data from FBREF.*

- [x] *Perform a series of data munging tasks to get easy to to use datasets ready for analysis.* 

- [x] *Create a series of Data Visualisations from these cleaned datasets.* 

- [x] *Assess the meaningful metrics we need to start making some predictions on player suitability to positions.*

## Setup


```python
import requests
import unicodedata
import pandas as pd
from bs4 import BeautifulSoup
import seaborn as sb
import matplotlib.pyplot as plt
import matplotlib as mpl
import matplotlib.patheffects as pe
import warnings
import numpy as np
from math import pi
import os
from math import pi
from urllib.request import urlopen
from highlight_text import fig_text
from adjustText import adjust_text
from soccerplots.radar_chart import Radar
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
```



The function create_passmap_df() takes in two arguments: a string representing a national team and a pandas DataFrame with match events. It returns another DataFrame with pass data.
First, the code separates the first and second halves of the match and filters out only the pass events from the first half. It then extracts the relevant columns (timestamp, player, and pass_recipient) from this subset of events.
Next, the code creates a new column called pair, which concatenates the player and pass_recipient columns. It then groups the data by pair and counts the number of passes between each pair of players. The resulting DataFrame is cleaned up and renamed to pass_count.
After that, the code calculates the average location of each player on the pitch during their passes. It first extracts the team, player, and location columns from the pass events. It then calculates the average pos_x and pos_y for each combination of team and player. The resulting DataFrame is called avg_loc_df.
The code then merges pass_count with pass_number_raw on the pair column and selects only the relevant columns (player, pass_recipient, and number_pass). It drops any duplicate rows and renames the avg_loc_df columns for the starting positions of each pass.
Next, the code merges pass_cleaned with avg_loc_df on the player column to get the ending positions of each pass. It drops any unnecessary columns and renames the avg_loc_df columns for the ending positions of each pass.
The code then creates a new DataFrame called player_df, which groups the first-half events by player and calculates the minimum and maximum minute for each player. It then calculates the minutes_played for each player and sorts the DataFrame by minutes_played.
The code selects the top 11 players by minutes_played and filters the pass_cleaned DataFrame to only include passes between those players. It then calculates the width of each pass based on the number of passes between each pair of players.
Finally, the code returns the filtered pass_cleaned DataFrame with the width column added.


First, the code imports some useful libraries and modules. Matplotlib is the library that will be used to create the visualization, while PIL is a module for manipulating images. The code also sets a certain style for the plot.
Then, the code sets a minimum transparency level and creates an array of colors based on the number of passes made. The more passes made, the less transparent the color will be.
Next, the code creates a football pitch using the VerticalPitch function. The pitch is set to use the StatsBomb pitch type, which is a specific format for football pitches.
After that, the code creates the plot and sets the size and position of the pitch on the plot. The plot includes the passing lines and nodes, which will show the passing patterns of the team.
The code then adds annotations to the plot, indicating the players who made the passes. It also adds logos for the FIFA World Cup and the creator of the plot.
Finally, the code adds a title to the plot that displays the names of the two teams playing and which half of the match the plot is showing. The plot is then saved and displayed.
Overall, the code creates a passing network visualization for a football match, showing the passing patterns of a team during a certain half of the match. The visualization is complete with annotations and logos to make it look professional.

So, this code seems to be analyzing data from a soccer match between England and Senegal. First, it imports two libraries: Seaborn and Mplsoccer.
Then, there are two functions defined in the code. The first function is called generateTeamxGDataFrame and it takes one argument, which is the name of a team. The function generates a dataframe containing data on the team's shots during the match, including information like the time the shot was taken, the position on the field, and the expected goal (xG) value of each shot.
The second function is called generateCombinedShotMap and takes two arguments, which are the names of the two teams in the match. This function uses the generateTeamxGDataFrame function to generate dataframes for each team's shots. Then, it uses the Mplsoccer library to create a visualization of the shots on the soccer field, with different colors and symbols representing goals and non-goals for each team. The code also adds some text to label the visualization, including the total number of shots and the total xG value for each team.
Finally, the generateCombinedShotMap function is called with the team names 'England' and 'Senegal'. It looks like the code is generating a visualization of the shots and goals from the match to help analyze how the game was played.

This code takes the match_events DataFrame, selects the columns team, player, and location using indexing, and stores the result in the touches_raw DataFrame. Then, the code selects only the rows where team is equal to "England", and stores the result in the touches_team DataFrame.
The code drops any rows where the value in the location column is equal to "a", using the drop() method with a boolean indexing expression. It converts the location column to a string data type using the astype() method, then removes the first and last characters (parentheses) from each string using the str accessor and indexing. Finally, the code splits the location column into two columns x and y at the comma separator using the str.split() method, and converts the resulting strings to floating-point numbers using the astype() method with the np.float32 data type. The resulting touches_team DataFrame contains the columns team, player, location, x, and y.


This code generates a hexbin touch map for a football player named "Bukayo Saka" using data from a StatsBomb dataset. The hexbin touch map is a visualization that shows the location and frequency of a player's touches on the football pitch.
The code uses the VerticalPitch module from the mplsoccer library to create the football pitch background, and hexbin() method to generate the hexbins for the player's touches.
The code also adds two logos to the visual - the FIFA World Cup logo and a logo for "Stats by Steve", and includes some text annotations to provide more information about the match and the player's touches.
Finally, the code saves the visualization as a PNG file in a specified folder using the savefig() method.



This code appears to generate a pass map visualization for a specific player named "Bukayo Saka" from a football match.
First, the code creates a copy of the original match_events data and selects only the columns relevant to passing events for the England team. It then drops any rows where the location or pass_end_location is labeled as "a". The x,y coordinates for the player's location and the pass end location are extracted and converted to float type.
Next, a vertical pitch is created using the VerticalPitch class from the mplsoccer library, and the completed passes and other passes are plotted using arrows on the pitch. The completed passes are colored blue (#507af8) and have larger arrowheads, while the other passes are colored red (#ba4f45) and have smaller arrowheads. A legend is added to the pitch to distinguish between the two types of passes.
Two images are added to the visualization: a FIFA World Cup logo and a logo for "Stats by Steve". The title of the visualization includes the player's name and specifies that it is an individual pass map. The team names and pass completion percentage are also included in the title.
Finally, the visualization is saved as a PNG file with a specific file name based on the player's name.


The code provided is plotting pass maps for each player on a football (soccer) team using the mplsoccer library. It begins by parsing some data using the Sbopen() function, which returns dataframes of various events related to a given match.
The code then filters the events and lineup dataframes to include only players who played in the match, and creates a Pitch object to be used as the background for the pass maps.
The code then cycles through each player and plots a pass map using the mplsoccer library, including arrows indicating the direction of the passes. The pass maps are plotted on a 5x3 grid, with each player given their own subplot.
Finally, the code includes some additional formatting for the pass maps, such as adding player names and pass accuracy statistics, as well as adding an endnote with information about the match.


## Conclusion









