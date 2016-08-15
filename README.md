Converts input integers to seven segment display format

For example,

Input : 0123456789

Output :

 --        --   --        --   --  --   --   --
|  |    |    |    | |  | |    |      | |  | |  |
|  |    |    |    | |  | |    |      | |  | |  |
           --   --   --   --   --       --   --
|  |    | |       |    |    | |  |   | |  |    |
|  |    | |       |    |    | |  |   | |  |    |
 --        --   --        --   --       --   --

### Setup :

The initial step is to clone the repostiory to your local machine.
Then,
```
$ cd <project directory>
$ node lcd-display.js
```

### Problem Overview - Display the an integer in its seven segment 
format

The seven segment display format is primarily used to represent numbers 
in digital display devices. It is called the seven segment display 
because it is made up of a maximum of seven parts. A number is displayed 
as a combination of these seven parts - 

Seven segment display of 8 -
 - 
| |
 - 
| |
 - 

Seven segment display of 4 -

| |
 - 
  |


For the current problem, a default data structue is maintained containing the size 
one seven segment display for the integers from 0-9. The scaling of these integers is 
imperative in this problem. 

Scaling the integer 8 to size two would result in the following result -

 -- 
|  |
|  |
 --
|  |
|  |
 --

Scaling the integer 6 to size three results in the following -

 ---
|
|
|
 ---
|   |
|   |
|   |
 ---

So for the scaling purpose, the hyphen character is repeated as many times as per 
scale in its respective row, and, for the rows containing the pipe the "spaces" is 
expanded (or duplicated) as per the scale - and the entire expanded row is also 
duplicated so that the scaling takes place vertically. The duplication of the row 
that happens vertically is also as per the scale value.


P.S. : The scaling value is currently hard coded in the code, and not given at 
runtime.
