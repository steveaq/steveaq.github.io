# Pitch IQ image restoration

Reviewed all 17 posts, the About page and the visual gallery. Images are now served from local website assets rather than the deleted Twitter account. The expiring LinkedIn cover was also replaced with an existing local illustration.

Recovered charts from the local football-analysis project, its saved notebook outputs and Git history, and the original StatsBomb project linked by the articles. Saved notebook tables were rendered as PNGs without rerunning the analysis. Three surviving third-party Twitter examples and the Sky Sports reference were saved locally.

## Substitutions and missing originals

- Player Similarity Models: the original Saliba figures are missing. The post now shows the archived July 2024 Bukayo Saka comparisons and ranking, with an explicit restoration note and matching names and captions.
- Player Roles Clustering: the available notebook uses seven clusters. The restored figures, nearby code and descriptions match that saved run. The lost role-group screenshot galleries were removed; the saved cluster-nine table is included as an example from the 3D run.
- FBREF 2024 update: the unavailable website screenshots were replaced with a readable preview of the notebook's saved data and the existing list of statistic types.
- Figuring Out xG part 2: a saved fixtures table replaces the lost website screenshot.
- StatsBomb part 3: the unavailable OBV reference image was removed. The lost custom output figure is identified as unavailable, with the chart-building code preserved.
- Radar article: the recovered comparison chart is used as its cover.

The gallery now uses rooted image paths and only emits optional retina/lazy attributes when those sources exist.

## Verification

The Jekyll build generated 38 HTML pages. All 275 rendered image references resolve to local files, with no missing paths or corrupt recovered images. The homepage, gallery and similarity post were also checked in the browser.

The installed native Sass compiler crashes on this machine; verification used a temporary pure-Ruby Sass compiler and local pagination plugins. The project's Gemfile and build configuration were not changed.

Source-by-source details are recorded in image-recovery.json.
