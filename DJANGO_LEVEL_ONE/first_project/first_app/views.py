from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    my_dict = {'insert_me':'Hello I am from view.py!'}
    return render(request,'first_app/index.html',context=my_dict)

def keyboard_jpg(request):
    return render(request,'first_app/keyboard_jpg.html')