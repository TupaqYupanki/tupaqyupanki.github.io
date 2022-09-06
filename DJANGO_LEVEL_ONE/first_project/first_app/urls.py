from django.conf.urls import url
from first_app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^keyboard_jpg', views.keyboard_jpg, name='keyboard_jpg'),
]