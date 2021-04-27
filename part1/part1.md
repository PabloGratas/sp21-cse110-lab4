Part 1a:
1. values added: 20
2. final result: 20
3. values added: 20
4. [ERROR] We get an error because the scope of result is only in the if block of function sumValues, so the final result log doesn't "know" what result is.
5. [ERROR] We get an error because result is a constant, and after being initialized as 0, can not be changed again as is attempted on line 7.
6. [ERROR] Same as above.

Part 1b:

1. 3. var i means i exists within the scope of the discountPrices function, and 3 is the value of i after the loop exit condition occurs.
2. 150. var discountedPrice means discountedPrice exists within the scope of the discountPrices function, and 150 (300 * (1-0.5)) is the value of discounted price after the last for loop iteration.
3. Same as above. finalPrice is just discountedPrice but rounded within 1 cent, which isn't relevant here. Both variables have the same scope.
4. [50, 100, 150]. The function returns the three price input with the 50% discount. There are no bugs that impede on the functionality so the program runs as expected.
5. [ERROR]. i only exists within the scope of the for block, so the console.log is outside of the scope.
6. [ERROR]. Same as above, discountedPrice only exists within the scope of the for block.
7. 150. The scope of finalPrice is the whole discountPrices function, so there are no issues with scope, and the functionality runs as expected from question 2 of this part.
8. [50, 100, 150]. The function as written has no scope issues and runs as expected from question 4 of this part.
9. [ERROR]. i only exists within the scope of the for block, so the console.log is outside of the scope.
10. 3. length is never re-assigned and has the scope of the whole discountPrices function, so we have no issues printing it.
11. [50, 100, 150]. The rounding line from previous versions makes no difference to these inputs. discounted can be mutated with push, just not reassigned, so the functionality works. Everything else works as expected.
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. 32. 2 is typecast to string and appended to string '3'.
    B. 1. string '3' is typecast to int and 2 is subtracted from it.
    C. 3. null gets converted to zero for additon.
    D. 3null. null gets typecast to string and has value 'null', which is appended to string '3'.
    E. 4. true is typecast to int and has value 1, which is added to int 3.
    F. 0. because of the addition false gets typecast to int of value 0, same with null, which gives us 0 + 0 which is equal to 0.
    G. Similar to D. undefined gets typecast to string of value 'undefined'.
    H. NaN. Because of subtraction, JS typecasts undefined to int, but its value is NaN, which means not a number.
14. A. true. '2' is typecast to int of value 2 since '2' and 1 are different types. 2>1 is true.
    B. false. '2' is larger then '12' alphabetically.
    C. true. '2' is typecast to int of value 2 since '2' and 2 are different types. 2 == 2 is true.
    D. false. Types aren't equal so the strict equality always fails.
    E. false. since the types aren't equal, true gets typecast to type int of value 1. 1 == 2 is false.
    F. true. Boolean(2) typecasts 2 to true, which is equal in type and value to true.
15. == checks for equivalency in value post-typecasting to match types. === checks for equivalency in value without typecasting, and returns false if the types aren't the same.
16. See "part1b-question16.js"
17. [2, 4, 6]. For each element of the parameter array, we put it into the doSomething function that multiplies the element by two, returns it, then that new value is pushed to the newArr that gets returned to the modifyArray call.
18. See "part1b-question18.js"
19. 1 4 3 2 (each on a new line).
