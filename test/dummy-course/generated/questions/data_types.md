## Header
This is the course header. This will be added on top of every page. Do to [DoDAO.io](https://www.dodao.io) to know more.

 ---
 
 ## Blockchain Basics
 
 
---

##### Which of the following are not valid data types in solidity?  

- [ ]  bool
- [x]  float
- [ ]  address
- [x]  char
  
Hint: noHint
         
Explanation: floating point data and character data types are not valid in solidity.

Sub Topics: value-types
 

---

##### What is the default value of int data type in solidity?  

- [ ]  null
- [x]  0
- [ ]  undefined
- [ ]  1
  
Hint: noHint
         
Explanation: null and undefined do not exist in solidity.

Sub Topics: value-types
 

---

##### Which of the following statements is incorrect regarding data types in solidity?  

- [ ]  The range of uint32 data type is from 0 upto 2**32 -1
- [ ]  Bool data type can only take true and false values.
- [x]  The range of int256 data type is from -2**256+1 to 2**256-1
- [ ]  address data type holds a 20 byte value
  
Hint: noHint
         
Explanation: The range of uintx in solidity is [0,2**x -1], the range of intx is [-2**(x-1),2**(x-1)-1] , boolean values only take true/false values and address literals take 20 bytes hexadecimal values.

Sub Topics: value-types
 

---

##### Which of the following statements about address data type in solidity are not correct?  

- [x]  Address payable has a larger size compared to address.
- [x]  Implicit type conversion from address payable to address are not allowed.
- [ ]  If you need a variable of type address and plan to send Ether to it, then declare its type as address payable.
- [x]  Explicit conversion of data type byte 32 to address is allowed.
  
Hint: address holds a 20 byte value.
         
Explanation: address payable is same as address but with aditional members send and transfer.

Sub Topics: value-types
 

---

##### Which of the following is not a valid member of type address?  

- [ ]  balance
- [x]  keccak256
- [ ]  codehash
- [ ]  transfer
  
Hint: noHint
         
Explanation: keccak256 is a globally available function in solidity used to calculate the keccak256 hash of an input . balance , codehash and transfer are methods of the address type.

Sub Topics: value-types
 

---

##### Which of the following are true regarding constant and immutable variables in solidity?  

- [x]  For constant variables, the value has to be fixed at compile-time. For immutable, value can be assigned at construction time.
- [ ]  Compared to regular state variables, the gas costs of constant & immutable variables are much higher.
- [x]  Variables declared as immutable are a bit less restricted than those declared as constant.
- [ ]  Immutable variables can be assigned more than once.
  
Hint: these variables cannot be modified after the contract has been constructed.
         
Explanation: For constant variables, the value has to be a constant at compile time and it has to be assigned where the variable is declared whearas immutables are a little less restrictive and can be assigned an arbitrary value in the constructor of the contract or at the point of their declaration.

Sub Topics: value-types
 

---

##### in solidity 0xdCad3a6d3569DF655070DEd06cb7A1b2Ccd1D3AF is an example of-  

- [x]  address
- [ ]  uint
- [ ]  string
- [ ]  array
  
Hint: noHint
         
Explanation: addresses holds 20 byte hexadecimal literals.

Sub Topics: value-types
 

---

##### which of the following is not a valid array declaration?  

- [ ]  `uint arr[10];`
- [ ]  `int []arr;`
- [ ]  `uint arr[] = [1,2,3];`
- [x]  `int [3]arr;`
  
Hint: noHint
         
Explanation: type arrayName [ arraySize ]; declares an array of fixed size in Solidity, type[] arrayName; declares an array of dynamic size in solidity.

Sub Topics: reference-types
 

---

##### What will be the value of arr[arr.length-2] after execution of the following code? uint[] arr; arr = [1,2,3]; arr.push(1); arr.push(2); delete arr[1]; arr.pop();  

- [ ]  1
- [ ]  undefined
- [ ]  2
- [x]  3
  
Hint: delete method does not change the length of the array.
         
Explanation: array.push(x) is used to add element x to the end of the array , array.length returns the length of the array and delete array[x] deletes the item at index x of the array and leaves all other elements and the length of the array untouched.

Sub Topics: reference-types
 

---

##### Which of the following statements is correct about arrays in solidity ?  

- [ ]  They can hold values of different data types.
- [x]  They can hold primitive data types like uint, bool , address , or string.
- [x]  Array indexing in solidity starts with 0.
- [x]  uint arr[] = new uint[](3) is a valid array declaration.
  
Hint: arrays in solidity are homogenous.
         
Explanation: arrays in solidity can store "value-types" like boolean , integers etc and can be declared with the new keyword. Array indexing in solidity starts with 0 like most other programming languages.

Sub Topics: reference-types
 

---

##### Which of the following statements is correct about enums?  

- [x]  They require at least one member, and its default value when declared is the first member.
- [ ]  They cannot have more than 128 members.
- [x]  Their options are represented by subsequent unsigned integer values starting from 0.
- [x]  type(NameOfEnum).min gives the smallest value in the enum.
  
Hint: Enums can have a maximum of 256 members.
         
Explanation: The options in enum are represented by subsequent unsigned integer values starting from 0. Using type(NameOfEnum).min and type(NameOfEnum).max you can get the smallest and respectively largest value of the given enum.

Sub Topics: value-types
 

---

##### Which of the following is not a reference type?  

- [ ]  arrays
- [ ]  mapping
- [ ]  struct
- [x]  enum
  
Hint: noHint
         
Explanation: enum is a value type.

Sub Topics: reference-types
 

---

##### Which of the following is not a valid data location for a reference data type in solidity?  

- [ ]  memory
- [ ]  storage
- [x]  address
- [ ]  calldata
  
Hint: noHint
         
Explanation: address is a value type in solidity whearas memory , storage and calldata are data locations for "reference-types".

Sub Topics: reference-types
 

---

##### uint[][5] in solidity is -  

- [ ]  Incorrect way to initialize array
- [ ]  A dynamic array of 5 arrays
- [x]  An array of 5 dynamic arrays
- [ ]  None of the above
  
Hint: two dimensional arrays can be initialized in solidity.
         
Explanation: An array of 5 dynamic arrays of uint is written as uint[][5]. The notation is reversed compared to some other languages. In Solidity, X[3] is always an array containing three elements of type X, even if X is itself an array. This is not the case in other languages such as C.

Sub Topics: reference-types
 

---

##### Which of the following is the correct way to compare two strings str1 and str2 in solidity?  

- [ ]  str1 == str2
- [x]  keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2))
- [ ]  string.concat(s1, s2)
- [ ]  All of above
  
Hint: noHint
         
Explanation: Solidity does not have string manipulation functions, but there are third-party string libraries. You can also compare two strings by their keccak256-hash using keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2)) and concatenate two strings using string.concat(s1, s2).

Sub Topics: reference-types
 

---

##### What does the following syntax do? using SafeMath for uint;  

- [ ]  Imports the SafeMath library
- [ ]  Makes uint variable immutable
- [x]  Links SafeMath to uint types
- [ ]  Sets the SafeMath variable to an uint
  
Hint: SafeMath is a library and can be imported in solidity.
         
Explanation: Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs. Using SafeMath reverts the transaction when an operation overflows.

Sub Topics: value-types
 

---

##### Which of the following is an example of int8?  

- [ ]  Null
- [ ]  -255
- [x]  0
- [ ]  1000
  
Hint: What is the range of values int8 can take?
         
Explanation: int8 can take values from -127 to 128.

Sub Topics: value-types
 

---

##### Which of the following is an example of a byte value?  

- [x]  0x65
- [ ]  True/False
- [ ]  Hello World!
- [ ]  [10,20,30]
  
Hint: bytes can accept hexadecimal values.
         
Explanation: The bytes data type in Solidity is a dynamically sized byte[] array and can accept hexadecimal values beginning with 0x.

Sub Topics: value-types
 

---

##### What is wrong with the following code ? // SPDX-License-Identifier: GPL-3.0 pragma solidity >=0.4.16 <0.9.0;
contract C { function f(uint len) public pure { uint[] memory a = new uint[](7); b[6] = 8; b.push(5); } }  

- [ ]  It is not not possible to declare an array with new keyword
- [ ]  b[6]=8 is incorrect assignment for a memory array
- [x]  It is not not possible to use push function with a memory array
- [ ]  The code is correct
  
Hint: noHint
         
Explanation: Memory arrays cannot be extended during runtime. The member function push does not exist. If you need to resize your memory array, you need to create a new array with the desired length and copy every element from the old array.

Sub Topics: reference-types
 

---

##### Statement 1- The array literal [-1,1] is invalid. Statement 2- Calling push() member function on an array can be used to append a zero-initialized element at the end of the array. Which of the following options is correct?  

- [ ]  Statement 1 is true.
- [ ]  Statement 2 is true.
- [x]  Both are true.
- [ ]  Neither is true.
  
Hint: noHint
         
Explanation: The array literal [1, -1] is invalid because the type of the first expression is uint8 while the type of the second is int8 and they cannot be implicitly converted to each other. To make it work, you can use [int8(1), -1], for example. Methods .push() and .push(value) can be used to append a new element at the end of the array, where .push() appends a zero-initialized element and returns a reference to it.

Sub Topics: reference-types
 

---

##### Which of the following statements is correct?  

- [ ]  It is possible for a struct to contain a member of its own type.
- [x]  The dot operator is used to access members of a struct.
- [x]  Struct types can be used inside mappings and arrays and they can themselves contain mappings and arrays.
- [ ]  None of these
  
Hint: noHint
         
Explanation: It is not possible for a struct to contain a member of its own type, although the struct itself can be the value type of a mapping member or it can contain a dynamically-sized array of its type. Struct types can be used inside mappings and arrays and they can themselves contain mappings and arrays.

Sub Topics: reference-types
 

---

##### Which of the following statements is correct about mapping data type?  

- [ ]  User-defined or complex types, such as mappings, structs or array types are not allowed as key and "value-types" in a mapping.
- [ ]  Mappings can have any data location.
- [x]  All primitive data types are allowed as key and value pairs.
- [ ]  All of these.
  
Hint: noHint
         
Explanation: Mappings can only have a data location of storage. The KeyType can be any built-in value type, bytes, string, or any contract or enum type. Other user-defined or complex types, such as mappings, structs or array types are not allowed. ValueType can be any type, including mappings, arrays and structs.

Sub Topics: reference-types
 

---

##### In the following code snippets where is implicit type conversion possible?  

- [x]  uint8 x; uint16 y; uint32 z=x+y;
- [ ]  uint8 x; uint16 y; uint8 z=x+y;
- [ ]  int8 x; uint16 y; uint32 z=x+y;
- [ ]  Implicit Type conversion is not possible in Solidity.
  
Hint: noHint
         
Explanation: In the example below, y and z, the operands of the addition, do not have the same type, but uint8 can be implicitly converted to uint16 and not vice-versa.  uint8 is convertible to uint16 and int128 to int256, but int8 is not convertible to uint256, because uint256 cannot hold values such as -1.

Sub Topics: value-types
 

---

##### What is the correct declaration for a mapping type ?  

- [ ]  mapping(uint -> address) someMapping;
- [ ]  mapping(struct -> address) someMapping;
- [x]  mapping (uint => address) someMapping;
- [ ]  None of the above
  
Hint: noHint
         
Explanation: mapping types use the syntax mapping(KeyType => ValueType) and variables of mapping type are declared using the syntax mapping(KeyType => ValueType) VariableName. The KeyType can be any built-in value type, bytes, string, or any contract or enum type. Other user-defined or complex types, such as mappings, structs or array types are not allowed. ValueType can be any type, including mappings, arrays and structs.

Sub Topics: mapping-type
 

---

##### Which of the following statements is correct about fixed point numbers?  

- [x]  They can be declared with Keywords ufixedMxN and fixedMxN.
- [x]  Fixed point numbers are not fully supported by Solidity yet. They can be declared, but cannot be assigned to or from.
- [x]  M represents the number of bits taken by the type and N represents how many decimal points are available.
- [ ]  M must be divisible by 8 and goes from 2 to 128 bits. N must be between 0 and 16, inclusive.
  
Hint: noHint
         
Explanation: Signed and unsigned fixed point number of various sizes. Keywords ufixedMxN and fixedMxN, where M represents the number of bits taken by the type and N represents how many decimal points are available. M must be divisible by 8 and goes from 8 to 256 bits. N must be between 0 and 80, inclusive. ufixed and fixed are aliases for ufixed128x18 and fixed128x18, respectively.

Sub Topics: value-types
 

---

##### Comparison operators like <= , >= are not applicable to which of the following value types?  

- [x]  bool
- [ ]  uint
- [ ]  int
- [ ]  address
  
Hint: noHint
         
Explanation:  '!' , '&&' , '||' , '==' , '!=' work with bolleans. Comparision operators like <=, < etc do not work with booleans in solidity .

Sub Topics: value-types
 

---

##### Regarding comparison of strings in solidity , based on the statements below , which of the following options is correct? Statement 1 - Compare with the use of hashes. Statement 2 - Check by comparing each character including the length check.  

- [x]  Statement 1 is more gas efficient for longer strings than statement 2.
- [ ]  Statement 2 is more gas efficient for longer strings than statement 1.
- [ ]  Both statements give almost the same gas cost.
- [ ]  There is no gas cost in comparison between strings.
  
Hint: Solidity does not have string manipulation functions.
         
Explanation: For longer strings it is cost efficient to hash the string and then compare the byte value of the hashes.

Sub Topics: reference-types
 

---

##### Which of the following is not a valid address ?  

- [ ]  0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9
- [ ]  0x577a6E294505A797976f218eFd751aB5557E1522
- [ ]  0xc0ffee254729296a45a3885639AC7E10F9d54979
- [x]  0x1011526z3H3fg4445xx556tuoa72288884869aAzl
  
Hint: noHint
         
Explanation: addresses hold 20 byte hexadecimal values.

Sub Topics: value-types
 

---

##### Which of the following is true about address in ethereum and solidity?  

- [x]  It corresponds to the last 20 bytes of the Keccak-256 hash of the public key.
- [x]  An address is always prefixed with 0x as it is represented in hexadecimal format (base 16 notation).
- [ ]  Numbers 0-9 and alphabets a-z are all valid characters in an ethereum address.
- [x]  The case sensitivity is used for checksum validation.
  
Hint: address takes hexadecimal values . what are hexadecimal values?
         
Explanation: An address is always prefixed with 0x as it is represented in hexadecimal format (base 16 notation). Numbers 0-9 and alphabets a-f are all valid characters in an ethereum address.

Sub Topics: value-types
 

---

##### Which of the following statements is correct about send and transfer functions of the address value type?  

- [ ]  Transfer is the low level counterpart of send.
- [ ]  Transfer and send are used to send ether (in units of ETH) to a payable address.
- [x]  In order to make a safe ether transaction it is better to use transfer.
- [ ]  None of these.
  
Hint: noHint
         
Explanation: It is possible to query the balance of an address using the property balance and to send Ether (in units of wei) to a payable address using the transfer function. Send is the low-level counterpart of transfer.

Sub Topics: value-types
 

---

##### Consider the following statements. Statement 1 - code is used to get the EVM bytecode as a byte memory, codehash is used to get the Keccak-256 hash of that code (as a bytes32). Statement 2 - keccak256(address.code) is cheaper than using address.codehash. Which of the following options is correct considering the code and codehash methods of the address type.  

- [ ]  Both Statement 1 and Statement 2 are correct.
- [x]  Statement 1 is correct but Statement 2 is incorrect.
- [ ]  Statement 2 is correct but Statement 1 is incorrect.
- [ ]  Neither of the statements is correct.
  
Hint: noHint
         
Explanation: Use .code to get the EVM bytecode as a bytes memory, which might be empty. Use .codehash get the Keccak-256 hash of that code (as a bytes32). Note that addr.codehash is cheaper than using keccak256(addr.code).

Sub Topics: value-types
 

---

##### Which of the following options is correct regarding a user defined value type defined by the syntax ' type C is V ; ' in solidity.  

- [ ]  V is the name of the newly introduced data type.
- [ ]  The type V does not have any operators or bound member functions. In particular, even the operator == is not defined.
- [x]  The function C.wrap is used to convert from the underlying type to the custom type. Similarly, the function C.unwrap is used to convert from the custom type to the underlying type.
- [ ]  None of these.
  
Hint: noHint
         
Explanation: A user defined value type is defined using type C is V, where C is the name of the newly introduced type and V has to be a built-in value type (the “underlying type”). The function C.wrap is used to convert from the underlying type to the custom type. Similarly, the function C.unwrap is used to convert from the custom type to the underlying type.The type C does not have any operators or bound member functions. In particular, even the operator == is not defined. Explicit and implicit conversions to and from other types are disallowed.

Sub Topics: value-types
 

---

##### In solidity , contract types are -  

- [x]  Similar to classes in object oriented languages.
- [ ]  Similar to functions in object oriented languages.
- [ ]  Reference types.
- [ ]  None of these.
  
Hint: noHint
         
Explanation: Solidity Contracts are like a class in any other object-oriented programming language.

Sub Topics: value-types
 

---

##### Which of the following statements are correct regarding variable declaration in solidity?  

- [x]  A variable name should not match with reserved keywords.
- [ ]  Variable names cannot start with underscore.
- [ ]  variables are case insensitive , var123 and VAR123 are same variables.
- [ ]  none of these.
  
Hint: noHint
         
Explanation: A variable name should not match with reserved keywords. Variable names must start with a letter or an underscore (_), and may contain letters from “a to z” or “A to Z” or digits from “0 to 9” and characters also. The name of variables are case sensitive.

Sub Topics: value-types
 

---

##### Which of the following is correct about contract types in solidity?  

- [ ]  Contracts support comparison operators.
- [ ]  The members of contract types are all the functions of the contract including all state variables.
- [ ]  A contract cannot create other contracts using the new keyword.
- [x]  None of these.
  
Hint: noHint
         
Explanation: explanation

Sub Topics: value-types
 

---

##### Which among the following is  a valid data storage location for mapping type?  

- [ ]  memory
- [x]  storage
- [ ]  calldata
- [ ]  staticcall
  
Hint: noHint
         
Explanation: Mappings can only have a data location of storage.

Sub Topics: mapping-type
 

---

##### The declaration below in solidity is an example of which type? function f() public payable returns (bytes4){}  

- [ ]  Contract type
- [x]  Function type
- [ ]  Reference type
- [ ]  Mapping type
  
Hint: noHint
         
Explanation: function f() public payable returns (bytes4){} is a fuction declaration.

Sub Topics: value-types
 

---

##### Which access classifier is used with a function type to only access it in the contract it is declared in ?  

- [ ]  public
- [x]  private
- [ ]  internal
- [ ]  external
  
Hint: private is a subset of internal and external is a subset of public.
         
Explanation: public - all can access external - Cannot be accessed internally, only externally internal - only this contract and contracts deriving from it can access private - can be accessed only from this contract

Sub Topics: value-types
 

---

##### In the context of memory arrays which of the following statements are true?  

- [x]  they can be declared with the syntax , uint[] memory a = new uint[](size);
- [ ]  to add an element to the array , push() function is used.
- [ ]  You can acess values in a memory array after execution of the smart contract.
- [x]  They cost less gas compared to storage arrays.
  
Hint: noHint
         
Explanation: Memory arrays with dynamic length can be created using the new operator. As opposed to storage arrays, it is not possible to resize memory arrays (e.g. the .push member functions are not available). The Solidity Smart Contract can use any amount of memory during the execution but once the execution stops, the Memory is completely wiped off for the next execution.

Sub Topics: reference-types
 

---

##### What will be the value of the following syntax executed in solidity? 255 + (true ? 1 : 0)  

- [ ]  255
- [ ]  256
- [ ]  0
- [x]  the above statement will revert.
  
Hint: The ternary operator is used in expressions of the form <expression> ? <trueExpression> : <falseExpression>. It evaluates one of the latter two given expressions depending upon the result of the evaluation of the main <expression>. If <expression> evaluates to true, then <trueExpression> will be evaluated, otherwise <falseExpression> is evaluated.
         
Explanation: The result type is determined from the types of the two operands in the ternary operator, converting to their mobile type first if required. As a consequence, 255 + (true ? 1 : 0) will revert due to arithmetic overflow. The reason is that (true ? 1 : 0) is of uint8 type, which forces the addition to be performed in uint8 as well, and 256 exceeds the range allowed for this type.

Sub Topics: value-types
 

---

##### In the following code snippet which line will result in an error- // SPDX-License-Identifier: MIT pragma solidity ^0.8.10; contract C {
//line 1 uint public x = 1;
// line 2 function addToX(uint y) public pure returns (uint) { return x + y; }
// line 3 function add(uint i, uint j) public pure returns (uint) { return i + j; } }  

- [ ]  Line 1
- [x]  Line 2
- [ ]  Line 3
- [ ]  The code snippet will not give any error
  
Hint: Check whether the function declaration is correct.
         
Explanation: Pure declares that no state variable will be changed or read in a function. view tells us that by running the function, no data will be saved/changed. Here in line 2 a pure function is trying to read the data from a state variable. The declaration should have a view instead of pure.

Sub Topics: value-types
 

---

##### You have a list of teams and their respective scores in a tournament. You are trying to work up some logic in a contract in solidity to efficiently retrieve the scores . Which of the following data types should you use to keep track of the scores?  

- [ ]  enum
- [ ]  Multi dimensional arrays
- [ ]  strings
- [x]  mappings
  
Hint: Which data type can be used to store a grouping of data and has greater efficiency when you want to fetch some unique value.
         
Explanation: A mapping is a table of keys and values (each with a pre-defined type). Fetching a piece of data from a mapping is far more efficient than fetching the same data from an array. To fetch data from an array requires iterating over the whole array until you find the element you're looking for.

Sub Topics: reference-types, mapping-type
 

---

##### On execution of the following code what will be the value of balance? uint8 balance = 255; balance++;  

- [ ]  256
- [x]  0
- [ ]  255
- [ ]  -255
  
Hint: Think of the range of values uint 8 can have .
         
Explanation: If you execute the code above the "balance" will be 0. This is a simple example of overflow. If you add 1 to binary 11111111, it resets back to 00000000. In Solidity 0.8, the compiler will automatically take care of checking for overflows and underflows.

Sub Topics: value-types
 

---

##### Which of the following statements are correct in the context of storage and memory data locations ?  

- [x]  Memory in solidity is a temporary storage.
- [x]  Storage is persistent and holds data between function calls.
- [x]  State variables and Local Variables of structs, array are always stored in storage by default. Function arguments are in memory.
- [ ]  None of these.
  
Hint: Think of how storage and memory affects the gas cost and how the code can be optimized.
         
Explanation: Every transaction on Ethereum Virtual Machine costs us some amount of Gas. The lower the Gas consumption the better is your Solidity code. The Gas consumption of Memory is not very significant as compared to the gas consumption of Storage. Therefore, it is always better to use Memory for intermediate calculations and store the final result in Storage.

Sub Topics: reference-types
 

---

##### Look at the code snippet below, pragma solidity ^0.5.0; contract SolidityTest { uint storedData; constructor() public { storedData = 10; } } What type of variable is storedData declared in the SolidityTest contract?  

- [x]  State Variables
- [ ]  Local Variables
- [ ]  global Variables
- [ ]  None of these
  
Hint: noHint
         
Explanation: State Variables , Variables whose values are permanently stored in a contract storage. Local Variables , Variables whose values are present till function is executing. Global Variables , Special variables which exist in the global namespace used to get information about the blockchain.

Sub Topics: reference-types
 

---

##### Which of the following is a valid enum declaration in solidity?  

- [ ]  enum integers {  1 , 2 , 3 , 4 }
- [x]  enum values { one , two , three }
- [ ]  enum myEnums { }
- [x]  enum booleans { True , False }
  
Hint: there must be atleast one option in enum.
         
Explanation: you cant use numbers (positive or negative) or boolean (true or false in lowercase) as members for an enum. However, True and False (Capitalized) are accepted.

Sub Topics: value-types
 

---

##### Consider the following code snippet , pragma solidity ^0.5.0; contractC { function foo(uint a) pure public returns (uint){ return a << 2; } } What will be the output when a uint value 3 is passed in the function foo of the contract C?  

- [ ]  0
- [ ]  1
- [ ]  8
- [x]  12
  
Hint: The Left Shift operator (<<) moves all the bits in its first operand to the left by the number of places specified in the second operand.
         
Explanation: x << y is equivalent to the mathematical expression x * 2**y.

Sub Topics: value-types
 

---

##### Which of the following are valid literals for solidity data types?  

- [x]  2.5e1
- [x]   'foo' 'bar' 
- [x]  hex"001122FF"
- [ ]  None of these
  
Hint: noHint
         
Explanation: 2.5e1 is an integer literal , "foo" "bar" is equivalent to “foobar” which is a string literal and hex"001122FF" is an example of  hexadecimal literal which are prefixed with the keyword hex.

Sub Topics: value-types
 

---

##### Variable packing is one way solidity optimizes gas costs in storage state variables . Consider the following two examples of variable declarations. Example 1 -  uint128 a; uint256 b; uint128 c; Example 2 -  uint128 a; uint128 c; uint256 b; Which of the following statements are correct regarding variable packing in the above examples.  

- [ ]  Variables in both examples 1 and 2 are packed.
- [ ]  Variables in example 1 are packed but not in example 2.
- [x]  Variables in example 2 are packed but not in example 1.
- [ ]  Variables in neither examples 1 and 2 are packed.
  
Hint: Solidity contracts have contiguous 32 byte (256 bit) slots used for storage.
         
Explanation: In example 1 the variables are not packed. If b was packed with a, it would exceed the 32 byte limit so it is instead placed in a new storage slot. The same thing happens with c and b. In example 2 the  variables are packed. Because packing c with a does not exceed the 32 byte limit, they are stored in the same slot.

Sub Topics: value-types
 

---

##### Consider the following code snippet ,
```
     // SPDX-License-Identifier: GPL-3.0
       pragma solidity ^0.8.8;
       contract test {
         enum ActionChoices { GoLeft, GoRight, GoStraight, SitStill }
         function foo() public pure returns (ActionChoices) {
             return type(ActionChoices).max;
         }
       }
   What will be the output when the function foo is called ?
```  
  

- [x]  0:uint8: 3
- [ ]  0:uint8: 0
- [ ]  0:string: “SitStill”
- [ ]  0:string: “GoLeft”
  
Hint: .max is used to get the largest value of the given enum.
         
Explanation: Under the hood, enums are integers, not strings. Solidity will automatically handle converting enums to ints.

Sub Topics: value-types
 
