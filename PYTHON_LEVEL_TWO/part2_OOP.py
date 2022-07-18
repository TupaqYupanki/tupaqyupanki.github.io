class dog():
    species = "mammal"
    def __init__(self,breed,name,sex):
        self.breed = breed
        self.name = name
        self.sex = sex

mydog = dog(breed = "Lab",name = "Sammy",sex = "male")
otherdog = dog("pudel","Ann","female")

print(mydog.breed)
print(mydog.name)
print(mydog.sex)
print(otherdog.breed, otherdog.name, otherdog.sex)
print(otherdog.species)

class Circle():
    pi = 3.14

    def __init__(self,radius=1):
        self.radius = radius

    def area(self):
        return self.radius*self.radius*Circle.pi

    def set_radius(self, new_radius):
        self.radius = new_radius

myc = Circle(3)
print(myc.area())
myc.radius = 100
print(myc.area())
myc.set_radius(200)
print(myc.radius)
print(myc.area())