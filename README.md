## ZONE
A difficult maze game where you have to get to the goal!

## Summary

For the project, I used p5 to construct a mouse-controlled maze game. Using shapes and mouse commands, I rendered an entire level with rectangles and squares. The character moves in all directions with the mouse. When the mouse cursor hits a wall, the screen turns red and plays a beeping noise. When the player reaches the goal, a green square at the top right of the maze, the screen turns green and a ringing noise plays.

## Component Parts

Since my project involves p5, I used the p5 reference to create my code. 2D primitives such as rect() and ellipse() were used for the level platforms and playable character respectively. Multiple rectangles were rendered at multiple points on-screen, and will blend together with p5 attributes. The character will be written to stay on the ground at all times, and will be controlled with keypressed(). When the character reaches the goal, a sound will play using function preload() and loadSound(). 

## Old project diagram is included in repository

This diagram is from when I started the project, and many parts changed over time. When I was first planning the project, I wanted to control the character with the "A" and "D" keys and move towards a goal at the bottom. The player would have been rolling from side to side on each platform. After meeting with some people in class, I decided to modify and change my project to use mouse controls instead. Not only was this easier to do, but using the mouse to navigate a maze seems a lot more user-friendly and fun. I'm still including this diagram since it shares a lot in common with the final product.

## Challenges

I had many challenges going into this project. I am experienced with rendering platforms and ellipses in p5, but I have a hard time giving those shapes attributes. Making the whole screen turn a color when the cursor hits something was the most difficult part. "if" and "for" statements are hard for me to get correctly as well. Thankfully, my teacher was able to help me out! We used variables for not only the shapes, but for attributes (e.g. moving the mouse towards the goal, moving the mouse in a restricted part of the maze, the hitbox of the cursor, etc) and I'm very proud of how the project turned out.

## Timeline

Week 1: Write proposal
Week 2: Render walls, cursor, and goal
Week 3: Give walls, cursor, and goal specific variables
Week 4: Present!

## Video of completed work is in repository

## References and links

P5 Reference sections I used
https://p5js.org/reference/#/p5/ellipse
https://p5js.org/reference/#/p5/rect
https://p5js.org/reference/#/p5/background
https://p5js.org/reference/#/p5/mouseX
https://p5js.org/reference/#/p5/mouseX
https://p5js.org/reference/#/p5.SoundFile

A game that inspired this project was World's Hardest Game
https://www.coolmathgames.com/0-worlds-hardest-game
https://www.youtube.com/watch?v=bhqkxwJWR0w
