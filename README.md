
# Simon’s Sweet Shop Challenge

Simon’s Sweet Shop (SSS) is a confectionery wholesaler that sells sweets in a variety of pack sizes. They currently have 5 different size packs - 250, 500, 1000, 2000 and 5000. Their customers can order any amount of sweets they wish but they will only ever be sold full packs. They recently changed their pack sizes and may change them again in future depending on demand.

## Requirements

Build a solution that will enable SSS to send out packs of sweets with as little
wastage as possible for any given order size. In order to achieve this, the
following rules should be followed.
1. Only whole packs can be sent. Packs cannot be broken open.
2. Within the constraints of Rule 1 above, send out no more Sweets than
necessary to fulfil the order.
3. Within the constraints of Rules 1 & 2 above, send out as few packs as
possible to fulfil each order.
The solution should also be flexible enough to add or remove pack sizes as well
as change current pack sizes with minimal adjustments to the program.

## Definitions

The table below displays correct and incorrect outcomes of a few example
orders. You can use this as a guide to test your solution.

| Sweets ordered  | Correct solution | Incorrect solution/s |
| ------------- | ------------- | ------------- |
| 1  | 1 x 250 | 1 x 500 = too many sweets  |
| 250 | 1 x 250  |  1 x 500 = too many sweets |
| 251 | 1 x 500  |  2 x 250 = can send less packs with available pack sizes |
| 501 | 1 x 500 / 1 x 250  | 1 x 1,000 = too many sweets OR 3 x 250 = can send less packs with available pack sizes |
| 12,001  | 2 x 5,000 / 1 x 2,000 / 1 x 250 | 3 x 5,000 = too many sweets|
