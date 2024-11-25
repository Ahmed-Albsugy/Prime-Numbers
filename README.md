# **Prime Numbers Finder**

---

## **Overview**

The **Prime Numbers Finder** is a simple web-based tool that allows users to input two numbers (start and end) and displays all the prime numbers within that range. It uses JavaScript for functionality and basic HTML and CSS for the user interface.

---

## **Features**

1. **Input Fields for Range**: Users can specify the starting and ending numbers of the range.
2. **Validation**:
   - Ensures that the inputs are valid numbers.
   - Checks that the start number is less than or equal to the end number.
3. **Prime Number Calculation**: Uses an efficient algorithm to calculate and display all prime numbers between the given range.
4. **Error Handling**: Displays appropriate error messages for invalid inputs.
5. **Responsive Output**: Shows results dynamically without refreshing the page.

---

## **File Structure**

### **HTML**

- Contains the structure of the page:
  - Title and description.
  - Input fields for entering the range.
  - Button to trigger the prime number calculation.
  - Div to display results.

### **CSS**

- Basic styling for:
  - Input fields and button.
  - Hover effects for buttons.
  - Result display area.

### **JavaScript**

- Handles:
  - Input validation.
  - Prime number computation.
  - Result rendering.

---

## **How It Works**

1. **Input Range**:
   - User enters the starting and ending numbers in the input fields.
2. **Validation**:
   - Ensures that:
     - Both fields contain valid numbers.
     - The start number is less than the end number.
3. **Prime Number Computation**:
   - If inputs are valid:
     - Loops through numbers in the range.
     - Checks each number using the `isPrime` function.
4. **Output Results**:
   - Displays a list of all prime numbers between the start and end range.
   - If no primes are found, displays a message indicating so.

---

## **Functions**

### 1. **isPrime(num)**

**Description**: Determines if a number is prime.

**Parameters**:

- `num` (number): The number to check.

**Returns**:

- `true` if the number is prime.
- `false` otherwise.

**Algorithm**:

- Returns `false` for numbers ≤ 1.
- Checks divisibility from 2 to the square root of `num`.
- If divisible by any number, it’s not prime.

---

### 2. **primeNumbers(n, m)**

**Description**: Finds all prime numbers between the start (n) and end (m) range.

**Parameters**:

- `n` (number): Starting number of the range.
- `m` (number): Ending number of the range.

**Returns**:

- Array of prime numbers.

**Algorithm**:

- Loops through numbers from start `n` to end `m`.
- Uses `isPrime` to determine if a number is prime.
- Adds primes to the result array.

---

### 3. **findPrimes()**

**Description**: Main function triggered by the "Find Primes" button.

**Steps**:

- Retrieves values from the input fields.
- Validates inputs:
  - Checks if inputs are numbers.
  - Ensures `n` < `m`.
- Calls `primeNumbers` to compute prime numbers.
- Displays results or error messages in the result div.

---

## **Usage**

### **Steps to Use**

1. Open the HTML file in a web browser.
2. Enter two numbers in the "Start" and "End" input fields.
3. Click the **Find Primes** button.
4. View the results in the output area below the button.

---

## **Error Handling**

1. **Invalid Inputs**:
   - If the inputs are not numbers, displays:
     _"Please enter valid numbers for both fields."_
2. **Start > End**:
   - If the start number is greater than the end number, displays:
     _"Start number must be less than the end number."_
3. **No Primes**:
   - If no primes exist in the range, displays:
     _"There are no prime numbers between {start} and {end}."_

---

## **Limitations**

1. Handles only integer inputs.
2. Performance may degrade for very large ranges.

---

## **Dependencies**

This project is built with:

- HTML5
- CSS3
- JavaScript (Vanilla)

No external libraries or frameworks are required.
