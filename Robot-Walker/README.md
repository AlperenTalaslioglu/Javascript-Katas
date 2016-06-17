# Robot-Walker-With-GUI-HTML5-Canvas

Problem : 

A robot is located in the upper-left corner of a 4×4 grid. The robot can move either up, down, left, or right, but cannot go to the same location twice. The robot is trying to reach the lower-right corner of the grid. Your task is to find out the number of unique ways to reach the destination.


Demo : http://alperen.pw/demo/Robot-Walker/
---------------------


# Solution and Project Details :

Dependencies:
* jQuery v1.11.3
* Bootstrap v3.3.5
* jasmine v2.3.4

Run: 
Download the project and run the index.html in the root.

In js/solver.js there is a variable which is called sizeOfGrid. When you change this variable's value, the grid automatically generated and solver trys to solve NXN grid.

Tested for 2x2, 3x3, 4x4 and 5x5 grids and works well.

Test: You can run the index.html in test folder. All tests will be run. If you want to add test cases, you can edit tests in test/spec folder
