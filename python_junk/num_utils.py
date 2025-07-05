import math
def is_prime(i):    #checks if the number is prime or not, returns True/False as answer
    if i == 2:
        return True
    x = 2 
    if i % 1 == 0 and i >= 2:
        while x <= math.ceil(math.sqrt(i)):
            if i % x == 0:
                return False
            else :
                x = x + 1
        return True
    else:
        return False

 
def is_even(i):    #checks if the number is even or not, returns True/False as answer
    if i % 2 == 0:
        return True
    else :
        return False

def is_odd(i):    #checks if the number is odd or not, returns True/False as answer
    if i % 2 == 1:
        return True
    else :
        return False
