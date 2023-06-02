from django.contrib import admin
from django.urls import path, include
from django.conf.urls import handler404, handler500

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pagehtml.urls')), 
]

#handler404 = views.error404
#handler500 = views.error500
