def find_max(numbers):
    # You need to guess the first index number is the maximum
    max_num = numbers[0]
    # You need to traverse from the beginning index to the last index
    for number in numbers:
        if number > max_num:
            max_num = number
    return max_num
