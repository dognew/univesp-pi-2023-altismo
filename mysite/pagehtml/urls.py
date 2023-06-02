from django.urls import path

from .views import index, contato, art, artb, artc, artd, arte, artf

urlpatterns = [
    path('', index),
    path('contato', contato),
    path('autismo-na-infancia', art),
    path('autismo-na-adolescencia', artb),
    path('autismo-no-mercado-de-trabalho', artc),
    path('sintomas-do-autismo-na-infancia', artd),
    path('direitos-dos-autistas', arte),
    path('escalas-de-avaliacao', artf),
]