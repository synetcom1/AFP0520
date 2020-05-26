# import function from other python file
from change import lbs_to_kg

weight = int(input("What is your weight in lbs?"))
toDecimal = float(lbs_to_kg(weight))
print(f"{toDecimal: .2f}")
print("{} lbs is {} kg".format(weight, toDecimal))
