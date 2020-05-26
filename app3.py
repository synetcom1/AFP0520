import random


class Dice:
    # self means instance of class
    def roll(self):
        first = random.randint(10, 20)
        second = random.randint(1, 6)
        return first, second


print(Dice().roll())
