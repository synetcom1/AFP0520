class Point:
    def move(self):
        print("move")

    def draw(self):
        print("draw")
        print(id(self))


point1 = Point()  # instance of the Point class(blueprint)
print(id(point1))
point1.x = 20  # attribute
point1.y = 30  # attribute
print(point1.x)
print(point1.draw())
# read-only, hidden, archive, system for files(attributes)
