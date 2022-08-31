from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# def index(request):
#     return HttpResponse("<em>My Second App</em>")

def index(request):
    my_dict = {'insert_me':'Hello I am from view.py!'}
    return render(request,'apptwo/index.html',context=my_dict)