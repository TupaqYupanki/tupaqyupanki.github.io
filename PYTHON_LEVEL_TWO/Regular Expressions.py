import re

# patterns = ['term1', 'term2']
#
# text = 'This is a string with term1, not the other'
#
# for pattern in patterns:
#     print("I'm searching for: "+pattern)
#
#     if re.search(pattern,text):
#         print("MATCH")
#     else:
#         print("NO MATCH")

def multi_re_find(patterns,phrase):
    for pat in patterns:
        print('Searching for patterns {}'.format(pat))
        print(re.findall(pat,phrase))
        print('\n')

test_phrase = 'sdsd..sssddd..ssdsd?sdsd... dds..dssss1123s .#ssdddd!dd....ddss...ss'

test_patterns = ['sd*', 'sd+', 'sd?', 'sd{2}', 's[sd]+', '[^?.!]+', '[a-z]+', r'\d+', r'\s+', r'\w+']
#* means 0 or more match
#+ means 1 or more match
#? means 0 or 1 match
#{x} looking for x time match, also can be like {1,3} - 1-3 match
#[sd] means s or d
#^ - exclude some patterns in our example [a-z] do the same
#r'\d' - find digits in string of text; \D - non digits
#r'\s' - find spaces; \S - non spaces
#r'\w' - alphabet and numeric symbols

multi_re_find(test_patterns, test_phrase)