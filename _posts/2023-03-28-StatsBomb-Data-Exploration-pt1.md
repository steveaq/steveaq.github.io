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

Code and notebook for this post can be found [here](https://github.com/steveaq/Webs-Scraping-for-Fooball-Data-/blob/main/FBREF%20League%20%26%20Team%20Data%20Exploration.ipynb). 

In my previous post, which you can find [here](https://steveaq.github.io/posts/Show-Me-The-Data-pt2/), I outlined the current data landscape in the football analytics world including my picks for the best free resources out there.


This post is a part of series of posts, where we will explore how to use web-scraping packages available in python to get football data as efficiently as possible.


This project is written in Python and my webscraper of choice is BeautifulSoup. I've had a little bit of exposure to this already and seems to be the most popular 'web-scraper', so naturally it's a safe bet for now.


For the data source, I've gone with FBREF, very popular with the football hipsters and kids on football twitter that comment 'ykb' under posts they agree with. 
The underlying data for FBREF is provided by StatsBomb, so A* for reliabilty and accuracy.
There is vast amount of this data available at league, team, player and match level, complete with deatiled metrics such as pass types and even body parts used for passes. The issue is being able to programtically sift through the webpages to get there. 

The end goal of this is to:

- Create a set of working functions to aggregate data from FBREF.

- Perform a series of data munging tasks to get easy to to use datasets ready for analysis.

- Create a series of Data Visualisations from these cleaned datasets.

- Assess the meaningful metrics we need to start making some predictions on player suitability to positions.


<!-- To prevent this sounding more like an absctract, let get into the fun stuff.  -->


## Setup

First we have to install Beautiful Soup. The beautiful soup package will find the tables we need in the source code of the html. The following [article]( https://smehta.medium.com/scrape-and-create-your-own-beautiful-dataset-from-sports-reference-com-using-beautifulsoup-python-c26d6920684e) goes in to great depths as to how the package works and how you can find the tables you need.

```python
pip install mplsoccer
```


```python
from statsbombpy import sb
import pandas as pd
from pandas import json_normalize
import numpy as np

import matplotlib.pyplot as plt
import matplotlib.ticker as ticker
import matplotlib.patheffects as path_effects

# We'll only use a vertical pitch for this tutorial
from mplsoccer import VerticalPitch, Sbopen

# Get competitions
comp = sb.competitions()
comp.to_csv('competitions.csv', index=False)
```


```python

# Get Matches from 2022 FIFA World Cup
df = sb.matches(competition_id=43, season_id=106)
df.to_csv('CSVs/WC_Matches.csv', index=False)


# Find a match_id required for England vs Sengal
match = 3869118
match_events = sb.events(match_id=match)
team_list =list(match_events.team.unique())
```



```python
def create_passmap_df(national_team:str,match_events:pd.DataFrame):
    
    first_half = match_events.loc[match_events['period'] == 1] 
    second_half = match_events.loc[match_events['period'] == 2]
    pass_raw = first_half[match_events.type== 'Pass']
    pass_number_raw = pass_raw[['timestamp', 'player', 'pass_recipient']]
    pass_number_raw['pair'] = pass_number_raw.player + pass_number_raw.pass_recipient
    pass_count = pass_number_raw.groupby(['pair']).count().reset_index()
    pass_count = pass_count[['pair', 'timestamp']]
    pass_count.columns = ['pair', 'number_pass']

    avg_loc_df = pass_raw[['team', 'player', 'location']]
    avg_loc_df['pos_x'] = avg_loc_df.location.apply(lambda x: x[0])
    avg_loc_df['pos_y'] = avg_loc_df.location.apply(lambda x: x[1])
    avg_loc_df = avg_loc_df.drop('location', axis=1)

    avg_loc_df = avg_loc_df.groupby(['team','player']).agg({'pos_x': np.mean, 'pos_y': np.mean}).reset_index()

    pass_merge = pass_number_raw.merge(pass_count, on='pair')
    pass_merge = pass_merge[['player', 'pass_recipient', 'number_pass']]
    pass_merge = pass_merge.drop_duplicates()

    avg_loc_df = avg_loc_df[['player', 'pos_x', 'pos_y']]

    pass_cleaned = pass_merge.merge(avg_loc_df, on='player')
    pass_cleaned.rename({'pos_x': 'pos_x_start', 'pos_y': 'pos_y_start'}, axis='columns', inplace=True)

    pass_cleaned = pass_cleaned.merge(avg_loc_df, left_on='pass_recipient', right_on='player', suffixes=['', '_end'])
    pass_cleaned.rename({'pos_x': 'pos_x_end', 'pos_y': 'pos_y_end'}, axis='columns', inplace=True)

    # pass_cleaned = pass_cleaned.drop(['player_name_end'], axis=1)

    player_df = first_half[first_half.team == national_team ].groupby('player').agg({'minute': [min, max]}).reset_index()
    player_df = pd.concat([player_df['player'], player_df['minute']], axis=1)
    player_df['minutes_played'] = player_df['max'] - player_df['min']
    player_df = player_df.sort_values('minutes_played', ascending=False)

    player_names = player_df.player[:11].tolist()

    pass_team = pass_cleaned[pass_cleaned.player.isin(player_names)]
    pass_team = pass_team[pass_team.pass_recipient.isin(player_names)]

    pass_team['width'] = pass_team['number_pass'] / pass_team['number_pass'].max()

    return pass_team

pass_df = create_passmap_df("England",match_events)

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


```python
from matplotlib.colors import to_rgba
import matplotlib.style as style
from PIL import Image
import matplotlib.image as image


style.use('fivethirtyeight')

MIN_TRANSPARENCY = 0.1
color = np.array(to_rgba('black'))
color = np.tile(color, (len(pass_df), 1))
c_transparency = pass_df.number_pass / pass_df.number_pass.max()
c_transparency = (c_transparency * (1 - MIN_TRANSPARENCY)) + MIN_TRANSPARENCY
color[:, 3] = c_transparency

pitch = VerticalPitch(pitch_type='statsbomb', 
    half = False,
    axis = True, 
    # label = True, 
    # tick = True,
    goal_type='box')
    
fig, axs = pitch.grid(figheight=10, title_height=0.08, endnote_space=0, axis=False, 
                      title_space=0, grid_height=0.82, endnote_height=0.05)


pass_lines = pitch.lines(pass_df.pos_x_start, pass_df.pos_y_start,
                         pass_df.pos_x_end, pass_df.pos_y_end, 
                         lw=pass_df.width+0.5,
                         color=color, zorder=1, ax=axs['pitch'])

pass_nodes = pitch.scatter(pass_df.pos_x_start, pass_df.pos_y_start, s=350,
                           color= '#a71c1c', linewidth=1, alpha=0.1, ax=axs['pitch'])

for index, row in pass_df.iterrows():
    pitch.annotate(row.player, xy=(row.pos_x_start-3, row.pos_y_start-3), c='#0b5394', va='center',
                   ha='center', size='small', weight = 'light', family='sans-serif', ax=axs['pitch'],stretch= 'ultra-condensed',style="normal" ,alpha=0.5)
    
# endnote /title
axs['endnote'].text(1, 0.5, '@stephenaq7',
                    va='center', ha='right', fontsize=10)
axs['endnote'].text(1, 0.1, 'data via StatsBomb',
                    va='center', ha='right', fontsize=8)

### Add Fifa WC logo
ax2 = fig.add_axes([0.8, 0.035, 0.175, 1.8])
ax2.axis('off')
img = image.imread('/Users/stephenahiabah/code/statsbomb_project/FWC_Logo.png')
ax2.imshow(img)


### Add Stats by Steve logo
ax3 = fig.add_axes([0.008, -0.028, 0.17, 0.15])
ax3.axis('off')
img = image.imread('/Users/stephenahiabah/code/statsbomb_project/logo_transparent_background.png')
ax3.imshow(img)

axs['title'].text(0.4, 1, f'FWC 2022 - {team_list[0]} vs {team_list[1]} ', weight = 'bold', alpha = .75,
                  va='center', ha='center', fontsize=18)
axs['title'].text(0.25, 0.25, f'{team_list[0]}  - 1st Half Passing Network',
                  va='center', ha='center', alpha = .75, fontsize=12)
plt.savefig(f'Output Visuals/{team_list[0]} - Passing Networks.png', dpi=300, bbox_inches='tight')
plt.show()

```

![Team Pass Map](https://github.com/steveaq/statsbomb_project/blob/main/Statsbomb%20Data%20Exploration%20.ipynb)

First, we imports two libraries: Seaborn and Mplsoccer. Then, there are two functions defined in the code. The first function is called generateTeamxGDataFrame and it takes one argument, which is the name of a team. The function generates a dataframe containing data on the team's shots during the match, including information like the time the shot was taken, the position on the field, and the expected goal (xG) value of each shot.

The second function is called generateCombinedShotMap and takes two arguments, which are the names of the two teams in the match. This function uses the generateTeamxGDataFrame function to generate dataframes for each team's shots. Then, it uses the Mplsoccer library to create a visualization of the shots on the soccer field, with different colors and symbols representing goals and non-goals for each team. The code also adds some text to label the visualization, including the total number of shots and the total xG value for each team.

Finally, the generateCombinedShotMap function is called with the team names 'England' and 'Senegal'. It looks like the code is generating a visualization of the shots and goals from the match to help analyze how the game was played.


```python
shot_raw = match_events[match_events.type== 'Shot']
shot_raw["location"] = shot_raw["location"].astype(str)
shot_raw["location"] = shot_raw["location"].str[1:]
shot_raw["location"] = shot_raw["location"].str[:-1]
shot_raw[["location"]]
shot_raw[["x", "y"]] = shot_raw["location"].str.split(",", expand=True).astype(np.float32)


import seaborn as sns
from mplsoccer import Pitch

def generateTeamxGDataFrame(team):
    xg = shot_raw[['team','minute','type','shot_statsbomb_xg','x','y',"shot_outcome"]]
    team_xg = xg[xg['team']==team].reset_index()
    return team_xg
    

def generateCombinedShotMap(team1,team2):
    team1_xg = generateTeamxGDataFrame(team1)
    team2_xg = generateTeamxGDataFrame(team2)
    team1_shots = team1_xg[team1_xg.type=='Shot']

    team1_goals = team1_shots[team1_shots.shot_outcome == 'Goal'].copy()
    team1_non_goals = team1_shots[team1_shots.shot_outcome != 'Goal'].copy()

    team2_shots = team2_xg[team2_xg.type=='Shot']

    team2_goals = team2_shots[team2_shots.shot_outcome == 'Goal'].copy()
    team2_non_goals = team2_shots[team2_shots.shot_outcome != 'Goal'].copy()

    pitch = Pitch(pitch_type='statsbomb', 
    half = False,
    axis = True, 
    # label = True, 
    # tick = True,
    goal_type='box')
    fig, ax = pitch.grid(grid_height=0.6, title_height=0.06, axis=False,endnote_height=0.04, title_space=0, endnote_space=0)

# team 1 shots and goals
    pitch.scatter(team1_goals.x, team1_goals.y, alpha = 0.3, s = team1_goals.shot_statsbomb_xg*800, c = "red", ax=ax['pitch'], marker='football',label="Eng Goals")
    pitch.scatter(team1_non_goals.x, team1_non_goals.y, alpha = 0.3, s = team1_non_goals.shot_statsbomb_xg*800, c = "red", ax=ax['pitch'],hatch='///',label="Eng Shots")

# team 2 shots and goals

    pitch.scatter(120-team2_goals.x, 80-team2_goals.y, alpha = 0.3, s = team2_goals.shot_statsbomb_xg*800, c = "blue", ax=ax['pitch'], marker='football',label="Sen Goals")
    pitch.scatter(120-team2_non_goals.x, 80-team2_non_goals.y, alpha = 0.3, s = team2_non_goals.shot_statsbomb_xg*800, c = "blue", hatch='///', ax=ax['pitch'],label="Sen Shots")


    ax['pitch'].text(5, 5, team2 + ' shots',size=15)
    ax['pitch'].text(5, 10, f'Total Shots:' + str(len(team2_xg)),size=10)
    ax['pitch'].text(5, 15, f'Total xG: ' + str((team2_xg.shot_statsbomb_xg.sum())),size=10)
    ax['pitch'].text(80, 5, team1 + ' shots',size=15)
    ax['pitch'].text(80, 10, f'Total Shots:' + str(len(team1_xg)),size=10)
    ax['pitch'].text(80, 15, f'Total xG: ' + str(team1_xg.shot_statsbomb_xg.sum()),size=10)

 
                           
    ax['pitch'].legend(labelspacing=1, loc="lower center")

### Add Fifa WC logo
    ax2 = fig.add_axes([0.8, 0.04, 0.12, 1.6])
    ax2.axis('off')
    img = image.imread('/Users/stephenahiabah/code/statsbomb_project/FWC_Logo.png')
    ax2.imshow(img)


    ### Add Stats by Steve logo
    ax3 = fig.add_axes([0.03, 0.1, 0.1, 0.1])
    ax3.axis('off')
    img = image.imread('/Users/stephenahiabah/code/statsbomb_project/logo_transparent_background.png')
    ax3.imshow(img)

    ax['title'].text(0.3, 1.2, f'FWC 2022 - {team_list[0]} vs {team_list[1]} ', weight = 'bold', alpha = .75,
                    va='center', ha='center', fontsize=18)
    ax['title'].text(0.13, 0.5, f'Final Score -  {str(len(team1_goals))} : {str(len(team2_goals))} ',  alpha = .75,
                va='center', ha='center', fontsize=15)
    
    # endnote /title    
    ax['endnote'].text(1, 0.5, '@stephenaq7',
                    va='center', ha='right', fontsize=10)
    ax['endnote'].text(1, 0.1, 'data via StatsBomb',
                    va='center', ha='right', fontsize=8)

 # calling the function
generateCombinedShotMap('England','Senegal')


```

This code takes the match_events DataFrame, selects the columns team, player, and location using indexing, and stores the result in the touches_raw DataFrame. Then, the code selects only the rows where team is equal to "England", and stores the result in the touches_team DataFrame.
The code drops any rows where the value in the location column is equal to "a", using the drop() method with a boolean indexing expression. It converts the location column to a string data type using the astype() method, then removes the first and last characters (parentheses) from each string using the str accessor and indexing. Finally, the code splits the location column into two columns x and y at the comma separator using the str.split() method, and converts the resulting strings to floating-point numbers using the astype() method with the np.float32 data type. The resulting touches_team DataFrame contains the columns team, player, location, x, and y.

--page-break--


```python
touches_raw = match_events.copy()
touches = touches_raw[['team','player','location']]
touches_team = touches[touches['team']=="England"].reset_index()

touches_team.drop(touches_team[touches_team['location'] == "a"].index, inplace = True)
# touches_team = touches_team.loc[lambda x: x['location'] != 'a']

touches_team["location"] = touches_team["location"].astype(str)
touches_team["location"] = touches_team["location"].str[1:]
touches_team["location"] = touches_team["location"].str[:-1]
touches_team.drop(touches_team[touches_team['location'] == "a"].index, inplace = True)
touches_team[["x", "y"]] = touches_team["location"].str.split(",", expand=True).astype(np.float32)
touches_team

```

![Induvidual Player Pass Map](https://github.com/steveaq/statsbomb_project/blob/main/Statsbomb%20Data%20Exploration%20.ipynb) 


This code generates a hexbin touch map for a football player named "Bukayo Saka" using data from a StatsBomb dataset. The hexbin touch map is a visualization that shows the location and frequency of a player's touches on the football pitch.
The code uses the VerticalPitch module from the mplsoccer library to create the football pitch background, and hexbin() method to generate the hexbins for the player's touches.
The code also adds two logos to the visual - the FIFA World Cup logo and a logo for "Stats by Steve", and includes some text annotations to provide more information about the match and the player's touches.
Finally, the code saves the visualization as a PNG file in a specified folder using the savefig() method.

```python
style.use('fivethirtyeight')


player_name = 'Bukayo Saka'
touches_player = touches_team.loc[lambda x: x['player'] == player_name]

pitch = VerticalPitch(line_color='#000009', line_zorder=2, )
fig, axs = pitch.grid(figheight=10, title_height=0.08, endnote_space=0,
                      title_space=0,
                      # Turn off the endnote/title axis. I usually do this after
                      # I am happy with the chart layout and text placement
                      axis=False,)
hexmap = pitch.hexbin(touches_player.x, touches_player.y, ax=axs['pitch'], 
                      gridsize=(16, 16), cmap="Blues")
### Add Fifa WC logo
ax2 = fig.add_axes([0.8, 0.035, 0.14, 1.7])
ax2.axis('off')
img = image.imread('/Users/stephenahiabah/code/statsbomb_project/FWC_Logo.png')
ax2.imshow(img)


### Add Stats by Steve logo
ax3 = fig.add_axes([0, 0.06, 0.16, 0.1])
ax3.axis('off')
img = image.imread('/Users/stephenahiabah/code/statsbomb_project/logo_transparent_background.png')
ax3.imshow(img)

axs['title'].text(0.4, 0.7, f'{player_name} - Hexbin Touch Map ', weight = 'bold', alpha = .75,
                 ha='center', fontsize=16)

axs['title'].text(0.185, 0.4, f' Match: {team_list[0]} vs {team_list[1]}  ', alpha = .75,
                  va='center', ha='center', fontsize=12)

axs['title'].text(0.107, 0.05, f' Total Touches: {len(touches_player)}  ', alpha = .75,
                  va='center', ha='center', fontsize=12)

axs['endnote'].text(1, 0.7, 'Viz by - @stephenaq7', va='center', ha='right', fontsize=10)
axs['endnote'].text(1, 0.4, 'Data via StatsBomb', va='center', ha='right', fontsize=10)
plt.savefig(f'Output Visuals/{player_name} - Hexbin Touch Map.png', dpi=300, bbox_inches='tight')

```

![Induvidual Player Touch Map](https://github.com/steveaq/statsbomb_project/blob/main/Statsbomb%20Data%20Exploration%20.ipynb) 


This code appears to generate a pass map visualization for a specific player named "Bukayo Saka" from a football match.
First, the code creates a copy of the original match_events data and selects only the columns relevant to passing events for the England team. It then drops any rows where the location or pass_end_location is labeled as "a". The x,y coordinates for the player's location and the pass end location are extracted and converted to float type.
Next, a vertical pitch is created using the VerticalPitch class from the mplsoccer library, and the completed passes and other passes are plotted using arrows on the pitch. The completed passes are colored blue (#507af8) and have larger arrowheads, while the other passes are colored red (#ba4f45) and have smaller arrowheads. A legend is added to the pitch to distinguish between the two types of passes.
Two images are added to the visualization: a FIFA World Cup logo and a logo for "Stats by Steve". The title of the visualization includes the player's name and specifies that it is an individual pass map. The team names and pass completion percentage are also included in the title.
Finally, the visualization is saved as a PNG file with a specific file name based on the player's name.

```python


```

The code provided is plotting pass maps for each player on a football (soccer) team using the mplsoccer library. It begins by parsing some data using the Sbopen() function, which returns dataframes of various events related to a given match.
The code then filters the events and lineup dataframes to include only players who played in the match, and creates a Pitch object to be used as the background for the pass maps.
The code then cycles through each player and plots a pass map using the mplsoccer library, including arrows indicating the direction of the passes. The pass maps are plotted on a 5x3 grid, with each player given their own subplot.
Finally, the code includes some additional formatting for the pass maps, such as adding player names and pass accuracy statistics, as well as adding an endnote with information about the match.


```python


```

## Conclusion









