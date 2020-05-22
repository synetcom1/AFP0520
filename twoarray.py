def list_compare(list1, list2):
    return list(set(list1 + list2))
# using list method and set method(retrive only not duplicate elements)

list1 = [1, 1, 3, 5, 7, 9]
list2 = [2, 3, 4, 6, 8]
print(list_compare(list1, list2))
