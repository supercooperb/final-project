## Easy Platformer
A one-level platforming game where you have to get to the goal!

## Summary

For the project, I used p5 to construct a platforming game. Using shapes and key commands, I rendered an entire level with rectangles and squares. The character moves left and right with the "A" and "D" keys. The goal is all the way at the bottom, and plays a congratulatory sound when reached.

## Component Parts

Since my project involves p5, I used the p5 reference to create my code. 2D primitives such as rect() and ellipse() were used for the level platforms and playable character respectively. Multiple rectangles were rendered at multiple points on-screen, and will blend together with p5 attributes. The character will be written to stay on the ground at all times, and will be controlled with keypressed(). When the character reaches the goal, a sound will play using function preload() and loadSound().
