numbers = [3, 4, 5, 6, 8, 2, 6, 10]
new_numbers = []
for number in numbers:
    if number not in new_numbers:
        new_numbers.append(number)
print(new_numbers)
