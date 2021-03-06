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
<td><p><strong>1050 ??? valid price, total 1050</strong></p>
<p><strong>200 ??? valid price, total 1250</strong></p>
<p><strong>???</strong></p>
<p><strong>16.86 ??? valid price, total 1737.36</strong></p>
<p><strong>We receive special</strong></p>
<p><strong>Price is positive number, so it is valid order</strong></p>
<p><strong>Price without taxes is 1737.36</strong></p>
<p><strong>Taxes: 20% from 1737.36 = 347.47</strong></p>
<p><strong>Final price = 1737.36 + 347.47 = 2084.83</strong></p>
<p><strong>Additional 10% discount for special customers</strong></p>
<p><strong>2084.83 ??? 10% = 1876.35</strong></p></td>
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

Write a program that??**finds a place for the tourist on a lift.??**

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
<p><strong>Second state ??? 4 4 0 0 -&gt; 7 people left</strong></p>
<p><strong>Third state ??? 4 4 4 0 -&gt; 3</strong> people <strong>left</strong></p></td>
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
<p><strong>Second state ??? 4 4 0 -&gt; 14 people left</strong></p>
<p><strong>Third state ??? 4 4 4 -&gt; 10</strong> people <strong>left, but there're no more wagons.</strong></p></td>
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
<p><strong>1 1 2 2 3 3 4 4 5 5 ???&gt; 1 = 1, equal elements, so remove them. Moves: 1</strong></p>
<p><strong>2)</strong></p>
<p><strong>-1 0</strong></p>
<p><strong>-1 is invalid index so we add additional elements</strong></p>
<p><strong>2 2 3 3 -2?? -2?? 4 4 5 5, Moves: 2</strong></p>
<p><strong>3)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>2 2 3 3 -2?? -2?? 4 4 5 5 -&gt; 2 = 2, equal elements, so remove them. Moves: 3</strong></p>
<p><strong>4)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>3 3 -2?? -2?? 4 4 5 5 -&gt; 3 = 3, equal elements, so remove them. Moves: 4</strong></p>
<p><strong>5)</strong></p>
<p><strong>1 0</strong></p>
<p><strong>-2?? -2?? 4 4 5 5 -&gt; -2?? = -2??, equal elements, so remove them. Moves: 5</strong></p>
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

  - > On the fourth line - **students count** ??? integer in the range
    > **\[0 ??? 10000\]**

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
**elements** **of the** **modified array** ??? **separated by a comma and
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
<td><p>23 -2 321 87 42 90 -123 ??? initial values</p>
<p>swap 1(-2) and 3(87) ???</p>
<p>23 87 321 -2 42 90 -123</p>
<p>swap 3(-2) and 6(-123) ???</p>
<p>23 87 321 -123 42 90 -2</p>
<p>swap 1(87) and 0(23) ???</p>
<p>87 23 321 -123 42 90 -2</p>
<p>multiply 1(23) 2(321) = 7383 ???</p>
<p>87 7383 321 -123 42 290 -2</p>
<p>multiply 2(321) 1(7383) = 2369943 ???</p>
<p>87 7383 2369943 -123 42 90 -2</p>
<p>decrease ??? all - 1 ???</p>
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

  - All input **numbers** are integers in the **range** \[-1??000??000 ???
    1??000??000\].

  - The **count of numbers** is in the **range** \[1???10 000\].

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

  - On the **first line,** you will receive **initial energy** ??? an
    **integer \[1-10000\]**.

  - On the **following lines,** you will be receiving the **distance**
    of an enemy ??? an **integer** **\[1-10000\]**

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
<td><p><strong>The initial energy is 100. The first distance is 10, so we subtract 10 from 100, and we consider this a won battle. We are left with 90 energy. Next distance ??? 10, and 80 energy left.</strong></p>
<p><strong>Next distance ??? 10, 3 won battles and 70 energy, but since we have 3 won battles, we increase the energy with the current count of won battles, in this case ??? 3, and it becomes 73.</strong></p>
<p><strong>The last distance we receive ??? 10 is unreachable since we have 0 energy, so we print the appropriate message, and the program ends.</strong></p></td>
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

## **Problem 8 - Shoot for the Win**

Write a program that helps you keep track of your **shot targets**. You
will receive a **sequence with integers**, separated by a single space,
representing targets and their value. Afterward, you will be receiving
indices until the **"End"** command is given, and you need to print the
**targets** and the **count of shot targets**.

Every time you receive an **index**, you need to shoot the target on
that index, **if it is possible**.

Every time you **shoot a target**, its value becomes **-1, and it is
considered shot**. Along with that, you also need to:

  - **Reduce** all the other **targets**, which have **greater values**
    than your **current** target, **with its value**.

  - **Increase** all the other **targets**, which **have less than or
    equal** value to the **shot target**, **with its value.**

**Keep in mind that you can't shoot a target, which is already shot.**
**You also can't increase or reduce a target, which is considered
shot.**

When you receive the **"End"** command, print the targets in their
current state and the **count of shot targets** in the following format:

**"Shot targets: {count} -\> {target<sub>1</sub>} {target<sub>2</sub>}???
{target<sub>n</sub>}"**

## Input / Constraints

  - On the **first line** of input, you will receive a **sequence** of
    **integers**, **separated** by **a single space ??? the targets
    sequence**.

  - On the **following lines**, until the **"End"** command, you be
    receiving **integers** each on a single line ??? **the index of the
    target to be shot.**

## Output

  - The format of the output is described above in the problem
    description.

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
<td><p>(["24 50 36 70",</p>
<p>"0",</p>
<p>"4",</p>
<p>"3",</p>
<p>"1",</p>
<p>"End"])</p></td>
<td><strong>Shot targets 3 -&gt; -1 -1 130 -1</strong></td>
<td><p><strong>First, we shoot the target on index 0. It becomes equal to -1, and we start going through the rest of the targets. Since 50 is more than 24, we reduce it to 26 and 36 to 12 and 70 to 46. The sequence looks like that:</strong></p>
<p><strong>-1 26 12 46</strong></p>
<p><strong>The next index is invalid, so we don't do anything. Index 3 is valid, and after the operations, our sequence should look like that:</strong></p>
<p><strong>-1 72 58 -1</strong></p>
<p><strong>Then we take the first index with value 72, and our sequence looks like that:</strong></p>
<p><strong>-1 -1 130 -1</strong></p>
<p><strong>Then we print the result after the "End" command.</strong></p></td>
</tr>
<tr class="even">
<td><p>(["30 30 12 60 54 66",</p>
<p>"5",</p>
<p>"2",</p>
<p>"4",</p>
<p>"0",</p>
<p>"End"])</p></td>
<td><strong>Shot targets: 4 -&gt; -1 120 -1 66 -1 -1</strong></td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 9 - Moving Target**

You are at the shooting gallery again, and you need a program that helps
you keep track of moving targets. On the first line, you will receive a
**sequence of targets with their integer values**, split by a **single
space**. Then, you will start receiving **commands for manipulating the
targets** until the **"End"** command. The commands are the following:

  - **"Shoot {index} {power}"**
    
      - Shoot the target at the index **if it exists** by **reducing**
        its **value** by the **given** **power** (**integer value**).
    
      - Remove the target **if it is shot**. A target is considered
        **shot** when **its value reaches 0**.

  - **"Add {index} {value}"**
    
      - Insert a target with the received value at the received **index
        if it exists**.
    
      - If not, print: **"Invalid placement\!"**

  - **"Strike {index} {radius}"**
    
      - **Remove the target at the given index and the ones before and
        after it depending on the radius.**
    
      - **If any of the indices in the range is invalid, print: "Strike
        missed\!" and skip this command.**

> **Example:** **"Strike 2 2"**

|  |          |          |               |          |          |  |  |
|  | -------- | -------- | ------------- | -------- | -------- |  |  |
|  | {radius} | {radius} | {strikeIndex} | {radius} | {radius} |  |  |

  - **"End"**
    
      - **Print** the sequence with targets in the following format and
        **end** **the program**:

> **"{target<sub>1</sub>}|{target<sub>2</sub>}???|{target<sub>n</sub>}"**

## Input / Constraints

  - On the **first line,** you will receive **the sequence of targets**
    ??? **integer values \[1-10000\]**.

  - On the **following lines,** until the **"End"** will be receiving
    the command described above ??? **strings**.

  - There will never be a case when the **"Strike"** command would empty
    the whole sequence.

## Output

  - Print the appropriate message in case of any command if necessary.

  - In the end, print the sequence of targets in the format described
    above.

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
<td><p><strong>(["52 74 23 44 96 110",</strong></p>
<p><strong>"Shoot 5 10",</strong></p>
<p><strong>"Shoot 1 80",</strong></p>
<p><strong>"Strike 2 1",</strong></p>
<p><strong>"Add 22 3",</strong></p>
<p><strong>"End"])</strong></p></td>
<td><p><strong>Invalid placement!</strong></p>
<p><strong>52|100</strong></p></td>
<td><p><strong>The first command is "Shoot", so we reduce the target on index 5, which is valid, with the given power ??? 10.</strong></p>
<p><strong>Then we receive the same command, but we need to reduce the target on the 1<sup>st</sup> index, with power 80. The value of this target is 74, so it is considered shot, and we remove it.</strong></p>
<p><strong>Then we receive the "Strike" command on the 2<sup>nd</sup> index, and we need to check if the range with radius 1 is valid:</strong></p>
<p><strong>52 23 44 96 100</strong></p>
<p><strong>And it is, so we remove the targets.</strong></p>
<p><strong>At last, we receive the "Add" command, but the index is invalid</strong>, <strong>so we print the appropriate message</strong>, <strong>and in the end, we have the following result:</strong></p>
<p><strong>52|100</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>(["1 2 3 4 5",</strong></p>
<p><strong>"Strike 0 1",</strong></p>
<p><strong>"End"])</strong></p></td>
<td><p><strong>Strike missed!</strong></p>
<p><strong>1|2|3|4|5</strong></p></td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 10 - Guinea Pig**

*Merry has a guinea pig named Puppy, that she loves very much. Every
month she goes to the nearest pet store and buys him everything he needs
??? food, hay, and cover.*

On the **first three lines**, you will receive **the quantity of food**,
**hay**, and **cover**, which Merry buys for a **month (30 days)**. On
the **fourth line**, you will receive the **guinea pig's weight**.

**Every day** Puppy eats **300 gr of food**. **Every** **second** day
Merry **first feeds the pet**, then gives it a **certain amount of hay**
**equal to** **5%** of the rest of the **food**. On **every** **third**
day, Merry puts Puppy **cover** with **a quantity of** **1/3** of its
**weight**.

**Calculate** whether the quantity of **food, hay, and cover**, will be
enough for a **month**.

**If Merry runs out of food, hay, or cover, stop the program\!**

## Input

  - **On the first line ??? quantity food in kilograms** - a
    floating-point number in the range **\[0.0 ??? 10000.0\]**

  - **On the second line ??? quantity hay in kilograms** - a
    floating-point number in the range **\[0.0 ??? 10000.0\]**

  - **On the third line ??? quantity cover in kilograms** - a
    floating-point number in the range **\[0.0 ??? 10000.0\]**

  - **On the fourth line ??? guinea's weight in kilograms** - a
    floating-point number in the range **\[0.0 ??? 10000.0\]**

## Output

  - If the food, the hay, and the cover are enough, print:
    
      - **"Everything is fine\! Puppy is happy\! Food: {excessFood},
        Hay: {excessHay}, Cover: {excessCover}."**

<!-- end list -->

  - > If one of the things is not enough, print:
    
      - **"Merry must go to the pet store\!"**

**The output values must be formatted to the second decimal place\!**

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
<td><p>([<strong>"10"</strong>,</p>
<p><strong>"</strong>5<strong>"</strong>,</p>
<p><strong>"</strong>5.2<strong>"</strong>,</p>
<p><strong>"</strong>1<strong>"</strong>])</p></td>
<td><strong>Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87</strong></td>
</tr>
<tr class="even">
<td><p>([<strong>"</strong>1<strong>"</strong>,</p>
<p><strong>"</strong>1.5<strong>"</strong>,</p>
<p><strong>"</strong>3<strong>"</strong>,</p>
<p><strong>"</strong>1.5<strong>"</strong></p>
<p>])</p></td>
<td><strong>Merry must go to the pet store!</strong></td>
</tr>
<tr class="odd">
<td><p>([<strong>"</strong>9<strong>"</strong>,</p>
<p><strong>"</strong>5<strong>"</strong>,</p>
<p><strong>"</strong>5.2<strong>"</strong>,</p>
<p><strong>"</strong>1<strong>"</strong>])</p></td>
<td><strong>Merry must go to the pet store!</strong></td>
</tr>
</tbody>
</table>

## **Problem 11 - Shopping List**

*It's the end of the week, and it is time for you to go shopping, so you
need to create a shopping list first.*

## Input

You will receive an **initial list** with groceries separated by an
exclamation mark **"\!"**.

After that, you will be receiving **4 types** of commands until you
receive **"Go Shopping\!"**.

  - **"Urgent {item}" -** **add** the item at the **start** of the list.
    If the item **already exists,** skip this command.

  - **"Unnecessary {item}" -** **remove** the item with the given name,
    only **if it exists** in the list. Otherwise, skip this command.

  - **"Correct {oldItem} {newItem}" -** if the item with the given **old
    name** exists, **change** its name with the **new** one. Otherwise,
    skip this command.

  - **"Rearrange {item}" -** if the grocery exists in the list,
    **remove** it from its **current position** and **add** it at the
    **end** of the list. Otherwise, skip this command.

## Constraints

  - There won't be any duplicate items in the initial list

## Output

  - Print the **list** with all the groceries, joined by **", ":**

**"{firstGrocery}, {secondGrocery}, ??? {nthGrocery}"**

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
<td><p>(["Tomatoes!Potatoes!Bread",</p>
<p>"Unnecessary Milk",</p>
<p>"Urgent Tomatoes",</p>
<p>"Go Shopping!"])</p></td>
<td>Tomatoes, Potatoes, Bread</td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>(["Milk!Pepper!Salt!Water!Banana",</p>
<p>"Urgent Salt",</p>
<p>"Unnecessary Grapes",</p>
<p>"Correct Pepper Onion",</p>
<p>"Rearrange Grapes",</p>
<p>"Correct Tomatoes Potatoes",</p>
<p>"Go Shopping!"])</p></td>
<td>Milk, Onion, Salt, Water, Banana</td>
</tr>
</tbody>
</table>

## **Problem 12 - Heart Delivery**

*Valentine's day is coming, and Cupid has minimal time to spread some
love across the neighborhood. Help him with his mission\!*

You will receive a **string** with **even integers,** separated by a
**"@"** - this is our neighborhood. After that, a series of **Jump**
commands will follow until you receive **"Love\!".** Every house in the
neighborhood needs a certain number of **hearts** delivered by Cupid so
it can celebrate Valentine's day. The integers in the neighborhood
indicate those needed hearts.

Cupid starts at the position of the **first** **house** (index 0) and
must jump by a **given length.** The jump commands will be in this
format: **"Jump {length}"**.

Every time he jumps from one house to another, the needed hearts for the
visited house are **decreased by 2**:

  - If the needed hearts for a certain house become **equal to 0**,
    print on the console **"Place {house\_index} has Valentine's day."**

  - If **Cupid** jumps to a house where the needed hearts are
    **already** **0,** print on the console **"Place {house\_index}
    already had Valentine's day."**

  - Keep in mind that **Cupid** can have a **larger jump length** than
    the **size of the neighborhood,** and if he does jump **outside** of
    it, he should **start** from the **first house** again (index 0)

*For example, we are given this neighborhood: 6@6@6. Cupid is at the
start and jumps with a length of 2. He will end up at index 2 and
decrease the needed hearts by 2: \[6, 6, 4\]. Next, he jumps again with
a length of 2 and goes outside the neighborhood, so he goes back to the
first house (index 0) and again decreases the needed hearts there: \[4,
6, 4\].*

## Input

  - On the first line, you will receive a **string** with **even
    integers** separated by **"@"** ??? the neighborhood and the number of
    hearts for each house.

  - On the next lines, until "**Love\!**" is received, you will be
    getting jump commands in this format: "**Jump {length}**".

## Output

In the end, print **Cupid's** **last position** and whether his mission
was successful or not:

  - "**Cupid's last position was {last\_position\_index}.**"

  - If **each house** has had Valentine's day, print:
    
      - "**Mission was successful.**"

  - If **not,** print the **count** of all houses that **didn't**
    celebrate Valentine's Day:
    
      - **"Cupid has failed {houseCount} places."**

## Constraints

  - The **neighborhood's** size will be in the range \[1???20\]

<!-- end list -->

  - Each **house** will need an **even number** of hearts in the range
    \[2 ??? 10\]

  - Each **jump length** will be an integer in the range \[1 ??? 20\]

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
<td><p><strong>[(</strong>"<strong>10@10@10@2</strong>",</p>
<p>"<strong>Jump 1</strong>",</p>
<p>"<strong>Jump 2</strong>",</p>
<p>"<strong>Love!</strong>"])</p></td>
<td><p><strong>Place 3 has Valentine's day.</strong></p>
<p><strong>Cupid's last position was 3.</strong></p>
<p><strong>Cupid has failed 3 places.</strong></p></td>
<td><p><strong>Jump 1 -&gt;&gt; [10, 8, 10, 2]</strong></p>
<p><strong>Jump 2 -&gt;&gt; [10, 8, 10, 0] so we print "Place 3 has Valentine's day."</strong></p>
<p><strong>The following command is "Love!" so we print Cupid's last position and the outcome of his mission.</strong></p></td>
</tr>
<tr class="even">
<td><p><strong>([</strong>"<strong>2@4@2</strong>",</p>
<p>"<strong>Jump 2</strong>",</p>
<p>"<strong>Jump 2</strong>",</p>
<p>"<strong>Jump 8</strong>",</p>
<p>"<strong>Jump 3</strong>",</p>
<p>"<strong>Jump 1</strong>",</p>
<p>"<strong>Love!</strong>"])</p></td>
<td><p><strong>Place 2 has Valentine's day.</strong></p>
<p><strong>Place 0 has Valentine's day.</strong></p>
<p><strong>Place 0 already had Valentine's day.</strong></p>
<p><strong>Place 0 already had Valentine's day.</strong></p>
<p><strong>Cupid's last position was 1.</strong></p>
<p><strong>Cupid has failed 1 places.</strong></p></td>
<td></td>
</tr>
</tbody>
</table>

## **Problem 13 - Bonus Scoring System**

Create a program that calculates **bonus points** for each **student**
enrolled in a course. On the **first** line, you are going to receive
**the number of the students**. **On the second line**, you will receive
**the total number of lectures** in the course. The course has **an
additional bonus**, which you will receive **on the third line**. On the
following lines, you will be receiving the **count of attendances**
**for each student**.

The bonus is calculated with the following **formula**:

**{total bonus} = {student attendances} / {course lectures} \* (5 +
{additional bonus})**

Find the student with the **maximum bonus** and print them, along with
**his attendances,** in the following format:

**"Max Bonus: {max bonus points}."**

**"The student has attended {student attendances} lectures."**

Round the bonus points at the end to **the nearest larger number**.

## Input / Constrains

  - On the **first line,** you are going to receive the **number of the
    students** ??? an integer in the range \[0???50\]

  - On the **second line,** you will receive the **number of the
    lectures** ??? an integer number in the range \[0...50\].

  - On the **third line**, you will receive **the additional bonus** ???
    an integer number in the range \[0???.100\].

  - **On the following lines**, you will be receiving the **attendance
    of each student**.

  - There will **never** be **students with equal bonuses**.

## Output

  - Print the **maximum bonus points** and the **attendances** of the
    given student, **rounded** to the nearest **larger** number, scored
    by a student in this course in the format described above.

## JS Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'5', '25', '30',</p>
<p>'12', '19', '24',</p>
<p>'16', '20'</p>
<p>]</p></td>
<td><p>Max Bonus: 34.</p>
<p>The student has attended 24 lectures.</p></td>
</tr>
<tr class="even">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="odd">
<td>First, we receive the <strong>number of students</strong> enrolled in the course ??? <strong>5</strong>. The total count of the lectures is <strong>25,</strong> and the additional bonus is <strong>30</strong>. Then we calculate the bonus of the student with 12 attendances, which is <strong>16.8</strong>. We continue calculating <strong>each of the student's bonuses</strong>. The one <strong>with 24 attendances</strong> has the <strong>highest bonus ??? 33.6 (34 rounded)</strong>, so we print the appropriate message on the console.</td>
<td></td>
</tr>
<tr class="even">
<td><p>[</p>
<p>'10', '30', '14', '8',</p>
<p>'23', '27', '28', '15',</p>
<p>'17', '25', '26', '5',</p>
<p>'18'</p>
<p>]</p></td>
<td><p>Max Bonus: 18.</p>
<p>The student has attended 28 lectures.</p></td>
</tr>
</tbody>
</table>

## **Problem 14. Mu Online**

You have **initial health 100 and initial bitcoins 0**. You will be
given **a string representing the dungeon's rooms**. Each room is
separated with **'|'** (vertical bar): **"room1|room2|room3???"**

Each room contains **a command** and a **number**, separated by space.
The command can be:

  - **"potion"**
    
      - You are healed with the number in the second part. But your
        health **cannot exceed** your **initial health (100)**.
    
      - First print: **"You healed for {amount} hp."**
    
      - After that, print your current health: **"Current health:
        {health} hp."**

  - **"chest"**
    
      - You've found some bitcoins, the number in the second part.
    
      - Print: **"You found {amount} bitcoins."**

  - In **any other case,** you are **facing a monster**, which you will
    **fight**. The **second part of the room** contains the **attack**
    of the monster. You should remove the monster's attack from your
    health.
    
      - If you are not dead (health \<= 0), you've slain the monster,
        and you should print: **"You slayed {monster}."**
    
      - If you've died, print **"You died\! Killed by {monster}."** and
        your quest is over. Print the best room you've manage to reach:
        **"Best room: {room}"**

If you managed to **go through all the rooms** in the dungeon, print on
the **following three lines**:

**"You've made it\!"**

**"Bitcoins: {bitcoins}"**

**"Health: {health}"**

## Input / Constraints

You receive a **string** representing the dungeon's rooms, separated
with **'|'** (vertical bar): **"room1|room2|room3???"**.

## Output

Print the corresponding messages described above.

## JS Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>"rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"</td>
<td><p>You slayed rat.</p>
<p>You slayed bat.</p>
<p>You healed for 10 hp.</p>
<p>Current health: 80 hp.</p>
<p>You slayed rat.</p>
<p>You found 100 bitcoins.</p>
<p>You died! Killed by boss.</p>
<p>Best room: 6</p></td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td>"cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"</td>
<td><p>You slayed cat.</p>
<p>You healed ??for 10 hp.</p>
<p>Current health: 100 hp.</p>
<p>You slayed orc.</p>
<p>You found 10 bitcoins.</p>
<p>You slayed snake.</p>
<p>You found 110 bitcoins.</p>
<p>You've made it!</p>
<p>Bitcoins: 120</p>
<p>Health: 65</p></td>
</tr>
</tbody>
</table>

## **Problem 15. Inventory**

*As a young traveler, you gather items and craft new items.*

## Input / Constraints

You will receive a journal with some collecting items, separated with a
comma and a space (**", "**). After that, until receiving **"Craft\!"**
you will be receiving different commands split by **" - "**:

  - **"Collect - {item}"** - you should add the given item to your
    inventory. If the item already **exists**, you should **skip** this
    line.

  - **"Drop - {item}"** - you should remove the item from your inventory
    **if it exists**.

  - **"Combine Items - {old\_item}:{new\_item}"** - you should check
    **if the old item exists**. If so, **add** the new item **after**
    the **old one**. Otherwise, **ignore** the command.

  - **"Renew ??? {item}"** ??? if the given item exists, you should change
    its position and **put it last** in your inventory.

## Output

After receiving **"Craft\!"** print the items in your inventory,
separated by **", "**.

## JS Input / Output

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[</p>
<p>'Iron, Wood, Sword',</p>
<p>'Collect - Gold',</p>
<p>'Drop - Wood',</p>
<p>'Craft!'</p>
<p>]</p></td>
<td>Iron, Sword, Gold</td>
</tr>
<tr class="even">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="odd">
<td><p>[</p>
<p>'Iron, Sword',</p>
<p>'Drop - Bronze',</p>
<p>'Combine Items - Sword:Bow',</p>
<p>'Renew - Iron',</p>
<p>'Craft!'</p>
<p>]</p></td>
<td>Sword, Bow, Iron</td>
</tr>
</tbody>
</table>

## **Problem 16 - Black Flag** 

*Pirates are invading the sea, and you're tasked to help them plunder*

Create a program that checks if **target plunder** is **reached**.
First, you will receive how many **days** the pirating lasts. Then you
will receive how much the pirates **plunder for a day**. Last you will
receive the **expected plunder** at the end.

Calculate how much **plunder** the pirates manage to **gather**. Each
**day** they gather the **plunder**. Keep in mind that they attack more
ships every third day and add additional plunder to their total gain,
which is **50% of the daily plunder**. Every **fifth day** the pirates
encounter a warship, and after the battle, they **lose 30%** of their
**total plunder**.

If the gained plunder is **more or equal** to the target, print the
following:

**"Ahoy\! {totalPlunder} plunder gained."**

If the gained plunder is **less** than the target. Calculate the
**percentage left** and print the following:

**"Collected only {percentage}% of the plunder."**

Both numbers should be **formatted** to the **2<sup>nd</sup> decimal
place**.

## Input

  - On the **1<sup>st</sup> line,** you will receive the **days of the
    plunder** ??? an **integer number** in the range \[0???100000\]

  - On the **2<sup>nd</sup> line,** you will receive the **daily
    plunder** ??? an **integer number** in the range \[0???50\]

  - On the **3<sup>rd</sup> line,** you will receive the **expected
    plunder** ??? a **real number** in the range \[0.0???10000.0\]

## Output

  - In the end, print whether the plunder **was successful** or **not,**
    following the format **described above**.

## JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td>(["5",<br />
"40",<br />
"100"])</td>
<td>Ahoy! 154.00 plunder gained.</td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td>The days are 5, and the daily plunder is 40. On the third day, the total plunder is 120, and since it is a third day, they gain an additional 50% from the daily plunder, which adds up to 140. On the fifth day, the plunder is 220, but they battle with a warship and lose 30% of the collected cargo, and the total becomes 154. That is more than expected.</td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
</tr>
<tr class="even">
<td><p>(["10",</p>
<p>"20",</p>
<p>"380"])</p></td>
<td>Collected only 36.29% of the plunder.</td>
</tr>
</tbody>
</table>

## **Problem 17 - Treasure Hunt**

*The pirates need to carry a treasure chest safely back to the ship,
looting along the way.*

Create a program that **manages** the **state** of the **treasure
chest** along the way. On the **first line,** you will receive the
**initial loot** of the treasure chest, which is a **string** of
**items** separated by a **"|"**.

**"{loot<sub>1</sub>}|{loot<sub>2</sub>}|{loot<sub>3</sub>} ???
{loot<sub>n</sub>}"**

The following lines represent commands **until** **"Yohoho\!"** which
ends the treasure hunt:

  - **"Loot {item<sub>1</sub>} {item<sub>2</sub>}???{item<sub>n</sub>}":**
    
      - Pick up treasure loot along the way. Insert the items at the
        **beginning** of the chest.
    
      - If an item is **already** contained, **don't** insert it.

  - **"Drop {index}":**
    
      - **Remove** the loot at the given **position** and **add** it at
        the **end** of the treasure chest.
    
      - If the index is **invalid,** skip the command.

  - > **"Steal {count}":**
    
      - > Someone steals the **last count** loot items. If there are
        > **fewer items** than the given count, **remove as much** as
        > there are.
    
      - > Print the stolen items separated by **", "**:

**"{item<sub>1</sub>}, {item<sub>2</sub>}, {item<sub>3</sub>} ???
{item<sub>n</sub>}"**

In the end, output the **average treasure gain,** which is the **sum**
of all treasure items **length** divided by the **count** of all items
inside the chest **formatted** to the **second decimal** point:

**"Average treasure gain: {averageGain} pirate credits."**

If the chest is **empty,** print the following message:

**"Failed treasure hunt."**

## Input

  - On the **1<sup>st</sup> line,** you are going to receive the
    **initial treasure chest (loot separated by "|")**

  - On the following **lines**, until **"Yohoho\!"**, you will be
    receiving commands.

## Output

  - Print the output in the **format** **described** **above**.

## Constraints

  - The **loot items** will be strings containing any ASCII code.

  - The **indexes** will be integers in the range \[**-200**???**200**\]

  - The **count** will be an integer in the range \[**1**???.**100**\]

## JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["Gold|Silver|Bronze|Medallion|Cup",</p>
<p>"Loot Wood Gold Coins",</p>
<p>"Loot Silver Pistol",</p>
<p>"Drop 3",</p>
<p>"Steal 3",</p>
<p>"Yohoho!"])</p></td>
<td><p>Medallion, Cup, Gold</p>
<p>Average treasure gain: 5.40 pirate credits.</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>The first command <strong>"Loot Wood Gold Coins"</strong> adds <strong>Wood</strong> and <strong>Coins</strong> to the chest but <strong>omits</strong> Gold since it is already contained. The chest now has the following items:</p>
<p><strong>Coins Wood Gold Silver Bronze Medallion Cup</strong></p>
<p>The <strong>second</strong> command adds <strong>only Pistol</strong> to the chest</p>
<p>The <strong>third</strong> command <strong>"Drop 3"</strong> removes the <strong>Gold</strong> from the chest, but immediately adds it at the <strong>end</strong>:</p>
<p><strong>Pistol Coins Wood Silver Bronze Medallion Cup Gold</strong></p>
<p>The <strong>fourth</strong> command <strong>"Steal 3"</strong> removes the <strong>last 3</strong> items <strong>Medallion</strong>, <strong>Cup</strong>, <strong>Gold</strong> from the chest and prints them.</p>
<p>In the end calculate the average treasure gain which is the sum of all items length Pistol(<strong>6</strong>) + Coins(<strong>5</strong>) + Wood(<strong>4</strong>) + Silver(<strong>6</strong>) + Bronze(<strong>6</strong>) = <strong>27</strong> and <strong>divide</strong> it by the count 27 / 5 = <strong>5.4</strong> and format it to the <strong>second decimal</strong> point.</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input Output</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>(["Diamonds|Silver|Shotgun|Gold",</p>
<p>"Loot Silver Medals Coal",</p>
<p>"Drop -1",</p>
<p>"Drop 1",</p>
<p>"Steal 6",</p>
<p>"Yohoho!"])</p></td>
<td><p>Coal, Diamonds, Silver, Shotgun, Gold, Medals</p>
<p>Failed treasure hunt.</p></td>
</tr>
</tbody>
</table>

## **Problem 18 - Man-O-War**

*The pirates encounter a huge Man-O-War at sea.*

Create a program that **tracks** the **battle** and either chooses a
**winner** or prints a **stalemate**. On the **first line,** you will
receive the **status** of the **pirate ship**, which is a **string**
representing **integer sections** separated by **"\>"**. On **the second
line,** you will receive the **same** type of status, but for the
**warship**:

**"{section<sub>1</sub>}\>{section<sub>2</sub>}\>{section<sub>3</sub>}???
{section<sub>n</sub>}"**

On the **third line,** you will receive the **maximum health capacity**
a section of the ship can reach.

The following lines represent commands **until** **"Retire"**:

  - **"Fire {index} {damage}" - the** pirate ship **attacks** the
    warship with the **given damage** at that section. Check if the
    **index is valid** and if not, **skip** the command. If the section
    **breaks** (health \<= 0) the warship **sinks**, print the following
    and **stop** the program: **"You won\! The enemy ship has sunken."**

  - **"Defend {startIndex} {endIndex} {damage}" -** the warship
    **attacks** the pirate ship with the **given damage** at that
    **range (indexes are inclusive)**. Check if both **indexes are
    valid** and if not, **skip** the command. If the section **breaks**
    (health \<= 0) the pirate ship **sinks**, print the following and
    **stop** the program:

**"You lost\! The pirate ship has sunken."**

  - **"Repair {index} {health}" -** the crew **repairs** a section of
    the **pirate ship** with the **given health**. Check if the **index
    is valid** and if not, **skip** the command. The health of the
    section **cannot** exceed the **maximum health capacity**.

  - **"Status" -** prints the **count** of all sections of the **pirate
    ship** that need repair soon, which are all sections that are
    **lower than 20%** of the **maximum** **health capacity**. Print the
    following:

**"{count} sections need repair."**

In the end, if a **stalemate** occurs, print the **status** of **both**
ships, which is the **sum** of their individual sections, in the
following format:

**"Pirate ship status: {pirateShipSum}**

**Warship status: {warshipSum}"**

## Input

  - On the **1<sup>st</sup> line,** you are going to receive the
    **status of the pirate ship (integers separated by '\>')**

  - **On the 2<sup>nd</sup> line, you are going to receive the status of
    the warship**

  - On the **3<sup>rd</sup> line,** **you will** receive the **maximum
    health** a section of a ship can reach.

  - On the following **lines**, until **"Retire"**, you will be
    receiving commands.

## Output

  - Print the output in the **format** **described** **above**.

## Constraints

  - The **section numbers** will be integers in the range
    \[**1**???.**1000**\]

  - The **indexes** will be integers \[**-200**???.**200**\]

  - The **damage** will be an integer in the range \[**1**???.**1000**\]

  - The **health** will be an integer in the range \[**1**???.**1000**\]

## JS Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["12&gt;13&gt;11&gt;20&gt;66",</p>
<p>"12&gt;22&gt;33&gt;44&gt;55&gt;32&gt;18",</p>
<p>"70",</p>
<p>"Fire 2 11",</p>
<p>"Fire 8 100",</p>
<p>"Defend 3 6 11",</p>
<p>"Defend 0 3 5",</p>
<p>"Repair 1 33",</p>
<p>"Status",</p>
<p>"Retire"])</p></td>
<td><p>2 sections need repair.</p>
<p>Pirate ship status: 135</p>
<p>Warship status: 205</p></td>
</tr>
<tr class="odd">
<td><strong>Comments</strong></td>
<td></td>
</tr>
<tr class="even">
<td><p>First, we receive the command "<strong>Fire 2 11</strong>", and damage the warship at section index 2, which is currently 33, and after reduction, the status of the warship is the following:</p>
<p><strong>12 22 22 44 55 32 18</strong></p>
<p>The <strong>second</strong> and <strong>third</strong> commands have <strong>invalid indexes</strong>, so we skip them.</p>
<p>The <strong>fourth</strong> command, <strong>"Defend 0 3 5"</strong> damages <strong>4 sections</strong> of the pirate ship with <strong>5,</strong> which results in the following states:</p>
<p><strong>7 8 6 15 66</strong></p>
<p>The <strong>fifth</strong> command, <strong>"Repair 1 33"</strong> repairs the pirate ship section and adds <strong>33 health</strong> to the current <strong>8,</strong> which results in <strong>41</strong></p>
<p>Only <strong>2 sections</strong> of the pirate ship (<strong>7</strong> and <strong>6</strong>) need repair soon.</p>
<p>In the end, there is a <strong>stalemate,</strong> so we print both ship statuses (<strong>sum</strong> of all sections).</p></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td><p>(["2&gt;3&gt;4&gt;5&gt;2",</p>
<p>"6&gt;7&gt;8&gt;9&gt;10&gt;11",</p>
<p>"20",</p>
<p>"Status",</p>
<p>"Fire 2 3",</p>
<p>"Defend 0 4 11",</p>
<p>"Repair 3 18",</p>
<p>"Retire"])</p></td>
<td><p>3 sections need repair.</p>
<p>You lost! The pirate ship has sunken.</p></td>
</tr>
</tbody>
</table>
