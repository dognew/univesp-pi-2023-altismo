from django.shortcuts import render

# Neste arquivo retorna a view da aplicacao
def index(request):
    context = {
        'projectName': 'Projeto Integrador UNIVESP, Pólo de Caraguatatuba',
    }
    return render(request, 'index.html', context)

def contato(request):
    return render(request, 'contato.html')