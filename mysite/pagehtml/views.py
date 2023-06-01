from django.shortcuts import render

# Neste arquivo retorna a view da aplicacao
def index(request):
    context = {
        'projectName': 'Projeto Integrador UNIVESP, Pólo de Caraguatatuba',
    }
    return render(request, 'index.html', context)

def contato(request):
    return render(request, 'contato.html')

def art(request):
    return render(request, 'art.html')

def artb(request):
    return render(request, 'artb.html')

def artc(request):
    return render(request, 'artc.html')

def artd(request):
    return render(request, 'artd.html')

def arte(request):
    return render(request, 'arte.html')

def artf(request):
    return render(request, 'artf.html')
