num1 = int(input("Tell me the first number"))
num2 = int(input("Tell me the second number"))
sum = 0
if num1 > num2:
    for number in range(num2, num1+1):
        sum = sum + number
elif num1 < num2:
    for number in range(num1, num2+1):
        sum = sum + number
else:
    sum = 0
print(sum)
