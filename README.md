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
