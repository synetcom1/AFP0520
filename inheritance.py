class Animal:
    def walk(self):
        print("walk")


class Dog(Animal):
    def bark(self):
        print("bark")


class Horse(Animal):
    pass


dog1 = Dog()
dog1.walk()
dog1.bark()
horse1 = Horse()
horse1.walk()
