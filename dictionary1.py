
student = {
    "name": "Steve Jobs",
    "age": 40,
    "is_good_student": True
}
if "age" in student:
    student["age"] = ""
student["name"] = "Bill Gates"
student["weight"] = "80kg"
print(student["name"])
print(student)
print(student.get("name"))
print(student.get("height", "There is no key and value for height"))
