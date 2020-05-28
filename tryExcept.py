try:
    age = int(input("Age: "))
    print(age)
# Pascal case for ValueError
except ValueError:
    print("Invalid value")
