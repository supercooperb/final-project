## ZONE
A difficult maze game where you have to get to the goal!

## Summary

For the project, I used p5 to construct a mouse-controlled maze game. Using shapes and mouse commands, I rendered an entire level with rectangles and squares. The character moves in all directions with the mouse. When the mouse cursor hits a wall, the screen turns red and plays a beeping noise. When the player reaches the goal, a green square at the top right of the maze, the screen turns green and a ringing noise plays.

## Component Parts

Since my project involves p5, I used the p5 reference to create my code. 2D primitives such as rect() and ellipse() were used for the level platforms and playable character respectively. Multiple rectangles were rendered at multiple points on-screen, and will blend together with p5 attributes. The character will be written to stay on the ground at all times, and will be controlled with keypressed(). When the character reaches the goal, a sound will play using function preload() and loadSound(). 

## Project diagram is included in repository
