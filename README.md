# JS-Fundamentals-Module-Mid-Exam-Preparation
Mid exam preparation from my training in Softuni

## **Problem 1 - Computer Store**

Write a program that **prints you a receipt** for your new computer. You
will receive the **parts' prices (without tax)** until you receive what
type of customer this is - **special** or **regular**. Once you receive
the type of customer you should print the receipt.

The **taxes are 20%** of each part's price you receive.

If the customer is **special**, he has a 10% discount on the total price
with taxes.

If a given price is not a positive number, you should print **"Invalid
price\!"** on the console and continue with the next price.

If the total price is equal to zero, you should print **"Invalid
order\!"** on the console.

### Input

  - You will receive numbers representing **prices (without tax)** until
    command **"special" or "regular":**

### Output

  - The receipt should be in the following format:

**"Congratulations you've just bought a new computer\!**

**Price without taxes: {total price without taxes}$**

**Taxes: {total amount of taxes}$**

**-----------**

**Total price: {total price with taxes}$"**

**<span class="underline">Note: All prices should be displayed to the
second digit after the decimal point\! The discount is applied only on
the total price. Discount is only applicable to the final
price\!</span>**

### JS Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>([</strong></p>
<p><strong>'1050',</strong></p>
<p><strong>'200',</strong></p>
<p><strong>'450',</strong></p>
<p><strong>'2',</strong></p>
<p><strong>'18.50',</strong></p>
<p><strong>'16.86',</strong></p>
<p><strong>'special'</strong></p>
<p><strong>])</strong></p></td>
<td><p><strong>Congratulations you've just bought a new computer!</strong></p>
<p><strong>Price without taxes: 1737.36$</strong></p>
<p><strong>Taxes: 347.47$</strong></p>
<p><strong>-----------</strong></p>
<p><strong>Total price: 1876.35$</strong></p></td>
</tr>
<tr class="even">
<td><strong>Comment</strong></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>1050 – valid price, total 1050</strong></p>
<p><strong>200 – valid price, total 1250</strong></p>
<p><strong>…</strong></p>
<p><strong>16.86 – valid price, total 1737.36</strong></p>
<p><strong>We receive special</strong></p>
<p><strong>Price is positive number, so it is valid order</strong></p>
<p><strong>Price without taxes is 1737.36</strong></p>
<p><strong>Taxes: 20% from 1737.36 = 347.47</strong></p>
<p><strong>Final price = 1737.36 + 347.47 = 2084.83</strong></p>
<p><strong>Additional 10% discount for special customers</strong></p>
<p><strong>2084.83 – 10% = 1876.35</strong></p></td>
<td></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p><strong>([</strong></p>
<p><strong>'1023',</strong></p>
<p><strong>'15',</strong></p>
<p><strong>'-20',</strong></p>
<p><strong>'-5.50',</strong></p>
<p><strong>'450',</strong></p>
<p><strong>'20',</strong></p>
<p><strong>'17.66',</strong></p>
<p><strong>'19.30', 'regular'</strong></p>
<p><strong>])</strong></p></td>
<td><p><strong>Invalid price!</strong></p>
<p><strong>Invalid price!</strong></p>
<p><strong>Congratulations you've just bought a new computer!</strong></p>
<p><strong>Price without taxes: 1544.96$</strong></p>
<p><strong>Taxes: 308.99$</strong></p>
<p><strong>-----------</strong></p>
<p><strong>Total price: 1853.95$</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>([</strong></p>
<p><strong>'regular'</strong></p>
<p><strong>])</strong></p></td>
<td><strong>Invalid order!</strong></td>
</tr>
</tbody>
</table>

## **Problem 2 - The Lift**

Write a program that **finds a place for the tourist on a lift. **

Every wagon should have **a maximum of 4 people on it**. If a wagon is
full, you should direct the people to **the next one with space**
available.

### Input

  - **On the first line,** you will receive **how many people** are
    waiting to get **on the lift**

  - **On the second line**, you will receive the **current state of the
    lift separated by a single space:** **" "**.

### Output

**When there is no more available space left on the lift**, or there are
**no more people in the queue**, you should print on the console the
final state of the lift's wagons separated by **" "** and one of the
following messages:

  - If there are no more people and the lift have empty spots, you
    should print:

> **"The lift has empty spots\!**
> 
> **{wagons separated by ' '}"**

  - If there are still people in the queue and no more available space,
    you should print:

> **"There isn't enough space\! {people} people in a queue\!**
> 
> **{wagons separated by ' '}"**

  - If the lift is full and there are no more people in the queue, you
    should print only the wagons separated by **" "**


### JS Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>"15",</strong></p>
<p><strong>"0 0 0 0 0"</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>The lift has empty spaces!</strong></p>
<p><strong>4 4 4 3 0</strong></p></td>
</tr>
<tr class="even">
<td><strong>Comment</strong></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>First state - 4 0 0 0 -&gt; 11 people left</strong></p>
<p><strong>Second state – 4 4 0 0 -&gt; 7 people left</strong></p>
<p><strong>Third state – 4 4 4 0 -&gt; 3</strong> people <strong>left</strong></p></td>
<td></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>"20",</strong></p>
<p><strong>"0 2 0"</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>There isn't enough space! 10 people in a queue!</strong></p>
<p><strong>4 4 4</strong></p></td>
</tr>
<tr class="even">
<td><strong>Comment</strong></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>First state - 4 2 0 -&gt; 16 people left</strong></p>
<p><strong>Second state – 4 4 0 -&gt; 14 people left</strong></p>
<p><strong>Third state – 4 4 4 -&gt; 10</strong> people <strong>left, but there're no more wagons.</strong></p></td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 3 - Memory game**

Write a program that recreates the **Memory game**.

On the first line, you will **receive a sequence of elements**. Each
element in the sequence **will have a** **twin**. Until the player
receives **"end"** from the console, you will receive **strings with two
integers** separated by a space, representing **the indexes** of
elements in the sequence.

If the player **tries to cheat** and enters **two equal indexes** or
indexes which are **out of bounds of the sequence**, you should **add**
two matching elements at the middle of the sequence in the following
format:

**"-{number of moves until now}a"**

Then print this message on the console:

**"Invalid input\! Adding additional elements to the board"**

### Input

  - **On the first line, you will receive a sequence of elements**

  - **On the following lines, you will receive integers until the
    command "end"**

### Output

  - Every time the player hit **two matching elements**, you should
    **remove** them from the sequence and **print** on the console the
    following message:

**"Congrats\! You have found matching elements - ${element}\!"**

  - If the player hit **two different elements**, you should **print**
    on the console the following message:

**"Try again\!"**

  - If the player hit **all matching elements** before he receives
    **"end"** from the console, you should **print** on the console the
    following message:

**"You have won in {number of moves until now} turns\!"**

  - If the player receives **"end"** **before** **he hits all matching
    elements**, you should **print** on the console the following
    message:

**"Sorry you lose :(**

**{the current sequence's state}"**

## Constraints

  - **All elements in the sequence will always have a matching
    element.**


## JS Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>"1 1 2 2 3 3 4 4 5 5",</strong></p>
<p><strong>"1 0",</strong></p>
<p><strong>"-1 0",</strong></p>
<p><strong>"1 0",</strong></p>
<p><strong>"1 0",</strong></p>
<p><strong>"1 0",</strong></p>
<p><strong>"end"</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>Congrats! You have found matching elements - 1!</strong></p>
<p><strong>Invalid input! Adding additional elements to the board</strong></p>
<p><strong>Congrats! You have found matching elements - 2!</strong></p>
<p><strong>Congrats! You have found matching elements - 3!</strong></p>
<p><strong>Congrats! You have found matching elements - -1a!</strong></p>
<p><strong>Sorry you lose :(</strong></p>
<p><strong>4 4 5 5</strong></p></td>
</tr>
<tr class="even">
<td><strong>Comment</strong></td>
<td></td>
</tr>
<tr class="odd">
<td><p><strong>1)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>1 1 2 2 3 3 4 4 5 5 –&gt; 1 = 1, equal elements, so remove them. Moves: 1</strong></p>
<p><strong>2)</strong></p>
<p><strong>-1 0</strong></p>
<p><strong>-1 is invalid index so we add additional elements</strong></p>
<p><strong>2 2 3 3 -2а -2а 4 4 5 5, Moves: 2</strong></p>
<p><strong>3)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>2 2 3 3 -2а -2а 4 4 5 5 -&gt; 2 = 2, equal elements, so remove them. Moves: 3</strong></p>
<p><strong>4)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>3 3 -2а -2а 4 4 5 5 -&gt; 3 = 3, equal elements, so remove them. Moves: 4</strong></p>
<p><strong>5)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>-2а -2а 4 4 5 5 -&gt; -2а = -2а, equal elements, so remove them. Moves: 5</strong></p>
<p><strong>6)</strong></p>
<p><strong>You receive the end command.</strong></p>
<p><strong>There are still elements in the sequence, so the player loses the game.</strong></p>
<p><strong>Final state - 4 4 5 5</strong></p></td>
<td></td>
</tr>
<tr class="even">
<td><p><strong>[</strong></p>
<p><strong>"a 2 4 a 2 4",</strong></p>
<p><strong>"0 3",</strong></p>
<p><strong>"0 2",</strong></p>
<p><strong>"0 1",</strong></p>
<p><strong>"0 1",</strong></p>
<p><strong>"end"</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>Congrats! You have found matching elements - a!</strong></p>
<p><strong>Congrats! You have found matching elements - 2!</strong></p>
<p><strong>Congrats! You have found matching elements - 4!</strong></p>
<p><strong>You have won in 3 turns!</strong></p></td>
</tr>
<tr class="odd">
<td><p><strong>[</strong></p>
<p><strong>"a 2 4 a 2 4",</strong></p>
<p><strong>"4 0",</strong></p>
<p><strong>"0 2",</strong></p>
<p><strong>"0 1",</strong></p>
<p><strong>"0 1",</strong></p>
<p><strong>"end"</strong></p>
<p><strong>]</strong></p></td>
<td><p><strong>Try again!</strong></p>
<p><strong>Try again!</strong></p>
<p><strong>Try again!</strong></p>
<p><strong>Try again!</strong></p>
<p><strong>Sorry you lose :(</strong></p>
<p><strong>a 2 4 a 2 4</strong></p></td>
</tr>
</tbody>
</table>

## **Problem 4 - SoftUni Reception**

*Every day, thousands of students pass by the reception at SoftUni with
different questions to ask. The employees have to help everyone by
providing all the information and answering all of the questions.*

**Three employees** are working on the reception all day. Each of them
can handle a **different number** **of students** **per hour**. Your
task is to **calculate how much time** it will take to **answer all the
questions** of a given number of students.

First, you will receive 3 lines with integers, representing the number
of students that each **employee can help per hour.** On the following
line, you will receive **students count as a single integer**.

**<span class="underline">Every fourth</span> hour, all employees have a
break, so they don't work for an hour.** It is the only break for the
employees, because they don't need rest, nor have a personal life.
Calculate the time needed to answer all the student's questions and
print it in the following format: **"Time needed: {time}h."**

## Input / Constraints

  - > On the first three lines - **each employee efficiency** - integer
    > in the range **\[1 - 100\]**

  - > On the fourth line - **students count** – integer in the range
    > **\[0 – 10000\]**

  - > Input will always be valid and in the range specified

## Output

  - Print a single line: **"Time needed: {time}h."**

  - Allowed working **time** / **memory**: **100ms** / **16MB**

## JS Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>['5','6','4','20']</td>
<td>Time needed: 2h.</td>
<td><p>All employees can answer 15 students per hour. After the first hour, there are 5 students left to be answered.</p>
<p>All students will be answered in the second hour.</p></td>
</tr>
<tr class="even">
<td>['1','2','3','45']</td>
<td>Time needed: 10h.</td>
<td><p>All employees can answer 6 students per hour. In the first 3 hours, they have answered 6 * 3 = 18 students. Then they have a break for an hour.</p>
<p>After the next 3 hours, there are<br />
18 + 6 * 3 = 36 answered students.</p>
<p>After the break for an hour, there are only 9 students to answer.</p>
<p>So in the 10th hour, all of the student's questions would be answered.</p></td>
</tr>
<tr class="odd">
<td>['3','2','5','40']</td>
<td>Time needed: 5h.</td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 5 - Array Modifier**

You are given **an array with integers**. Write a program to **modify
the elements** after **receiving the following commands:**

  - "**swap {index1} {index2}**" takes **two elements** and **swap their
    places**.

  - "**multiply {index1} {index2}**" takes **element at the
    1<sup>st</sup> index** and **multiply** **it** **with the element at
    2<sup>nd</sup> index**. **Save the product at the 1<sup>st</sup>
    index.**

  - "**decrease**" **decreases** **all elements** in the array **with
    1**.

## Input

On the **first input line,** you will be given **the initial array
values** separated by a single space.

On the **next lines** you will receive commands **until** you receive
the **command "end"**. The **commands are** as follow:

  - "**swap {index1} {index2}**"

  - "**multiply {index1} {index2}**"

  - "**decrease**"

## Output

**The output** should be printed on the console and consist of
**elements** **of the** **modified array** – **separated by a comma and
a single space** "**,** ".

## Constraints

  - **Elements of the array** will be **integer numbers** in the range
    **\[-2<sup>31</sup>...2<sup>31</sup>\]**

  - **Count of the array elements** will be in the range **\[2...100\]**

  - **Indexes** **will be always in the range of the array**

## JS Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'23 -2 321 87 42 90 -123',</p>
<p>'swap 1 3',</p>
<p>'swap 3 6',</p>
<p>'swap 1 0',</p>
<p>'multiply 1 2',</p>
<p>'multiply 2 1',</p>
<p>'decrease',</p>
<p>'end'</p>
<p>]</p></td>
<td>86, 7382, 2369942, -124, 41, 89, -3</td>
<td><p>23 -2 321 87 42 90 -123 – initial values</p>
<p>swap 1(-2) and 3(87) ▼</p>
<p>23 87 321 -2 42 90 -123</p>
<p>swap 3(-2) and 6(-123) ▼</p>
<p>23 87 321 -123 42 90 -2</p>
<p>swap 1(87) and 0(23) ▼</p>
<p>87 23 321 -123 42 90 -2</p>
<p>multiply 1(23) 2(321) = 7383 ▼</p>
<p>87 7383 321 -123 42 290 -2</p>
<p>multiply 2(321) 1(7383) = 2369943 ▼</p>
<p>87 7383 2369943 -123 42 90 -2</p>
<p>decrease – all - 1 ▼</p>
<p>86 7383 2369942 -124 41 89 -3</p></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'1 2 3 4',</p>
<p>'swap 0 1',</p>
<p>'swap 1 2',</p>
<p>'swap 2 3',</p>
<p>'multiply 1 2',</p>
<p>'decrease',</p>
<p>'end'</p>
<p>]</p></td>
<td>1, 11, 3, 0</td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 6 - Numbers**

Write a program to **read a sequence of integers** and find and print
the **top 5** numbers **greater than the average** value in the
sequence, sorted in descending order.

## Input

  - Read from the console a single line holding **space-separated
    integers**.

## Output

  - Print the above-described numbers on a single line, space-separated.

  - If **less than 5 numbers** hold the property mentioned above,
    **print less** than 5 numbers.

  - Print **"No"** if no numbers hold the above property.

## Constraints

  - All input **numbers** are integers in the **range** \[-1 000 000 …
    1 000 000\].

  - The **count of numbers** is in the **range** \[1…10 000\].

## JS Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>'10 20 30 40 50'</strong></td>
<td><strong>50 40</strong></td>
<td><p><strong>Average number = 30.</strong></p>
<p><strong>Numbers greater than 30 are: {40, 50}.</strong></p>
<p><strong>The top 5 numbers among them in descending order are: {50, 40}.</strong></p>
<p><strong>Note that we have only 2 numbers, so all of them are included in the top 5.</strong></p></td>
</tr>
<tr class="even">
<td><strong>'5 2 3 4 -10 30 40 50 20 50 60 60 51'</strong></td>
<td><strong>60 60 51 50 50</strong></td>
<td><p><strong>Average number = 28.08.</strong></p>
<p><strong>Numbers greater than 20.078 are:<br />
{30, 40, 50, 50, 60, 60, 51}.</strong></p>
<p><strong>The top 5 numbers among them in descending order are: {60, 60, 51, 50, 50}.</strong></p></td>
</tr>
<tr class="odd">
<td><strong>'1'</strong></td>
<td><strong>No</strong></td>
<td><p><strong>Average number = 1.</strong></p>
<p><strong>There are no numbers greater than 1.</strong></p></td>
</tr>
<tr class="even">
<td><strong>'-1 -2 -3 -4 -5 -6'</strong></td>
<td><strong>-1 -2 -3</strong></td>
<td><p><strong>Average number = -3.5.</strong></p>
<p><strong>Numbers greater than -3.5 are: {-1, -2, -3}.</strong></p>
<p><strong>The top 5 numbers among them in descending order are: {-1, -2, -3}.</strong></p></td>
</tr>
</tbody>
</table>

## **Problem 7 - Counter-Strike**

Write a program that **keeps track of every won** battle against an
**enemy**. You will receive **initial energy**. Afterward, you will
start receiving the **distance** you need **to reach an enemy** until
the **"End of battle"** command is given, or you **run out of energy.**

The **energy** you need for reaching an enemy is **equal to the distance
you receive**. Each time you reach an enemy, you **win** a battle, and
your **energy is reduced. Otherwise,** if you don't have **enough
energy** to reach an enemy, **end the program and** **print**: **"Not
enough energy\! Game ends with {count} won battles and {energy}
energy"**.

Every **third won battle** increases **your energy with the value of
your current count of won battles**.

Upon receiving the **"End of battle"** command**,** print the **count of
won battles** in the following format:

### "Won battles: {count}. Energy left: {energy}" 

## Input / Constraints

  - On the **first line,** you will receive **initial energy** – an
    **integer \[1-10000\]**.

  - On the **following lines,** you will be receiving the **distance**
    of an enemy – an **integer** **\[1-10000\]**

## Output

  - The description contains the proper output messages for each case
    and the format they should be printed.

## JS Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>(["100",</strong></p>
<p><strong>"10",</strong></p>
<p><strong>"10",</strong></p>
<p><strong>"10",</strong></p>
<p><strong>"1",</strong></p>
<p><strong>"2",</strong></p>
<p><strong>"3",</strong></p>
<p><strong>"73",</strong></p>
<p><strong>"10"])</strong></p></td>
<td><strong>Not enough energy! Game ends with 7 won battles and 0 energy</strong></td>
<td><p><strong>The initial energy is 100. The first distance is 10, so we subtract 10 from 100, and we consider this a won battle. We are left with 90 energy. Next distance – 10, and 80 energy left.</strong></p>
<p><strong>Next distance – 10, 3 won battles and 70 energy, but since we have 3 won battles, we increase the energy with the current count of won battles, in this case – 3, and it becomes 73.</strong></p>
<p><strong>The last distance we receive – 10 is unreachable since we have 0 energy, so we print the appropriate message, and the program ends.</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>(["200",</strong></p>
<p><strong>"54",</strong></p>
<p><strong>"14",</strong></p>
<p><strong>"28",</strong></p>
<p><strong>"13",</strong></p>
<p><strong>"End of battle"])</strong></p></td>
<td><strong>Won battles: 4. Energy left: 94</strong></td>
<td></td>
</tr>
</tbody>
</table>
