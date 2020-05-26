# user input will be remembered as number variable
number = int(input("Tell me a number"))
# initialization of factorial number
fact = 1

for i in range(1, number+1):
    fact = fact*i

print("The factorial ", end="")
print(fact)
