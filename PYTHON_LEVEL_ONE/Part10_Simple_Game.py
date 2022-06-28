###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# Try to figure out what this code is doing and how it might be useful to you
import random
digits = list(range(10))
random.shuffle(digits)
x = (digits[:3])

# Another hint:
while True:
    guess = input("What is your guess? ")
    print (x)
    if int(guess[0]) == x[0] and int(guess[1]) == x[1] and int(guess[2]) == x[2]:
        print('You win!')
        break
    elif int(guess[0]) == x[0] or int(guess[1]) == x[1] or int(guess[2]) == x[2]:
        print('match')
    elif int(guess[0]) in x or int(guess[1]) in x or int(guess[2]) in x:
        print('close')


# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
