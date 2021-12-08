def my_func(param1='default'):
    """
    This is the description of my function
    """
    print('my first python function! {}'.format(param1))


my_func()

def addNum(num1,num2):
    if type(num1) == type(num2)==type(10):
        return num1+num2
    else:
        return "Sorry, I need integers!"

result = addNum('2',3)
print(result)

# Filter
mylist = [1,2,3,4,5,6,7,8]
def even_bool(num):
    return num%2 == 0

evens = filter(even_bool,mylist)
print (evens)
print(list(evens))

tweet = 'Go Sports! #Sports'
print (tweet.split('#'))

print('x' in [1,2,3])
