#Approach to problem
For a section of consecutively occupied boxes, no cuts are obviously the cheapest way to go. I.e. if all boxes were occupied, the cheapest way would be to cut the plank only once, at the end. This is not the case though so we have to look at what happens with empty boxes.

Every box in the shed can be imagined to have a cost. The cost of an occupied box is that of 2m wood. The cost of an empty box is either that of 2m wood or the price of a cut. How do we decide what cost to choose?

If we step through the boxes and find an unoccupied one, we have found a gap of size 1. If we find that the next one is empty as well, we have a gap of size 2. This gap size is important because it will give us a threshold where it will be cheaper to cut than to fill the gap with plank. If the gap is so wide that the price of cutting is lower than that of filling it with plank, we choose the former.

E.g. in the example case, a gap of size 2 is cheaper to cut than to fill so the lowest price is €40 (2 cuts and 20m of plank)

#Code
In **solution.js**, you will find the code that performs the price minimisation. **app.js** is mostly *jQuery* that makes use of the solution but also allows to set custom prices and shed layouts. 

#App
Here is the [app](http://davidnaas.github.io/cowoptimisation)
     