// --- SECTION 1: THE BOARD GRAPH ---
const questionBank=[
    {
        "question": "1. If S be the sum, P the product and R be the sum of the reciprocals of n terms of a GP, then P<sup>2</sup> is equal to",
        "options": [
            "S/R",
            "R/S",
            "(R/S)<sup>n</sup>",
            "(S/N)<sup>n</sup>"
        ],
        "correctIndex": 3
    },
    {
        "question": "2. If A be one A.M. and p,q be two G.M.'s between two numbers, then 2A is equal to",
        "options": [
            "(p<sup>3</sup>+q<sup>3</sup>)/pq",
            "(p<sup>3</sup>-q<sup>3</sup>)/pq",
            "(p<sup>2</sup>+q<sup>2</sup>)/2",
            "(pq)/2"
        ],
        "correctIndex": 0
    },
    {
        "question": "3. In a G.P, if the (m+n)<sup>th</sup> term is p and (m-n)<sup>th</sup> term is q, then its m<sup>th</sup> term is",
        "options": [
            "0",
            "pq",
            "√pq",
            "0.5(p+q)"
        ],
        "correctIndex": 2
    },
    {
        "question": "4. If (4<sup>3</sup>)(4<sup>6</sup>)(4<sup>9</sup>)(4<sup>12</sup>)...(4<sup>3x</sup>) = (0.0625)<sup>-54</sup>, the value of x is",
        "options": [
            "7",
            "8",
            "9",
            "10"
        ],
        "correctIndex": 3
    },
    {
        "question": "5. The sum of first two terms of a G.P is 1 and every term is twice the previous term. The first term of the G.P. is",
        "options": [
            "2/3",
            "1/3",
            "3/4",
            "8/9"
        ],
        "correctIndex": 1
    },
    {
        "question": "6. The number of ways in which the letters of the word 'CONSTANT' can be arranged without changing the relative positions of the vowels and consonants is",
        "options": [
            "360",
            "256",
            "444",
            "0"
        ],
        "correctIndex": 0
    },
    {
        "question": "7. The sum of the digits in unit place of all the numbers formed with the help of 3,4,5 and 6 taken all at a time is",
        "options": [
            "432",
            "108",
            "36",
            "18"
        ],
        "correctIndex": 1
    },
    {
        "question": "8. Sum of n terms of the series √2 + √6 + √18 + ...",
        "options": [
            "[n(n+1)]/2",
            "2n(n+1)",
            "[n(n+1)]/√2",
            "1"
        ],
        "correctIndex": 2
    },
    {
        "question": "9. If tan x = x - (1/4x), then sec x - tan x is equal to",
        "options": [
            "-2x, 1/(2x)",
            "-1/(2x), 2x",
            "2x",
            "2x, 1/(2x)"
        ],
        "correctIndex": 0
    },
    {
        "question": "10. If tan A + cot A = 4, then tan<sup>4</sup>A + cot<sup>4</sup>A is equal to",
        "options": [
            "110",
            "191",
            "80",
            "194"
        ],
        "correctIndex": 3
    },
    {
        "question": "11. If cosec x + cot x = 11/2, then tan x =",
        "options": [
            "21/22",
            "15/16",
            "44/117",
            "117/43"
        ],
        "correctIndex": 2
    },
    {
        "question": "12. The value of sin 50° - sin 70° + sin 10° is equal to",
        "options": [
            "1",
            "0",
            "2",
            "2"
        ],
        "correctIndex": 1
    },
    {
        "question": "13. What is the formula for 2cos A cos B?",
        "options": [
            "cos(A+B) + cos(A+B)",
            "cos(A-B) + cos(A-B)",
            "cos(A+B) + cos(A - B)",
            "sin(A+B) + sin(A-B)"
        ],
        "correctIndex": 2
    },
    {
        "question": "14. If sin α + sin β = a and cos α - cos β = b, then tan((α-β)/2) =",
        "options": [
            "-a/b",
            "-b/a",
            "√(a<sup>2</sup>+b<sup>2</sup>)",
            "None of these"
        ],
        "correctIndex": 1
    },
    {
        "question": "15. A student was asked to prove a statement P(n) by induction. He proved P(k+1) is true whenever P(k) is true for all k>5∈N and also P(5) is true. On the basis of this he could conclude that P(n) is true...",
        "options": [
            "for all n∈N",
            "for all n>5",
            "for all n>=5",
            "for all n<5"
        ],
        "correctIndex": 2
    },
    {
        "question": "16. Let A={1,2,3} and B={4,5,6}. A relation R from A to B is defined by R={(x,y)|x∈A, y∈B, and x<y}. What is the Range of the relation R?",
        "options": [
            "{4,5,6}",
            "{1,2,3,4,5,6}",
            "{1,2,3}",
            "{4,5}"
        ],
        "correctIndex": 0
    },
    {
        "question": "17. Let A={1,2,3,...,15}. A relation R is defined on A by R={(x,y)|x,y∈A and y=x+5}. What is the Domain of R?",
        "options": [
            "{1,2,3,...,15}",
            "{6,7,8,...,15}",
            "{1,2,3,4,5}",
            "{1,2,3,...,10}"
        ],
        "correctIndex": 3
    },
    {
        "question": "18. Let A={1,2,3} and B={5,6,7}. A relation R from A to B is given by R={(1,5),(2,6),(1,7),(3,6)}. Is R a function from A to B? If not, why?",
        "options": [
            "No, because the element 1∈A is related to two different elements in B, namely 5 and 7.",
            "Yes, because every element of A is mapped to an element in B.",
            "No, because 3∈A is related to 6, and 2∈A is also related to 6.",
            "Yes, because the Range {5,6,7} is equal to the Codomain B."
        ],
        "correctIndex": 0
    },
    {
        "question": "19. Let A={1,2,3}. A relation R on A is defined as R={(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2)}. Which property of an equivalence relation (Reflexive, Symmetric, Transitive) is R missing?",
        "options": [
            "None, it is an Equivalence Relation",
            "Symmetric",
            "Transitive",
            "Reflexive"
        ],
        "correctIndex": 2
    },
    {
        "question": "20. If set P has 4 elements and set Q has 3 elements, how many distinct relations can be defined from P to Q?",
        "options": [
            "2<sup>12</sup>",
            "2<sup>4</sup>",
            "12",
            "4<sup>3</sup>"
        ],
        "correctIndex": 0
    },
    {
        "question": "21. How many different arrangements can be made using all the letters of the word 'RHINO'?",
        "options": [
            "25",
            "60",
            "1",
            "120"
        ],
        "correctIndex": 3
    },
    {
        "question": "22. How many 3-digit numbers can be formed from the digits 1,2,3,4,5 (without repetition) if the formed number must be odd?",
        "options": [
            "30",
            "36",
            "60",
            "24"
        ],
        "correctIndex": 1
    },
    {
        "question": "23. In how many ways can 6 boys and 5 girls be arranged in a row so that they stand alternately?",
        "options": [
            "11!",
            "6! × 5!",
            "2 × (6! × 5!)",
            "5! × 5!"
        ],
        "correctIndex": 1
    },
    {
        "question": "24. How many distinct arrangements of the letters of the word 'MATHEMATICS' are possible?",
        "options": [
            "11!/3!",
            "11!",
            "11!/(2!×2!×2!)",
            "11!/(2!×2!)"
        ],
        "correctIndex": 2
    },
    {
        "question": "25. How many ways can the letters of the word 'DAUGHTER' be arranged so that the vowels (A, U, E) always come together?",
        "options": [
            "4320",
            "8! × 3!",
            "8!",
            "720"
        ],
        "correctIndex": 0
    },
    {
        "question": "26. If <sup>n</sup>C<sub>4</sub>, <sup>n</sup>C<sub>5</sub>, and <sup>n</sup>C<sub>6</sub> are in an Arithmetic Progression (A.P.), what is the value of n?",
        "options": [
            "17",
            "15",
            "16",
            "14"
        ],
        "correctIndex": 1
    },
    {
        "question": "27. A cricket team of 11 players is to be selected from 15 players. If a particular player is never selected and another particular player is always selected, how many ways can the team be formed?",
        "options": [
            "<sup>13</sup>C<sub>10</sub>",
            "<sup>15</sup>C<sub>11</sub> - <sup>13</sup>C<sub>11</sub>",
            "<sup>14</sup>C<sub>10</sub>",
            "<sup>15</sup>C<sub>11</sub>"
        ],
        "correctIndex": 0
    },
    {
        "question": "28. The number of diagonals in a polygon is 44. How many sides does the polygon have?",
        "options": [
            "11",
            "12",
            "10",
            "9"
        ],
        "correctIndex": 0
    },
    {
        "question": "29. If <sup>n</sup>C<sub>r-1</sub> = 36, <sup>n</sup>C<sub>r</sub> = 84, and <sup>n</sup>C<sub>r+1</sub> = 126, then the value of r is?",
        "options": [
            "10",
            "4",
            "3",
            "9"
        ],
        "correctIndex": 2
    },
    {
        "question": "30. A student needs to choose 6 subjects from 2 groups, Group A and Group B, such that he must choose at least 2 subjects from each group. Group A has 4 subjects and Group B has 5 subjects. The number of ways to make the selection is?",
        "options": [
            "70",
            "80",
            "94",
            "126"
        ],
        "correctIndex": 1
    },
    {
        "question": "31. Solve the inequality (2x-3)/4 + 9 ≥ 3 + 4x/3 for x∈R.",
        "options": [
            "x≥9",
            "x≤9",
            "x≥63/10",
            "x≤63/10"
        ],
        "correctIndex": 3
    },
    {
        "question": "32. The solution set for the system of inequations: 3x-7 < 5+x AND 11-5x ≤ 1 is?",
        "options": [
            "x<6",
            "x≤2",
            "x>6",
            "x≥2 and x<6"
        ],
        "correctIndex": 3
    },
    {
        "question": "33. If (5-2x)/3 ≤ x/6 - 5, then x belongs to the interval?",
        "options": [
            "(-∞, -8]",
            "(8, ∞)",
            "[8, ∞)",
            "(-∞, 8]"
        ],
        "correctIndex": 2
    },
    {
        "question": "34. Find the number of integral solutions to the compound inequality -8 < 3x+1 < 10?",
        "options": [
            "4",
            "5",
            "7",
            "6"
        ],
        "correctIndex": 1
    },
    {
        "question": "35. The number of non-negative integer solutions to the inequality 5x/4 + 3/8 > x/2 + 2?",
        "options": [
            "1",
            "3",
            "2",
            "Infinite"
        ],
        "correctIndex": 3
    }
];

/*const questionBank=[
    {
        "question": "1. The relation R = {[1,3], [4, 2], [2, 4], [2, 3], [3, 1]} on set A = {1,2,3,4} is",
        "options": [
            "reflexive",
            "not symmetric",
            "transitive",
            "identity"
        ],
        "correctIndex": 1
    },
    {
        "question": "2. The relation R = {(3,3), (6,6), (9,9), (12,12), (6,12), (3,9), (3,12), (3,6)} on set A = {3, 6, 9, 12} is",
        "options": [
            "reflexive only",
            "reflexive and symmetric only",
            "reflexive and transitive only",
            "an equivalence relation"
        ],
        "correctIndex": 2
    },
    {
        "question": "3. Let A = {1,2,3} and consider the relation R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3), (1, 3)}. Then R is",
        "options": [
            "reflexive but not symmetric",
            "reflexive but not transitive",
            "symmetric and transitive",
            "neither symmetric nor transitive"
        ],
        "correctIndex": 0
    },
    {
        "question": "4. If a relation R on the set A = [1,2,3] be defined by R = {(1,2)}, then R is",
        "options": [
            "reflexive",
            "transitive",
            "symmetric",
            "none of these"
        ],
        "correctIndex": 1
    },
    {
        "question": "5. Let f:R->R be defined as f(x) = cos([π]x) + cos([-π]x) then f(π/2) =",
        "options": [
            "0",
            "-1",
            "1",
            "2"
        ],
        "correctIndex": 2
    },
    {
        "question": "6. If f(x) = cos([e]x) + cos([-e]x), then f(π/4) =",
        "options": [
            "1",
            "0",
            "1/√2",
            "-1/√2"
        ],
        "correctIndex": 3
    },
    {
        "question": "7. Let f:R->R be defined as f(x) = 2x + |x|, then f(2x) + f(-x) - f(x) =",
        "options": [
            "2x",
            "2|x|",
            "-2x",
            "-2|x|"
        ],
        "correctIndex": 1
    },
    {
        "question": "8. Let f:R->R be defined by f(x) = 1/x for all x in R, Then f is",
        "options": [
            "one-one",
            "onto",
            "bijective",
            "none of the above"
        ],
        "correctIndex": 3
    },
    {
        "question": "9. If the set A contains 5 elements and set B contains 6 elements, then the number of one-one mappings from A to B is",
        "options": [
            "720",
            "120",
            "6<sup>5</sup>",
            "5<sup>6</sup>"
        ],
        "correctIndex": 0
    },
    {
        "question": "10. If the set A contains 5 elements and set B contains 6 elements, then the number of one-one and onto mappings from A to B is",
        "options": [
            "720",
            "120",
            "0",
            "none of these"
        ],
        "correctIndex": 2
    },
    {
        "question": "11. Which of the following functions from Z to Z is a bijection?",
        "options": [
            "f(x) = x<sup>3</sup>",
            "g(x) = x + 2",
            "f(x) = 2x + 1",
            "f(x) = x<sup>2</sup> + 1"
        ],
        "correctIndex": 1
    },
    {
        "question": "12. The domain of sin<sup>-1</sup>(2x) is",
        "options": [
            "[0,1]",
            "[-1,1]",
            "[-1/2, 1/2]",
            "[-2, 2]"
        ],
        "correctIndex": 2
    },
    {
        "question": "13. The domain of cos<sup>-1</sup>(3x - 2) is",
        "options": [
            "(1/3, 2)",
            "[1/3, 1]",
            "[-1, 1]",
            "[-1/3, 1/3]"
        ],
        "correctIndex": 1
    },
    {
        "question": "14. The domain of the function cos<sup>-1</sup>(2x - 1) is",
        "options": [
            "[0,1]",
            "[-1,1]",
            "(-1, 1)",
            "[0, π]"
        ],
        "correctIndex": 0
    },
    {
        "question": "15. The value of cos<sup>-1</sup>(cos(3π/2)) is equal to",
        "options": [
            "π/2",
            "3π/2",
            "5π/2",
            "7π/2"
        ],
        "correctIndex": 0
    },
    {
        "question": "16. If tan<sup>-1</sup>(x) + tan<sup>-1</sup>(y) = 4π/5, then cot<sup>-1</sup>(x) + cot<sup>-1</sup>(y) equals",
        "options": [
            "π/5",
            "2π/5",
            "3π/5",
            "π"
        ],
        "correctIndex": 0
    },
    {
        "question": "17. If 3tan<sup>-1</sup>(x) + cot<sup>-1</sup>(x) = π, then x equals",
        "options": [
            "0",
            "1",
            "-1",
            "1/2"
        ],
        "correctIndex": 1
    },
    {
        "question": "18. If A and B are two matrices of orders 3 × m and 3 × n respectively, and m=n, then the order of (5A-2B) is",
        "options": [
            "m×3",
            "3×3",
            "m×n",
            "3×n"
        ],
        "correctIndex": 3
    },
    {
        "question": "19. If A = [a<sub>ij</sub>] is a square matrix of order 3 such that a<sub>ij</sub> = i<sup>2</sup> - j<sup>2</sup>, then A is",
        "options": [
            "a skew-symmetric matrix",
            "a symmetric matrix",
            "a scalar matrix",
            "an identity matrix"
        ],
        "correctIndex": 0
    },
    {
        "question": "20. The number of elements below the diagonal of a square matrix of order n is",
        "options": [
            "n(n+1)/2",
            "n(n-1)/2",
            "(n-1)(n-2)/2",
            "(n+1)(n+2)/2"
        ],
        "correctIndex": 1
    },
    {
        "question": "21. If A is a square matrix such that A<sup>2</sup>=I, then (A-I)<sup>3</sup> + (A+I)<sup>3</sup> - 7A is equal to",
        "options": [
            "A",
            "I-A",
            "I+A",
            "3A"
        ],
        "correctIndex": 0
    },
    {
        "question": "22. For any two matrices A and B,",
        "options": [
            "AB = BA",
            "AB ≠ BA",
            "AB = O",
            "none of these"
        ],
        "correctIndex": 1
    },
    {
        "question": "23. If A and B are any two events such that P(A) + P(B) - P(A∩B) = P(A) then",
        "options": [
            "P(B/A) = 1",
            "P(B/A) = 0",
            "P(A/B) = 1",
            "P(A/B) = 0"
        ],
        "correctIndex": 2
    },
    {
        "question": "24. If P(x=y) = y/15 for y=1,2,3,4,5, and 0 otherwise, then P(x=1 or 2) is",
        "options": [
            "1/15",
            "2/15",
            "1/5",
            "None of these"
        ],
        "correctIndex": 2
    },
    {
        "question": "25. Three distinct numbers are selected from First 100 natural numbers. The probability that all three are divisible by 2 and 3 is",
        "options": [
            "9/25",
            "4/35",
            "4/55",
            "4/1155"
        ],
        "correctIndex": 3
    },
    {
        "question": "26. The objective function of a linear programming problem is",
        "options": [
            "a function to be expanded",
            "a function to be optimized",
            "a relation between the variables",
            "None of these"
        ],
        "correctIndex": 1
    },
    {
        "question": "27. The maximum value of the objective function Z = 5x + 10y subject to the constraints x+2y ≤ 120, x+y ≥ 60, x-2y ≥ 0, x ≥ 0, y ≥ 0 is",
        "options": [
            "300",
            "600",
            "400",
            "800"
        ],
        "correctIndex": 1
    },
    {
        "question": "28. The maximum value of z = 4x + 2y subject to the constraints 2x+3y ≤ 18, x+y ≥ 10, x, y ≤ 0 is",
        "options": [
            "36",
            "40",
            "30",
            "None of these"
        ],
        "correctIndex": 3
    },
    {
        "question": "29. In equation 3x - y ≥ 3 and 4x - 4y > 4",
        "options": [
            "Have solution for positive x and y",
            "Have no solution for positive x and y",
            "Have solution for all x",
            "Have solution for all y"
        ],
        "correctIndex": 0
    },
    {
        "question": "30. The maximum value of Z = 3x + 4y subjected to contraints x+y ≤ 40, x+2y ≤ 60, x ≥ 0 and y ≥ 0 is",
        "options": [
            "120",
            "140",
            "100",
            "160"
        ],
        "correctIndex": 1
    },
    {
        "question": "31. ∫dx/(1+cosx) =",
        "options": [
            "tan(x/2) + k",
            "1/2 tan(x/2) + k",
            "2 tan(x/2) + k",
            "tan<sup>2</sup>(x/2) + k"
        ],
        "correctIndex": 0
    },
    {
        "question": "32. ∫(1+logx)<sup>2</sup>/(1+x)<sup>2</sup> dx =",
        "options": [
            "1/3(1+logx)<sup>3</sup> + c",
            "1/2(1+logx)<sup>2</sup> + c",
            "log(log(1+x)) + 2",
            "None of these"
        ],
        "correctIndex": 0
    },
    {
        "question": "33. The function f(x) = (4-x<sup>2</sup>)/(4x-x<sup>3</sup>) is",
        "options": [
            "discontinuous at only one point at x=0",
            "discontinuous at exactly two points",
            "discontinuous at exactly three points",
            "None of these"
        ],
        "correctIndex": 2
    },
    {
        "question": "34. The set of points where the function f given by f(x) = |2x-1|sin(x) is differentiable is",
        "options": [
            "R",
            "R - {1/2}",
            "(0, ∞)",
            "None of these"
        ],
        "correctIndex": 1
    },
    {
        "question": "35. The function f(x) = cot(x) is discontinuous on the set",
        "options": [
            "{x = nπ, n ∈ Z}",
            "{x = 2nπ, n ∈ Z}",
            "{x = (2n+1)π/2, n ∈ Z}",
            "{x = nπ/2, n ∈ Z}"
        ],
        "correctIndex": 0
    },
    {
        "question": "36. If f(x) = x<sup>2</sup>sin(1/x), where x ≠ 0, then the value of the function f(x) at x=0, so that the function is continuous at x=0 is",
        "options": [
            "0",
            "-1",
            "1",
            "None of these"
        ],
        "correctIndex": 0
    },
    {
        "question": "37. The area of the region bounded by the curve x<sup>2</sup>=4y and the straight line x=4y-2 is",
        "options": [
            "3/8 sq. units",
            "5/8 sq. units",
            "7/8 sq. units",
            "9/8 sq. units"
        ],
        "correctIndex": 3
    },
    {
        "question": "38. Area of the region in the first quadrant enclosed by the x-axis, the line y=x and the circle x<sup>2</sup>+y<sup>2</sup>=32 is",
        "options": [
            "16π sq. units",
            "4π sq. units",
            "32π sq. units",
            "24π sq. units"
        ],
        "correctIndex": 1
    },
    {
        "question": "39. The area of the region bounded by parabola y<sup>2</sup>=x and the straight line 2y=x is",
        "options": [
            "4/3 sq. unit",
            "1 sq. unit",
            "2/3 sq. units",
            "1/3 sq. units"
        ],
        "correctIndex": 0
    },
    {
        "question": "40. Area of the region bounded by the curve y=cos(x) between x=0 and x=π is",
        "options": [
            "2 sq. units",
            "4 sq. units",
            "3 sq. units",
            "1 sq. units"
        ],
        "correctIndex": 0
    },
    {
        "question": "41. Number of divisors of the form 4n+2, n≥0 of the integer 240 is",
        "options": [
            "4",
            "8",
            "10",
            "3"
        ],
        "correctIndex": 0
    },
    {
        "question": "42. Number of integral values in the domain of function f(x) = sin<sup>-1</sup>|(x<sup>2</sup>-4)/(3x)| is",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correctIndex": 3
    },
    {
        "question": "43. Consider a real-valued function f(x) = √(sin<sup>-1</sup>x+2) + √(1-sin<sup>-1</sup>x). The domain of definition of f(x) is",
        "options": [
            "[-1, 1]",
            "[sin(1), 1]",
            "[-1, sin(1)]",
            "[-1, 0]"
        ],
        "correctIndex": 2
    },
    {
        "question": "44. If x=α, y=β is a solution of the equation 12sin(x) + 5cos(x) = 2y<sup>2</sup>-8y+21, then the value of (2β+1)tan(α) is",
        "options": [
            "8",
            "9",
            "12",
            "15"
        ],
        "correctIndex": 2
    },
    {
        "question": "45. Seven people leave their bags outside a temple and after returning picked one bag each at random. In how many ways at least one and at most three of them get their correct bags?",
        "options": [
            "<sup>7</sup>C<sub>4</sub>⋅9 + <sup>7</sup>C<sub>5</sub>.44 + <sup>7</sup>C<sub>1</sub>⋅265",
            "<sup>7</sup>C<sub>4</sub>⋅265 + <sup>7</sup>C<sub>5</sub>⋅9 + <sup>7</sup>C<sub>7</sub>⋅44",
            "<sup>7</sup>C<sub>5</sub>⋅9 + <sup>7</sup>C<sub>2</sub>⋅44 + <sup>7</sup>C<sub>1</sub>⋅265",
            "None of these"
        ],
        "correctIndex": 0
    },
    {
        "question": "46. Range of the function f(x) = cos<sup>-1</sup>(1/(e<sup>x</sup>+e<sup>-x</sup>)) is",
        "options": [
            "(0, π)",
            "[π/6, π/2)",
            "[π/3, π/2)",
            "[π/2, 2π/3)"
        ],
        "correctIndex": 2
    },
    {
        "question": "47. When 1! + 2! + 3! + ... + 25! is divided by 7, what will be the remainder?",
        "options": [
            "0",
            "1",
            "5",
            "None of these"
        ],
        "correctIndex": 2
    }
]*/ 




/*const questionBank = [
    // POLYNOMIAL (Class IX) Quiz
    { question: "1.The zeros of the polynomial p(x) = 3x^2 - 1 are", options: ["1/3 and 3", "1/√3 and √3", "-1/√3 and √3", "1/√3 and -1/√3"], correctIndex: 3  },
    { question: "2.If (x + 2) and (x – 1) are factors of the polynomial p(x) = x^3 + 10x^2 + mx + n then m and n are", options: ["m = 5, n = –3", "m = 7, n= –18", "m = 17, n= –8", "m = 23, n= –19"], correctIndex: 1 },
    { question: "3.If (x + 5) is a factor of p(x) = x^2 – 20x + 5k then k = ?", options: ["–5", "5", "3", "–3"], correctIndex: 1 },
    { question: "4.Which of the following is a binomial?", options: ["x^3 + x + 3", "x^2 + 4", "2x^2", "x + 3 + 1/x"], correctIndex: 1 },
    { question: "5.If p(x) = x + 4 then p(x) + p(–x) = ?", options: ["0", "4", "2x", "8"], correctIndex: 3 },
    { question: "6.If p(x) = 5x – 4x^2 + 3 then p(–1) = ?", options: ["2", "–2", "–6", "6"], correctIndex: 2 },
    { question: "7.A polynomial containing one term consisting of a nonzero constant, is called as", options: ["Constant polynomial", "Zero polynomial", "non-negative integer", "none of these"], correctIndex: 0 },
    { question: "8.In Factor theorem, If (x – α) is a factor of p(x) then p(α) = ?", options: ["1", "2", "–1", "0"], correctIndex: 3 },
    { question: "9.Which of the following represents the Division Algorithm for polynomials?", options: ["Dividend = Quotient × Remainder + Divisor", "Dividend = Divisor × Quotient + Remainder", "Dividend = Remainder × Quotient + Divisor", "Dividend = Divisor + Quotient + Remainder"], correctIndex: 1 },
    { question: "10.If f(x) = x^2 + 3x + 2 and g(x) = x + 1, what is the remainder when f(x) is divided by g(x)?", options: ["0", "1", "2", "–1"], correctIndex: 0 },

    // From 9TH-LINEAR.pdf
    { question: "11.If a point's coordinates lies on the line segment connecting the origin and (5,0), what must the value of the abscissa be?", options: ["5", "1", "Any value between 0 and 5", "0"], correctIndex: 2 },
    { question: "12.In which quadrant is a point located if its ordinate is positive and its abscissa is negative?", options: ["Fourth Quadrant", "Third Quadrant", "Second Quadrant", "First Quadrant"], correctIndex: 2 },
    { question: "13.The coordinates of the origin are (a, b). What are the values of a and b?", options: ["2", "0", "-1", "1"], correctIndex: 1 },
    { question: "14.The ordinate of any point on the x-axis is k, and the abscissa of any point on the y-axis is m. What is the value of km?", options: ["2", "1", "km", "0"], correctIndex: 3 },
    {
        question: "15.The coordinates of the origin are (a−1, b+1). What is the sum of a and b?",
        options: ["2", "0", "-1", "1"],
        correctIndex: 1
      },
      {
        question: "16.A point A(x,5) is equidistant from P(1,2) and Q(5,−2). Find the value of x.",
        options: ["x=6", "x=4", "x=3", "x=8"],
        correctIndex: 3
      },
      {
        question: "17.The slope of the line passing through the points (1,2) and (2,4) is:",
        options: ["1", "2", "3", "4"],
        correctIndex: 1
    },
    { question: "18.A point is such that its perpendicular distance from the x-axis is 4 units. Write a possible coordinate for it.", options: ["The ordinate y can be 4 or -4", "x must be y", "x must be 4 or -4", "x^2 + y^2 = 16"], correctIndex: 0 },
    { question: "19.In the first quadrant, the signs of the coordinates are:", options: ["Negative, Positive", "Positive, Positive", "Positive, Negative", "Negative, Negative"], correctIndex: 1 },
    { question: "20.Which axis is horizontal in a Cartesian plane?", options: ["Y-axis", "X-axis", "Origin", "Quadrant"], correctIndex: 1 },
    { question: "21.A point P is 3 units away from the x-axis and 5 units away from the y-axis. If P lies in the fourth quadrant, what are its coordinates?", options: ["(3,5)", "(3,-5)", "(5,3)", "(5,-3)"], correctIndex: 3 },
    { question: "22.The midpoint of a line segment AB is M(2,3). If the coordinates of A are (1,5), find the coordinates of B.", options: ["(3,5)", "(3,1)", "(5,1)", "(2,3)"], correctIndex: 1 },
    { question: "23.Three vertices of a rectangle are A(0,0), B(5,0) and D(0,3). What are the coordinates of the fourth vertex, C?", options: ["(3,5)", "(5,3)", "(5,0)", "(0,5)"], correctIndex: 1 },

    // Class-9th-probability.pdf
    { question: "24.In a cricket match, a batswoman hits a boundary 6 times out of 30 balls she plays. Find the probability that she did not hit a boundary.", options: ["0", "1", "3/5", "4/5"], correctIndex: 3 },
    { question: "25.Eleven bags of wheat flour, each marked 5 kg, actually contained the following weights of flour in kg: 4.97, 5.05, 5.08, 5.03, 5.00, 5.06, 5.08, 4.98, 5.04, 5.07, 5.00. Find the probability that any of these bags chosen at random contains more than 5 kg of flour.", options: ["1/17", "7/11", "5/9", "9/5"], correctIndex: 1 },
    { question: "26.Two coins were tossed 200 times and the following results were obtained. What is the probability of event of obtaining minimum one head?", options: ["0.5", "0.8", "0.55", "0.16"], correctIndex: 1 },
    { question: "27.The probability of each event lies between:", options: ["1 & 2", "1 & 10", "0 & 1", "0 & 5"], correctIndex: 2 },
    { question: "28.If P(E) = 0.44, then P(not E) will be:", options: ["0.44", "0.55", "0.50", "0.56"], correctIndex: 3 },
    { question: "29.The probability of drawing an ace card from a deck of cards is:", options: ["1/52", "1/26", "4/13", "1/13"], correctIndex: 3 },
    { question: "30.A dice is thrown. The probability of getting 1 and 5 is:", options: ["½", "⅔", "⅓", "½"], correctIndex: 2 },
    { question: "31.What is the probability of getting an odd number less than 4, if a die is thrown?", options: ["1/6", "1/2", "1/3", "0"], correctIndex: 2 }
    ,{ question: "32.Marks obtained by a student in a test: 81, 87, 76, 70, 90. What is the probability that the student has scored more than 80?", options: ["0.6", "0.8", "0.4", "0.5"], correctIndex: 0 },
    { question: "33.1000 families with 2 children were studied. families with no children is 270, with one child is 415 and with 2 children is 315. What is the probability that the family has at least one boy?", options: ["0.415", "0.270", "0.73", "0.315"], correctIndex:  2},
    { question: "34.A dice was thrown 500 times. Frequency for the outcomes 1,2,3,4,5,6 are 78, 80, 93, 79, 91, 79 respectively. What is the probability of getting 4 as outcome?", options: ["0.16", "0.158", "0.156", "0.131"], correctIndex: 1 },
    { question: "35.The probability of each event, when a coin is tossed 1000 times with frequencies Head: 455, Tail: 545 is:", options: ["0.455, 0.545", "0.5, 0.5", "0.45, 0.55", "455, 545"], correctIndex: 0 },
    { question: "36.The sum of all probabilities equals:", options: ["4", "1", "0", "2"], correctIndex:1 },

    // QUIZ-MATHFEST-2025.pdf
    { question: "37.Which of the following is an irrational number?", options: ["√52", "0.3333", "√7", "1.25"], correctIndex: 2 },
    { question: "38.What is the 6th root of 64?", options: ["4", "2", "6", "8"], correctIndex: 1 },
    { question: "39.The decimal form of 6.34 × 10^4 is:", options: ["6340", "634000", "63400", "6340000"], correctIndex: 2 },
    { question: "40.The number 0.333 is:", options: ["irrational", "rational", "whole", "natural"], correctIndex: 1 },
    { question: "41.The cube root of 27 is:", options: ["9", "3", "6", "27"], correctIndex: 1 },
    { question: "42.Multiply 6√5 by 2√5", options: ["40", "20", "60", "12"], correctIndex: 2 },
    { question: "43.Find the 4th root of 256", options: ["3", "4", "6", "16"], correctIndex: 1 },
    { question: "44.The decimal expansion of 7/8 is:", options: ["0.875", "0.777", "0.768", "0.785"], correctIndex: 0 },
    { question: "45.HCF of 48 and 180 is:", options: ["12", "18", "24", "36"], correctIndex: 0 },
    { question: "46.Which of the following is divisible by 9?", options: ["123", "918", "121", "245"], correctIndex: 1 },

    // CLASS-9-STATISTICS.pdf
    { question: "47.The ratio of the sum of observations and the total number of observations is called:", options: ["Mean", "Median", "Mode", "Central tendency"], correctIndex: 0 },
    { question: "48.The value which appears very frequently in a data is called:", options: ["Mean", "Median", "Mode", "Central tendency"], correctIndex: 2 },
    { question: "49.Which of the following is not a measure of central tendency?", options: ["Standard deviation", "Mean", "Median", "Mode"], correctIndex: 0 },
    { question: "50.Find the value of x, if the arithmetic mean of 4, 5, 6, 7, 8 and x is 7.", options: ["4", "6", "8", "12"], correctIndex: 3 },
    { question: "51.The difference between the maximum and minimum values of the given observation is called:", options: ["Class", "Class interval", "Classmark", "Range"], correctIndex: 3 },
    { question: "52.Find the maximum value if the range is 38 and the minimum value is 82.", options: ["60", "76", "120", "82"], correctIndex: 2 },
    { question: "53.If each data in the observation is increased by 5, then the mean:", options: ["Remains the same", "Increased by 5", "Decreased by 5", "None of the above"], correctIndex: 1 },
    { question: "54.The mean of x², x³, x⁴ and x–2 is:", options: ["(x+7)/4", "(2x+7)/4", "(3x+7)/4", "(4x+7)/4"], correctIndex: 3 },
    { question: "55.The sum of deviations from the mean is always:", options: ["Zero", "One", "Positive", "Negative"], correctIndex: 0 },
    { question: "56.The collection of information, collected for a purpose is called:", options: ["Mean", "Median", "Mode", "Data"], correctIndex: 3 },

    {
        question: "57.The total surface area of a cone whose radius is 2r and slant height 2l is",
        options: [ "4πr(l+r)", "πr(l+4r)", "πr(l+r)", "2πrl" ],
        correctIndex: 0
        },
        {
          question: "58.The surface area of a sphere of radius 14 cm is:",
          options: [ "1386 sq.cm", "1400 sq.cm", "2463 sq.cm", "2000 sq.cm" ],
          correctIndex: 2
        },
        {
          question: "59.The total surface area of a cube is 96 cm². The volume of the cube is:",
          options: [ "8 cm³", "512 cm³", "64 cm³", "27 cm³" ],
          correctIndex: 2
        },
        {
          question: "60.The surface area of a cube whose edge equals to 3cm is:",
          options: [ "62 sq.cm", "30 sq.cm", "54 sq.cm", "90 sq.cm" ],
          correctIndex: 2
        },
        {
          question: "61.The volume of a hemisphere whose radius is r is:",
          options: [ "4/3 πr³", "4πr³", "2πr³", "2/3 πr³" ],
          correctIndex: 3
        },
        {
          question: "62.The curved surface area of a right circular cylinder of height 14 cm is 88 cm².\nThe diameter of the base is:",
          options: [ "2 cm", "3 cm", "4 cm", "6 cm" ],
          correctIndex: 0
        },
        {
          question: "63.The surface area of cuboid-shaped box having length=80 cm, breadth=40 cm and height=20 cm is:",
          options: [ "11200 sq.cm", "13000 sq.cm", "13400 sq.cm", "12000 sq.cm" ],
          correctIndex: 0
        },
        {
          question: "64.In a cylinder, the radius is doubled and height is halved, the curved surface area will be",
          options: [ "Halved", "Doubled", "Same", "Four times" ],
          correctIndex: 2
    }
      
];*/

/*const questionBank = [
    // 12 image-based questions
    { question: "1.Number divisible by 2, 3, 4, 5:", options: ["60", "50", "30", "40"], correctIndex: 0 },
    { question: "2.Cube root of 216:", options: ["6", "3", "9", "8"], correctIndex: 0 },
    { question: "3.0.666... as a fraction is:", options: ["2/3", "3/4", "6/10", "1/2"], correctIndex: 0 },
    { question: "4.Which is a perfect cube?", options: ["27", "64", "50", "81"], correctIndex: 0 },
    { question: "5.LCM of 15, 20, and 30 is:", options: ["60", "120", "90", "100"], correctIndex: 1 },
    { question: "6.Which number is divisible by 6?", options: ["125", "132", "121", "137"], correctIndex: 1 },
    { question: "7.The decimal 0.818181... as a fraction is:", options: ["9/11", "8/11", "9/10", "8/9"], correctIndex: 0 },
    { question: "8.The HCF of 18 and 30 is:", options: ["6", "12", "9", "3"], correctIndex: 0 },
    { question: "9.Find a number divisible by 2, 3, and 5:", options: ["12", "30", "18", "24"], correctIndex: 1 },
    { question: "10.Find the next number in: 1, 4, 9, 16, 25, ...", options: ["30", "36", "35", "40"], correctIndex: 1 },
    { question: "11.0.545454... as a fraction is:", options: ["54/99", "55/99", "1/2", "6/11"], correctIndex: 0 },
    { question: "12.Two consecutive integers whose sum is 37:", options: ["17,20", "18,19", "19,20", "16,21"], correctIndex: 1 },
    // CLASS-10-STATISTICS.pdf (10 selected)
    { question: "13.If the mean of a frequency distribution is 7.5 and Σf_i x_i = 120 + 3k, Σf_i = 30, then k is equal to", options: ["40", "35", "50", "45"], correctIndex: 1 },
    { question: "14.The mode and mean is given by 7 and 8, respectively. Then the median is", options: ["11/3", "13/3", "23/3", "3/3"], correctIndex: 2 },
    { question: "15.If the mean of first n natural numbers is 3n/5, then the value of n is", options: ["3", "4", "5", "6"], correctIndex: 2 },
    { question: "16.If AM of a, a^3, a^6, a^9 and a^{12} is 10, then a is equal to", options: ["1", "2", "3", "4"], correctIndex: 3 },
    { question: "17.If the sum of frequencies is 24, then the value of x in the observation x, 5, 6, 1, 2, will be", options: ["4", "6", "8", "10"], correctIndex: 3 },
    { question: "18.Construction of a cumulative frequency table is useful in determining the", options: ["Mean", "Median", "Mode", "All the above three measures"], correctIndex: 1 },
    { question: "19.The abscissa of the point of intersection of the less than type and more than type cumulative frequency curves of a grouped data gives its", options: ["Mean", "Median", "Mode", "All three above"], correctIndex: 1 },
    { question: "20.While computing mean of grouped data, we assume that the frequencies are", options: ["Centred at the class marks of the classes", "Evenly distributed over all the classes", "Centred at the upper limits of the classes", "Centred at the lower limits of the classes"], correctIndex: 0 },
    { question: "21.The empirical relationship between the three measures of central tendency is", options: ["3 Median = Mode + 2 Mean", "2 Median = Mode + 2 Mean", "3 Median = Mode + Mean", "3 Median = Mode + 2 Mean"], correctIndex: 0 },
    { question: "22.What is the frequency obtained by adding the frequencies of all the classes preceding a given class?", options: ["Class mark", "Class height", "Average frequency", "Cumulative frequency"], correctIndex: 3 },
    // Class-10th-probability.pdf (10 selected)
    { question: "23.The probability of event equal to zero is called", options: ["Unsure event", "Sure event", "Impossible event", "Independent event"], correctIndex: 2 },
    { question: "24.The probability that cannot exist among the following", options: ["0.8", "-1.5", "1.5", "0.7"], correctIndex: 1 },
    { question: "25.A bag has 3 red balls and 5 green balls. If we take a ball from the bag, what is the probability of getting red balls only?", options: ["3", "8", "3/8", "8/3"], correctIndex: 2 },
    { question: "26.A bag has 5 white marbles, 8 red marbles, and 4 purple marbles. If we take a marble randomly, what is the probability of not getting a purple marble?", options: ["0.5", "0.66", "0.08", "0.77"], correctIndex: 3 },
    { question: "27.A dice is thrown in the air. The probability of getting odd numbers is", options: ["1/2", "3/2", "3", "4"], correctIndex: 0 },
    { question: "28.If two dice are thrown in the air, the probability of getting sum as 3 will be", options: ["2/18", "3/18", "1/18", "1/36"], correctIndex: 2 },
    { question: "29.The sum of the probabilities of all the elementary events of an experiment is", options: ["0.5", "1", "2", "1.5"], correctIndex: 1 },
    { question: "30.An event is very unlikely to happen. Its probability is closest to", options: ["0.0001", "0.001", "0.01", "0.1"], correctIndex: 0 },
    { question: "31.Who gave the definition of probability?", options: ["Euclid", "Simon Laplace", "Archimedes", "Einstein"], correctIndex: 1 },
    { question: "32.What kind of an event is getting a head or a tail when a coin is tossed?", options: ["Impossible event", "Equal event", "Exhaustive event", "Equally likely event"], correctIndex: 3 },
    // POLYNOMIAL (CLASS X) Quiz (12 selected)
    { question: "33.If a, b, c be the zeros of the polynomial p(x) such that (a+b+c) = 3, (ab+bc+ac) = 10 and abc = 24 then p(x) =", options: ["x^2 - 3x^2 - 10x + 24", "x^3 - 3x^2 - 10x + 24", "x^3 - 3x^2 + 10x + 24", "None of these"], correctIndex: 2 },
    { question: "34.If two of the zeros of the cubic polynomial ax^3 + bx^2 + cx + d are 0 then the third zero is", options: ["-b/a", "b/a", "c/a", "-d/a"], correctIndex: 0 },
    { question: "35.The zeros of the polynomial 4x^2 + 5√2x - 3 are", options: ["-3√2, √2/2", "-3/2, 4/3", "-3/2, 4/3", "none of these"], correctIndex: 2 },
    { question: "36.The zeros of the polynomial x^2 + 1/6x - 2 are", options: ["-3, 4", "-3/2, 4/3", "4/3, 3/2", "none of these"], correctIndex: 1 },
    { question: "37.If \beta be the zeros of the polynomial x^2 + 5x + k such that \alpha^2 + \beta^2 + 2 = 21/4, then k = ?", options: ["3", "-3", "-2", "2"], correctIndex: 3 },
    { question: "38.If the zeroes of a quadratic polynomial a x^2 + bx + c are both positive, then a, b and c all have the same sign.", options: ["True", "False"], correctIndex: 1 },
    { question: "39.If –2 and 3 are the zeros of the quadratic polynomial x^2 + (–2 + 3)x + 1 2 ++ then", options: ["a = -2, b = 6", "a = 2, b = 6", "a = -2, b = -6", "a = 2, b = -6"], correctIndex: 2 },
    { question: "40.If \alpha and \beta are the zeros of the polynomial f(x) = x^2 - 5x + k such that \alpha \beta = 1, find the value of k.", options: ["k = 6", "k = -6", "k = 3", "k = -3"], correctIndex: 1 },
    { question: "41.Find the zeros of the polynomial x^2 - 3x - m(m + 3)?", options: ["m and (m+3)", "(m-3) and m", "(m+3) and -m", "none of these"], correctIndex: 2 },
    { question: "42.It is given that the difference between the zeros of 4x^2 - 8kx + 9 is 4 and k > 0. Then, k = ?", options: ["1/2", "3/2", "5/2", "7/2"], correctIndex: 2 },
    { question: "43.The zeroes of the quadratic polynomial x^2 + 88x + 125 are", options: ["both positive", "both negative", "one positive and one negative", "both equal"], correctIndex: 1 },
    { question: "44.If \alpha and \beta are the zeroes of 2x^2 + 5x - 9 then the value of \alpha \beta is", options: ["5/2", "7/2", "9/2", "0"], correctIndex: 2 }
    // linear eqns. 
    { question: "45.If 2x – 5 = 13, then x =", options: ["4", "9", "6", "3"], correctIndex: 1 },
    { question: "46.Solve: 4x – (x + 2) = 10", options: ["4", "5", "6", "3"], correctIndex: 0 },
    { question: "47.Solve for x: 7 – 2(x + 3) = x – 5", options: ["2", "-4", "-1", "1"], correctIndex: 0 },
    { question: "48.Find x if 5(2x – 3) = 3(x + 7)", options: ["36/7", "-1", "8", "2"], correctIndex: 0 },
    { question: "49.Solve for x: (x – 1)/2 + (2x + 3)/3 = 7/6", options: ["4/7", "1/2", "1", "1/3"], correctIndex: 0 },
    { question: "50.Solve: 3x + 1/4 = 2x – 5/3", options: ["-23", "-7", "7", "17"], correctIndex: 0 },
    { question: "51.Solve: 6(x – 2) + 5 = 3x + 4", options: ["11/3", "3", "5", "11"], correctIndex: 0 },
    { question: "52.Solve for x: 2x – 5 = x + 2/4", options: ["14", "11", "7", "-11"], correctIndex: 0 },
    { question: "53.The system: 2x – 3y = 4, 4x – 6y = 9 has:", options: ["No solution", "Infinitely many solutions", "x = 7/2, y = 0", "x = 1, y = 3"], correctIndex: 0 },
    { question: "54.The system of equations: x/2 + y/3 = 5; x/3 + y/2 = 5 has:", options: ["No solution", "Exactly one solution", "Infinitely many solutions", "x = y"], correctIndex: 1 },

    {
    question: "55.A solid spherical ball fits exactly inside the cubical box of side 2a. The volume of the ball is",
    options: ["(16/3)πa³", "(1/6)πa³", "(32/3)πa³", "(4/3)πa³"],
    correctIndex: 3
  },
  {
    question: "56.What is the area of a semi circle of diameter 'd'?",
    options: ["(1/16)πd²", "(1/4)πd²", "(1/8)πd²", "(1/2)πd²"],
    correctIndex: 1
  },
  {
    question: "57.Ratio of volumes of two cones with same radii is",
    options: ["h₁:h₂", "s₁:s₂", "r₁:r₂", "None of these"],
    correctIndex: 0
  },
  {
    question: "58.If the perimeter of one face of a cube is 20 cm, then its surface area is",
    options: ["120 cm²", "150 cm²", "125 cm²", "400 cm²"],
    correctIndex: 1
  },
  {
    question: "59.Two identical solid cubes of side k units are joined end to end. What is the volume, in cubic units, of the resulting cuboid?",
    options: ["2k³", "3k³", "4k³", "6k³"],
    correctIndex: 0
  },
  {
    question: "60.Ratio of volumes of two cylinders with equal height is",
    options: ["H:h", "R:r", "R²:r²", "None of these"],
    correctIndex: 2
  },
  {
    question: "61.Ratio of lateral surface areas of two cylinders with equal height is",
    options: ["1:2", "H:h", "R:r", "None of these"],
    correctIndex: 2
  },
  {
    question: "62.If the radius of a circle is diminished by 10% then its area is diminished by",
    options: ["10%", "19%", "36%", "20%"],
    correctIndex: 1
  },
  {
    question: "63.The ratio of volume of a cone and a cylinder of equal diameter and equal height is",
    options: ["3:1", "1:3", "1:2", "2:1"],
    correctIndex: 1
  },
  {
    question: "64.The product of a non zero rational and an irrational number is",
    options: ["always irrational", "always rational", "rational or irrational", "one"],
    correctIndex: 0
  }
];
*/

const boardGraph = {
    'outer_1':{coords:{x:222.9,y:61.3},next:'outer_2'},
    'outer_2':{coords:{x:169.8,y:83.5},next:'outer_3'},
    'outer_3':{coords:{x:132.7,y:112.2},next:'outer_4'},
    'outer_4':{coords:{x:98.8,y:134.4},next:'outer_5', innerPath:'inner_21'}, // <-- purple
    'outer_5':{coords:{x:69.1,y:169.4},next:'outer_6'},
    'outer_6':{coords:{x:68.1,y:228.8},next:'outer_7'},
    'outer_7':{coords:{x:72.3,y:276.5},next:'outer_8'},
    'outer_8':{coords:{x:71.2,y:324.2},next:'outer_9', innerPath:'inner_17'}, // <-- yellow
    'outer_9':{coords:{x:92.5,y:368.7},next:'outer_10'},
    'outer_10':{coords:{x:131.7,y:392.1},next:'outer_11'},
    'outer_11':{coords:{x:170.9,y:412.2},next:'outer_12'},
    'outer_12':{coords:{x:217.6,y:441.9},next:'outer_13', innerPath:'inner_13'}, // <-- green
    'outer_13':{coords:{x:270.6,y:440.8},next:'outer_14'},
    'outer_14':{coords:{x:314,y:417.5},next:'outer_15'},
    'outer_15':{coords:{x:372.3,y:383.6},next:'outer_16'},
    'outer_16':{coords:{x:398.9,y:360.3},next:'outer_17', innerPath:'inner_9'}, // <-- blue
    'outer_17':{coords:{x:423.2,y:321},next:'outer_18'},
    'outer_18':{coords:{x:429.6,y:270.1},next:'outer_19'},
    'outer_19':{coords:{x:428.5,y:220.3},next:'outer_20'},
    'outer_20':{coords:{x:425.4,y:163.1},next:'outer_21'},
    'outer_21':{coords:{x:408.4,y:128.1},next:'outer_22'},
    'outer_22':{coords:{x:372.3,y:103.7},next:'outer_23'},
    'outer_23':{coords:{x:323.6,y:71.9},next:'outer_24'},
    'outer_24':{coords:{x:268.4,y:43.3},next:'outer_1', innerPath:'inner_1'}, // <-- red
    'inner_1':{coords:{x:254.7,y:129.1},next:'inner_2'},'inner_2':{coords:{x:296,y:141.9},next:'inner_3'},'inner_3':{coords:{x:319.3,y:158.8},next:'inner_4'},'inner_4':{coords:{x:351.1,y:173.7},next:'inner_5'},'inner_5':{coords:{x:363.9,y:195.9},next:'inner_6'},'inner_6':{coords:{x:367,y:228.8},next:'inner_7'},'inner_7':{coords:{x:367,y:261.7},next:'inner_8'},'inner_8':{coords:{x:367,y:299.8},next:'inner_9'},
    'inner_9':{coords:{x:352.2,y:324.2},next:'inner_10'},
    'inner_10':{coords:{x:326.8,y:342.2},next:'inner_11'},
    'inner_11':{coords:{x:292.8,y:358.1},next:'inner_12'},
    'inner_12':{coords:{x:261,y:370.9},next:'inner_13'},
    'inner_13':{coords:{x:229.2,y:374},next:'inner_14'},
    'inner_14':{coords:{x:194.2,y:353.9},next:'inner_15'},
    'inner_15':{coords:{x:163.5,y:341.2},next:'inner_16'},
    'inner_16':{coords:{x:139.1,y:325.3},next:'inner_17'},
    'inner_17':{coords:{x:123.2,y:294.5},next:'inner_18'},
    'inner_18':{coords:{x:125.3,y:260.6},next:'inner_19'},
    'inner_19':{coords:{x:127.4,y:230.9},next:'inner_20'},
    'inner_20':{coords:{x:127.4,y:194.9},next:'inner_21'},
    'inner_21':{coords:{x:140.2,y:169.4},next:'inner_22'},
    'inner_22':{coords:{x:162.4,y:151.4},next:'inner_23'},
    'inner_23':{coords:{x:195.3,y:129.1},next:'inner_24'},
    'inner_24':{coords:{x:228.2,y:111.1},next:'inner_1'}, // <-- Points to the new center node
    'center_red':{coords:{x:247.6, y:241.0}},'center_blue':{coords:{x:247.6, y:241.0}},'center_green':{coords:{x:247.6, y:241.0}},'center_yellow':{coords:{x:247.6, y:241.0}},'center_purple':{coords:{x:247.6, y:241.0}}
};

// --- SECTION 2: GAME SETUP AND STATE ---
const teamStartNodes = {
    'red':'outer_1','blue':'outer_17','green':'outer_13','yellow':'outer_9','purple':'outer_5'
};
const junctionNodes = {
    'red':'outer_24','blue':'outer_16','green':'outer_12','yellow':'outer_8','purple':'outer_4'
};

const innerEndpoints = {
    'red':'inner_24','blue':'inner_8','green':'inner_12','yellow':'inner_16','purple':'inner_20'
};

const innerDistances = {
    'red':24, // from inner_1 to center_red
    'blue':24, // from inner_9 to center_blue
    'green':24, // from inner_13 to center_green
    'yellow':24, // from inner_17 to center_yellow
    'purple':24 // from inner_21 to center_purple
};

function getStepsToCenter(pos, team) {
    if (!pos.startsWith('inner_')) return Infinity;
    const currentNum = parseInt(pos.split('_')[1]);
    const endpointNums = {
        'red': 24,
        'blue': 8,
        'green': 12,
        'yellow': 16,
        'purple': 20
    };
    const endpointNum = endpointNums[team];
    const stepsToEndpoint = (endpointNum - currentNum + 24) % 24;
    return stepsToEndpoint + 1; // +1 for move to center
}

function getOccupyingTeam(pos, excludeCoinId = null) {
    for (const [coinId, coinPos] of Object.entries(gameState.coinPositions)) {
        if (coinPos === pos && coinId !== excludeCoinId) {
            return coinId.split('-')[0];
        }
    }
    return null;
}


const gameState = {
    teams:[{name:'Red',color:'#FF6B6B',score:0},{name:'Blue',color:'#4ECDC4',score:0},{name:'Green',color:'#00FF7F',score:0},{name:'Yellow',color:'#FFD93D',score:0},{name:'Purple',color:'#FF69B4',score:0}],
    currentTeamIndex:0,selectedCoinId:null,isAwaitingJunctionChoice:false,
    coinPositions:{'red-coin-1':'home','red-coin-2':'home','blue-coin-1':'home','blue-coin-2':'home','green-coin-1':'home','green-coin-2':'home','yellow-coin-1':'home','yellow-coin-2':'home','purple-coin-1':'home','purple-coin-2':'home'},
    homeCoords:{
        'red-coin-1':{x:394,y:20},'red-coin-2':{x:424,y:20},
        'blue-coin-1':{x:475,y:235},'blue-coin-2':{x:475,y:265},
        'green-coin-1':{x:389,y:480},'green-coin-2':{x:419,y:480},
        'yellow-coin-1':{x:76,y:480},'yellow-coin-2':{x:106,y:480},
        'purple-coin-1':{x:25,y:235},'purple-coin-2':{x:25,y:265}
    },
    movesLeft:{}, pendingDiceValue: null, pendingCoinId: null, correctAnswer: null, questionText: null,
    previousPosition: null, isTiebreaker: false, usedQuestions: new Set()
};

// --- SECTION 3: DOM ELEMENT REFERENCES ---
const allCoins=document.querySelectorAll('.coin');
const turnDisplay=document.getElementById('turn-display');
const submitDiceBtn=document.getElementById('submit-dice');
const diceInput=document.getElementById('dice-input');
const viewScoresBtn=document.getElementById('view-scores-btn');
const returnToGameBtn=document.getElementById('return-to-game-btn');
const gameContainer=document.getElementById('game-container');
const scoreboardView=document.getElementById('scoreboard-view');
const scoreList=document.getElementById('score-list');
const moveCountDisplay = document.getElementById('move-count-display');
const questionnaireView = document.getElementById('questionnaire-view');
const questionnaireAnswer = document.getElementById('questionnaire-answer');
const submitRegularBtn = document.getElementById('submit-regular');
const submitTiebreakerBtn = document.getElementById('submit-tiebreaker');

// Audio elements
const blipSound = document.getElementById('blip-sound');
const correctSound = document.getElementById('correct-sound');
const failSound = document.getElementById('fail-sound');
const doneSound = document.getElementById('done-sound');
const warSound = document.getElementById('war-sound');

// --- SECTION 4: CORE GAME FUNCTIONS ---

function updateTurnDisplay(){
    const currentTeam=gameState.teams[gameState.currentTeamIndex];
    turnDisplay.textContent=`Current Turn: Team ${currentTeam.name}`;
    turnDisplay.style.color=currentTeam.color;
    allCoins.forEach(coin=>{
        const isCurrentTeamCoin=coin.id.startsWith(currentTeam.name.toLowerCase()); // Bug fix: currentteam -> currentTeam
        coin.classList.toggle('selectable',isCurrentTeamCoin);
        if(!isCurrentTeamCoin){coin.classList.remove('selected');}
    });
}

function selectCoin(event){
    const clickedCoin=event.target;
    const currentTeamName=gameState.teams[gameState.currentTeamIndex].name.toLowerCase();
    if(clickedCoin.id.startsWith(currentTeamName)){
        allCoins.forEach(coin=>coin.classList.remove('selected'));
        clickedCoin.classList.add('selected');
        gameState.selectedCoinId=clickedCoin.id;
        console.log(`${gameState.selectedCoinId} selected.`);
    }
}

/**
 * Main function to initiate a coin move. Acts as a dispatcher.
 * Handles the special first step from 'home', then hands off to animateBoardMove.
 */
function moveCoin(coinId, steps, callback) {
    const coinElement = document.getElementById(coinId);
    coinElement.classList.add('moving');
    const teamName = coinId.split('-')[0];
    gameState.previousPosition = gameState.coinPositions[coinId];

    // Check if the coin is starting from home
    if (gameState.coinPositions[coinId] === 'home') {
        const startNodeId = teamStartNodes[teamName];
        const startNodeCoords = boardGraph[startNodeId].coords;

        // Animate the first step: Home -> Start
        coinElement.setAttribute('cx', startNodeCoords.x);
        coinElement.setAttribute('cy', startNodeCoords.y);
        gameState.coinPositions[coinId] = startNodeId;
        moveCountDisplay.textContent = 1;
        blipSound.play(); // Play blip sound for the first step from home

        // After a delay, animate the rest of the move (if any)
        setTimeout(() => {
            animateBoardMove(coinId, startNodeId, steps - 1, 1, callback);
        }, 500);
    } else {
        // If already on board, start animating all steps immediately
        animateBoardMove(coinId, gameState.coinPositions[coinId], steps, 0, callback);
    }
}

/**
 * Handles the recursive, step-by-step animation for a coin already on the board.
 */
function animateBoardMove(coinId, startPos, steps, initialStepCount, callback) {
    const coinElement = document.getElementById(coinId);
    const teamName = coinId.split('-')[0];
    let currentPos = startPos;
    let remainingSteps = steps;
    let stepCount = initialStepCount;

    function moveNext() {
        if (remainingSteps > 0) {
            // Check for junction BEFORE moving
            if (boardGraph[currentPos].innerPath && currentPos === junctionNodes[teamName]) {
                gameState.isAwaitingJunctionChoice = true;
                gameState.selectedCoinId = coinId;
                document.getElementById('junction-modal-overlay').style.display = 'block';

                const currentRemaining = remainingSteps;

                gameState._resumeMove = (choseInner) => {
                    document.getElementById('junction-modal-overlay').style.display = 'none';
                    gameState.isAwaitingJunctionChoice = false;

                    if (choseInner) {
                        const dist = innerDistances[teamName];
                        if (currentRemaining > 1 + dist) {
                            alert("Cannot enter inner: dice roll exceeds steps to center");
                            gameState._resumeMove = null;
                            return;
                        }
                    }
                    
                    currentPos = choseInner ? boardGraph[currentPos].innerPath : boardGraph[currentPos].next;

                    if (choseInner) {
                        // No counter needed for outer to inner transition
                    }

                    coinElement.setAttribute('cx', boardGraph[currentPos].coords.x);
                    coinElement.setAttribute('cy', boardGraph[currentPos].coords.y);
                    gameState.coinPositions[coinId] = currentPos;
                    blipSound.play(); // Play blip sound when moving at junction
                    moveCountDisplay.textContent = ++stepCount;
                    remainingSteps--;
                    setTimeout(moveNext, 750);
                };
                return; // PAUSE animation
            }

            // Automatic entry to center at team's inner endpoint (no modal)
            if (innerEndpoints[teamName] && currentPos === innerEndpoints[teamName]) {
                currentPos = `center_${teamName}`;
                coinElement.setAttribute('cx', boardGraph[currentPos].coords.x);
                coinElement.setAttribute('cy', boardGraph[currentPos].coords.y);
                gameState.coinPositions[coinId] = currentPos;
                delete gameState.movesLeft[coinId];
                // Award +1 for reaching center
                const team = gameState.teams.find(t => t.name.toLowerCase() === teamName);
                team.score += 1;
                blipSound.play(); // Play blip sound when entering center
                moveCountDisplay.textContent = ++stepCount;
                remainingSteps--;
                setTimeout(moveNext, 750);
                return;
            }

            // Check if move would overshoot center for inner coins
            if (currentPos.startsWith('inner_')) {
                const stepsToCenter = getStepsToCenter(currentPos, teamName);
                if (remainingSteps > stepsToCenter) {
                    alert("Cannot move: would overshoot center");
                    remainingSteps = 0;
                    moveCountDisplay.textContent = '';
                    coinElement.classList.remove('moving');
                    if (callback) callback();
                    return;
                }
                if (!gameState.movesLeft[coinId]) {
                    gameState.movesLeft[coinId] = stepsToCenter;
                }
                gameState.movesLeft[coinId]--;
            }



            // Normal movement
            currentPos = boardGraph[currentPos].next;
            coinElement.setAttribute('cx', boardGraph[currentPos].coords.x);
            coinElement.setAttribute('cy', boardGraph[currentPos].coords.y);
            gameState.coinPositions[coinId] = currentPos;
            moveCountDisplay.textContent = ++stepCount;
            blipSound.play(); // Play blip sound for each move step
            remainingSteps--;
            setTimeout(moveNext, 750);

        } else {
            // Movement finished
            moveCountDisplay.textContent = '';
            coinElement.classList.remove('moving');

            // Check for same-team collision at final position (exclude center positions)
            const finalPos = currentPos;
            const occupyingTeam = getOccupyingTeam(finalPos, coinId);
            const teamName = coinId.split('-')[0];
            if (!finalPos.startsWith('center_') && occupyingTeam === teamName) {
                alert(`Cannot land on your own team's coin at ${finalPos}! Rolling back to previous position.`);
                // Rollback to previous position
                gameState.coinPositions[coinId] = gameState.previousPosition;
                if (gameState.previousPosition === 'home') {
                    const homeCoords = gameState.homeCoords[coinId];
                    coinElement.setAttribute('cx', homeCoords.x);
                    coinElement.setAttribute('cy', homeCoords.y);
                } else {
                    const prevCoords = boardGraph[gameState.previousPosition].coords;
                    coinElement.setAttribute('cx', prevCoords.x);
                    coinElement.setAttribute('cy', prevCoords.y);
                }
                // Same team gets another chance
                return;
            }

            // Show tiebreaker message if landed on opponent's coin
            if (!finalPos.startsWith('center_') && occupyingTeam && occupyingTeam !== teamName) {
                const attackerTeam = gameState.teams.find(t => t.name.toLowerCase() === teamName);
                const defenderTeam = gameState.teams.find(t => t.name.toLowerCase() === occupyingTeam);
                const attackerTeamName = attackerTeam.name;
                const defenderTeamName = defenderTeam.name;
                const attackerColor = attackerTeam.color;
                const defenderColor = defenderTeam.color;
                const winMsg = document.getElementById('win-message');
                winMsg.innerHTML = `Team <span style="color: ${attackerColor}">${attackerTeamName}</span> vs Team <span style="color: ${defenderColor}">${defenderTeamName}</span>`;
                winMsg.classList.add('show');
                warSound.play(); // Play war sound when tiebreaker message is shown
                setTimeout(() => {
                    winMsg.classList.remove('show');
                    if (callback) callback();
                }, 3000);
            } else {
                if (callback) callback();
            }
        }
    }
    moveNext();
}

function nextTurn() {
    gameState.selectedCoinId = null;
    diceInput.value = '';
    submitDiceBtn.disabled = false;
    if (!document.getElementById('disable-next-turn-checkbox').checked) {
        gameState.currentTeamIndex = (gameState.currentTeamIndex + 1) % gameState.teams.length;
    }
    updateTurnDisplay();
}

function toggleScoreboard() {
    const isHidden = scoreboardView.style.display === 'none' || scoreboardView.style.display === '';
    if (isHidden) {
        scoreList.innerHTML = '';
        gameState.teams.forEach(team => {
            const scoreEntry = document.createElement('div');
            scoreEntry.className = 'score-entry';
            scoreEntry.style.color = team.color;
            scoreEntry.textContent = `${team.name}: ${team.score}`;
            scoreList.appendChild(scoreEntry);
        });
        gameContainer.style.display = 'none';
        scoreboardView.style.display = 'block';
    } else {
        gameContainer.style.display = 'block';
        scoreboardView.style.display = 'none';
    }
}

function showQuestionnaire(diceValue, coinId) {
    gameState.pendingDiceValue = diceValue;
    gameState.pendingCoinId = coinId;
    let availableQuestions = questionBank.filter(qn => !gameState.usedQuestions.has(qn.question));
    if (availableQuestions.length === 0) {
        gameState.usedQuestions.clear();
        availableQuestions = questionBank;
    }
    const randomQn = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    gameState.questionText = randomQn.question;
    document.getElementById('question-text').innerHTML = randomQn.question;
    let optionsText = '';
    for (let i = 0; i < randomQn.options.length; i++) {
        optionsText += `${String.fromCharCode(97 + i)}) ${randomQn.options[i]}\n`;
    }
    document.getElementById('question-options').innerHTML = optionsText.trim();
    gameState.correctAnswer = String.fromCharCode(97 + randomQn.correctIndex);
    gameState.usedQuestions.add(randomQn.question);
    // Show both buttons
    document.getElementById('submit-regular').style.display = 'inline-block';
    document.getElementById('submit-tiebreaker').style.display = 'inline-block';
    gameContainer.style.display = 'none';
    questionnaireView.style.display = 'flex';
}

// --- SECTION 5: EVENT LISTENERS ---

submitDiceBtn.addEventListener('click', () => {
    if (gameState.isAwaitingJunctionChoice) return;

    const diceValue = parseInt(diceInput.value, 10);
    const isDiceRangeDisabled = document.getElementById('disable-dice-range-checkbox').checked;

    // --- NEW VALIDATION LOGIC ---
    let isInvalid = false;
    if (isDiceRangeDisabled) {
        // Validation for 1-49
        isInvalid = isNaN(diceValue) || diceValue < 1 || diceValue > 49;
    } else {
        // Standard validation for 1-6
        isInvalid = isNaN(diceValue) || diceValue < 1 || diceValue > 6;
    }

    if (isInvalid) {
        const allowedRange = isDiceRangeDisabled ? '1-49' : '1-6';
        alert(`Please enter a valid dice roll (${allowedRange}).`);
        return;
    }
    if (!gameState.selectedCoinId) {
        alert('Please select a coin to move first!');
        return;
    }
    const currentPos = gameState.coinPositions[gameState.selectedCoinId];
    const teamName = gameState.selectedCoinId.split('-')[0];
    if (currentPos.startsWith('inner_')) {
        const stepsToCenter = getStepsToCenter(currentPos, teamName);
        if (diceValue > stepsToCenter) {
            alert(`Cannot roll: would overshoot center (${stepsToCenter} steps left)`);
            return;
        }
    }
    moveCoin(gameState.selectedCoinId, diceValue, () => {
        gameState.pendingDiceValue = diceValue;
        gameState.pendingCoinId = gameState.selectedCoinId;
        document.getElementById('open-questionnaire-btn').style.display = 'inline-block';
        submitDiceBtn.disabled = true;
    });
});

document.getElementById('stay-outer-btn-modal').onclick = () => {
    if (gameState._resumeMove) {
        gameState._resumeMove(false);
        gameState._resumeMove = null;
    }
};
document.getElementById('enter-inner-btn-modal').onclick = () => {
    if (gameState._resumeMove) {
        gameState._resumeMove(true);
        gameState._resumeMove = null;
    }
};



viewScoresBtn.addEventListener('click', toggleScoreboard);
returnToGameBtn.addEventListener('click', toggleScoreboard);
allCoins.forEach(coin => coin.addEventListener('click', selectCoin));

// Tiebreaker modal event listeners
document.getElementById('send-attacker-home-btn').onclick = () => {
    document.getElementById('tiebreaker-modal-overlay').style.display = 'none';
    // Send attacker home
    gameState.coinPositions[gameState.tiebreakerAttacker] = 'home';
    const attackerElement = document.getElementById(gameState.tiebreakerAttacker);
    const attackerHomeCoords = gameState.homeCoords[gameState.tiebreakerAttacker];
    attackerElement.setAttribute('cx', attackerHomeCoords.x);
    attackerElement.setAttribute('cy', attackerHomeCoords.y);
    // Defender team +2
    const defenderTeamName = gameState.tiebreakerDefender.split('-')[0];
    const defenderTeam = gameState.teams.find(t => t.name.toLowerCase() === defenderTeamName);
    defenderTeam.score += 2;
    nextTurn();
};
document.getElementById('send-defender-home-btn').onclick = () => {
    document.getElementById('tiebreaker-modal-overlay').style.display = 'none';
    // Send defender home
    gameState.coinPositions[gameState.tiebreakerDefender] = 'home';
    const defenderElement = document.getElementById(gameState.tiebreakerDefender);
    const defenderHomeCoords = gameState.homeCoords[gameState.tiebreakerDefender];
    defenderElement.setAttribute('cx', defenderHomeCoords.x);
    defenderElement.setAttribute('cy', defenderHomeCoords.y);
    // Attacker team +3
    const attackerTeamName = gameState.tiebreakerAttacker.split('-')[0];
    const attackerTeam = gameState.teams.find(t => t.name.toLowerCase() === attackerTeamName);
    attackerTeam.score += 3;
    nextTurn();
};
document.getElementById('none-btn').onclick = () => {
    document.getElementById('tiebreaker-modal-overlay').style.display = 'none';
    // Revert attacker to previous position
    gameState.coinPositions[gameState.tiebreakerAttacker] = gameState.previousPosition;
    const attackerElement = document.getElementById(gameState.tiebreakerAttacker);
    if (gameState.previousPosition === 'home') {
        const homeCoords = gameState.homeCoords[gameState.tiebreakerAttacker];
        attackerElement.setAttribute('cx', homeCoords.x);
        attackerElement.setAttribute('cy', homeCoords.y);
    } else {
        const prevCoords = boardGraph[gameState.previousPosition].coords;
        attackerElement.setAttribute('cx', prevCoords.x);
        attackerElement.setAttribute('cy', prevCoords.y);
    }
    nextTurn();
};

submitRegularBtn.addEventListener('click', () => {
    // Check if the current coin's position is occupied by another team's coin (excluding center positions)
    const currentPos = gameState.coinPositions[gameState.pendingCoinId];
    if (!currentPos.startsWith('center_')) {
        const occupyingTeam = getOccupyingTeam(currentPos, gameState.pendingCoinId);
        const teamName = gameState.pendingCoinId.split('-')[0];
        if (occupyingTeam && occupyingTeam !== teamName) {
            alert("Cannot proceed: position is occupied by another team's coin.");
            return;
        }
    }
    const answer = questionnaireAnswer.value.trim().toLowerCase();
    const isCorrect = answer === gameState.correctAnswer.toLowerCase();
    if (isCorrect) {
        questionnaireView.style.backgroundColor = 'green';
        correctSound.play(); // Play correct sound for right answer
        setTimeout(() => {
            // Award +1 for successful regular movement
            const teamName = gameState.pendingCoinId.split('-')[0];
            const team = gameState.teams.find(t => t.name.toLowerCase() === teamName);
            team.score += 1;

            // Check for win condition
            const currentPos = gameState.coinPositions[gameState.pendingCoinId];
            if (currentPos.startsWith('center_')) {
                doneSound.play(); // Play done sound for win
                const winMsg = document.getElementById('win-message');
                winMsg.textContent = `Congratulations Team ${team.name}!`;
                winMsg.style.color = team.color;
                winMsg.classList.add('show');
                // Hide after 5 seconds
                setTimeout(() => {
                    winMsg.classList.remove('show');
                }, 5000);
            }

            // Check for tiebreaker (only if not at center)
            const occupyingTeam = getOccupyingTeam(currentPos, gameState.pendingCoinId);
            if (!currentPos.startsWith('center_') && occupyingTeam && occupyingTeam !== teamName) {
                // Show tiebreaker message
                const defenderCoin = Object.keys(gameState.coinPositions).find(id => gameState.coinPositions[id] === currentPos && id !== gameState.pendingCoinId);
                const attackerTeam = gameState.teams.find(t => t.name.toLowerCase() === teamName);
                const defenderTeam = gameState.teams.find(t => t.name.toLowerCase() === occupyingTeam);
                const attackerTeamName = attackerTeam.name;
                const defenderTeamName = defenderTeam.name;
                const attackerColor = attackerTeam.color;
                const defenderColor = defenderTeam.color;
                const winMsg = document.getElementById('win-message');
                winMsg.innerHTML = `Team <span style="color: ${attackerColor}">${attackerTeamName}</span> vs Team <span style="color: ${defenderColor}">${defenderTeamName}</span>`;
                winMsg.classList.add('show');
                warSound.play(); // Play war sound when tiebreaker message is shown
                // Handle tiebreaker in questionnaire
                gameState.isTiebreaker = true;
                gameState.tiebreakerAttacker = gameState.pendingCoinId;
                gameState.tiebreakerDefender = defenderCoin;
                document.getElementById('question-text').textContent = "Resolve tiebreaker: enter 'attacker' (send attacker home, defender +1), 'defender' (send defender home, attacker +2), or 'none' (revert attacker)";
                gameState.correctAnswer = 'dummy';
                // Show tiebreaker button, hide regular button during tiebreaker
                document.getElementById('submit-regular').style.display = 'none';
                document.getElementById('submit-tiebreaker').style.display = 'inline-block';
                // Keep questionnaire open for resolution input
                questionnaireAnswer.value = '';
                questionnaireView.style.backgroundColor = '';
            } else {
                // Close questionnaire
                questionnaireAnswer.value = '';
                gameContainer.style.display = 'block';
                questionnaireView.style.display = 'none';
                questionnaireView.style.backgroundColor = '';
                document.getElementById('open-questionnaire-btn').style.display = 'none';
                // Ensure regular button shown, tiebreaker hidden
                document.getElementById('submit-regular').style.display = 'inline-block';
                document.getElementById('submit-tiebreaker').style.display = 'none';
                nextTurn();
            }
        }, 1500);
    } else {
        questionnaireView.style.backgroundColor = 'red';
        failSound.play(); // Play fail sound for wrong answer
        setTimeout(() => {
            questionnaireAnswer.value = '';
            // Close questionnaire
            gameContainer.style.display = 'block';
            questionnaireView.style.display = 'none';
            questionnaireView.style.backgroundColor = '';
            document.getElementById('tiebreaker-display').style.display = 'none';
            // Reset tiebreaker state and buttons
            gameState.isTiebreaker = false;
            document.getElementById('submit-regular').style.display = 'inline-block';
            document.getElementById('submit-tiebreaker').style.display = 'none';

            // Revert coin to previous position
            gameState.coinPositions[gameState.pendingCoinId] = gameState.previousPosition;
            const coinElement = document.getElementById(gameState.pendingCoinId);
            if (gameState.previousPosition === 'home') {
                const homeCoords = gameState.homeCoords[gameState.pendingCoinId];
                coinElement.setAttribute('cx', homeCoords.x);
                coinElement.setAttribute('cy', homeCoords.y);
            } else {
                const prevCoords = boardGraph[gameState.previousPosition].coords;
                coinElement.setAttribute('cx', prevCoords.x);
                coinElement.setAttribute('cy', prevCoords.y);
            }

            nextTurn();
        }, 1500);
    }
});

submitTiebreakerBtn.addEventListener('click', () => {
    if (gameState.isTiebreaker) {
        // Check if the attacker's position is occupied by another team's coin (excluding center positions)
        const currentPos = gameState.coinPositions[gameState.tiebreakerAttacker];
        if (!currentPos.startsWith('center_')) {
            const occupyingTeam = getOccupyingTeam(currentPos, gameState.tiebreakerAttacker);
            const teamName = gameState.tiebreakerAttacker.split('-')[0];
            if (!occupyingTeam || occupyingTeam === teamName) {
                alert("Cannot proceed: this is not a valid tiebreaker situation.");
                return;
            }
        }
        const answer = questionnaireAnswer.value.trim().toLowerCase();
        if (answer === 'attacker') {
            gameState.coinPositions[gameState.tiebreakerAttacker] = 'home';
            const attackerElement = document.getElementById(gameState.tiebreakerAttacker);
            const attackerHomeCoords = gameState.homeCoords[gameState.tiebreakerAttacker];
            attackerElement.setAttribute('cx', attackerHomeCoords.x);
            attackerElement.setAttribute('cy', attackerHomeCoords.y);
            const defenderTeamName = gameState.tiebreakerDefender.split('-')[0];
            const defenderTeam = gameState.teams.find(t => t.name.toLowerCase() === defenderTeamName);
            defenderTeam.score += 1;
        } else if (answer === 'defender') {
            gameState.coinPositions[gameState.tiebreakerDefender] = 'home';
            const defenderElement = document.getElementById(gameState.tiebreakerDefender);
            const defenderHomeCoords = gameState.homeCoords[gameState.tiebreakerDefender];
            defenderElement.setAttribute('cx', defenderHomeCoords.x);
            defenderElement.setAttribute('cy', defenderHomeCoords.y);
            const attackerTeamName = gameState.tiebreakerAttacker.split('-')[0];
            const attackerTeam = gameState.teams.find(t => t.name.toLowerCase() === attackerTeamName);
            attackerTeam.score += 3;
        } else if (answer === 'none') {
            gameState.coinPositions[gameState.tiebreakerAttacker] = gameState.previousPosition;
            const attackerElement = document.getElementById(gameState.tiebreakerAttacker);
            if (gameState.previousPosition === 'home') {
                const homeCoords = gameState.homeCoords[gameState.tiebreakerAttacker];
                attackerElement.setAttribute('cx', homeCoords.x);
                attackerElement.setAttribute('cy', homeCoords.y);
            } else {
                const prevCoords = boardGraph[gameState.previousPosition].coords;
                attackerElement.setAttribute('cx', prevCoords.x);
                attackerElement.setAttribute('cy', prevCoords.y);
            }
        } else {
            questionnaireView.style.backgroundColor = 'red';
            failSound.play();
            setTimeout(() => {
                questionnaireAnswer.value = '';
                questionnaireView.style.backgroundColor = '';
            }, 1500);
            return;
        }
        questionnaireView.style.backgroundColor = 'green';
        correctSound.play();
        setTimeout(() => {
            questionnaireAnswer.value = '';
            gameContainer.style.display = 'block';
            questionnaireView.style.display = 'none';
            questionnaireView.style.backgroundColor = '';
            document.getElementById('open-questionnaire-btn').style.display = 'none';
            // Reset buttons
            document.getElementById('submit-regular').style.display = 'inline-block';
            document.getElementById('submit-tiebreaker').style.display = 'none';
            gameState.isTiebreaker = false;
            nextTurn();
        }, 1500);
    } else {
        const answer = questionnaireAnswer.value.trim().toLowerCase();
        const isCorrect = answer === gameState.correctAnswer.toLowerCase();
        if (isCorrect) {
            questionnaireView.style.backgroundColor = 'green';
            correctSound.play();
            setTimeout(() => {
                questionnaireAnswer.value = '';
                gameContainer.style.display = 'block';
                questionnaireView.style.display = 'none';
                questionnaireView.style.backgroundColor = '';
                document.getElementById('open-questionnaire-btn').style.display = 'none';
                // Tiebreaker resolution modal
                const currentPos = gameState.coinPositions[gameState.pendingCoinId];
                const defenderCoin = Object.keys(gameState.coinPositions).find(id => gameState.coinPositions[id] === currentPos && id !== gameState.pendingCoinId);
                document.getElementById('tiebreaker-modal-overlay').style.display = 'block';
                // Store for modal handlers
                gameState.tiebreakerAttacker = gameState.pendingCoinId;
                gameState.tiebreakerDefender = defenderCoin;
                // Show attacker vs defender text
                const attackerTeam = gameState.tiebreakerAttacker.split('-')[0];
                const defenderTeam = gameState.tiebreakerDefender.split('-')[0];
                const attackerTeamName = gameState.teams.find(t => t.name.toLowerCase() === attackerTeam).name;
                const defenderTeamName = gameState.teams.find(t => t.name.toLowerCase() === defenderTeam).name;
            document.getElementById('tiebreaker-modal').querySelector('p').textContent = `Team ${attackerTeamName} vs Team ${defenderTeamName}`;
        }, 1500);
        } else {
            questionnaireView.style.backgroundColor = 'red';
            failSound.play();
            setTimeout(() => {
                questionnaireAnswer.value = '';
                questionnaireView.style.backgroundColor = '';
            }, 1500);
        }
    }
});

// Debug buttons
document.getElementById('next-turn-btn').addEventListener('click', nextTurn);
document.getElementById('prev-turn-btn').addEventListener('click', () => {
    gameState.currentTeamIndex = (gameState.currentTeamIndex - 1 + gameState.teams.length) % gameState.teams.length;
    updateTurnDisplay();
});

// Open questionnaire button
document.getElementById('open-questionnaire-btn').addEventListener('click', () => {
    document.getElementById('open-questionnaire-btn').style.display = 'none';
    showQuestionnaire(gameState.pendingDiceValue, gameState.pendingCoinId);
});

// Debug toggle button
document.getElementById('debug-toggle-btn').addEventListener('click', () => {
    const content = document.getElementById('debug-content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

// --- SECTION 6: GAME INITIALIZATION ---
window.addEventListener('load', () => {
    updateTurnDisplay();
    console.log("Game ready. Please select a coin and roll the dice.");
});
