# import ramdom.py module to use the method of randint()
import random
# randint() first parameter, second parameter  are the range of numbers
random_number = random.randint(1, 10)
print(random_number)
guess_count = 0
guess_limit = 3
# it will be repeated three times excpet the case you guess correctly
while guess_count < guess_limit:
    guess = int(input("Guess: "))
    guess_count += 1
    if guess == random_number:
        print("You won")
        break
    else:
        print("You failed")
