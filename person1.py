class Person:
    def __init__(self, name):
        self.name = name

    def talk(self):
        print(f"Hi, Good Morning {self.name}")


steve = Person("Steve Jobs")
print(steve.name)
steve.talk()
