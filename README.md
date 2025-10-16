# DASH-HEX-GAME
A hexagon ludo based game for my college's maths club quiz competition. Game to be conducted for 5 Teams

# Requirements
hardware
1. Dice x 1

Software
Visual Studi Code.

# HOW TO USE
1. Download source code
2. run pentagon.html(it is a hexagon map, but the name is kept for... wait... maybe I have to change it...???)

# MAP
The map consists of an outer and a inner hexagon. Once a round is completed in the outer hex, they can move in if they want and go to the center end point after completing a round in the inner hex. The team's entry points are clearly highlighted.

# RULES
1. Each team gets two coins to move through the map.They roll a dice and enter into the map. Now, they have to answer a question (A qn asked once wont be repeated again even though its randomly picked). the movement gets finalised for each team only if they get the qn right. or else, they roll back to previous position.
2. When two coins of different team lands in same place,the one who was already there is the defender and the one who came now is the attacker. Both of them will do a common qn.
  2.1 If attacker wins, defender goes home which is a successful attack.
  2.2 If defender wins, attcker goes home which is a successful defense.
  2.3 If Nobody wins, attacker goes to previous position.

# Point distribution
movement -> +1 point
attack success -> +3 points
defense success -> +2 points
reach center -> +2 point

NOTE: AS YOU CAN SEE THE GAME IS DESIGNED IN SUCH A WAY TO DISCOURAGE SAFE PLAY AND GO FOR AGGRESSION. THIS POINT SYSTEM IS CRUDE AND NOT PERFECT SO MAYBE YOU CAN IMPROVISE AND MAKE YOUR OWN POINTS SYSTEM. SORRY FOR THE INCONVENIENCE.

# Debug options
Additional debug options are given on the top right to cycle thru turns, disable a turn and disabling dice range.

# Additional Notes:
The coin wont overshoot if its near the central end point.
e.g if distance between the coin and the central endpoint is 3, an input of 4 will give an error and ask again.

In the questionnaire, the green button is for a regular turn, and the red button is for tiebreaker. even though additional exceptions handling is done by disabling the wrong buttons for the current turn, its adviced to stay alert.

The questions have to be manually added into the source code in the file gl.js .





