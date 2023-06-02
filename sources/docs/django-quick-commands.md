⇛ Versão instalada:
  $ python -m django --version

* Django 4.2, que suporta Python 3.8 e posterior

⇛ Instalação django:
  sudo apt install python3-django:
  
⇛ Tutorial rápido de Django:
  Instale as dependências do projeto:
  - Exemplo:
  $ pip install django django-bootstrap4 PyMySQL django-stdimage

  Crie o requiments.txt sempre que necessário:
  $ pip freeze > requirements.txt
  
  Crie o projeto:
  $ django-admin startproject mysite

  Teste para verificar se está funcionando:
  $ python manage.py runserver

  Cria sua aplicação:
  $ python manage.py startapp polls

  Configure a url da sua aplicação:
  Crie um arquivo na pasta do seu app chamado urls.py

  Aponte na raiz da URLconf para o módulo polls.urls.

  Em settings.py configure sua linguagem e localização:
    LANGUAGE_CODE = 'pt-br'
    TIME_ZONE = 'America/Sao_Paulo'

  Configure sua base de dados em settings.py:
# configuração sqlite3. Mude de acordo ao tipo de BD
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

  Crie as tabelas do apps instalados com o comando:
  $ python manage.py migrate
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

⇛ Informar ao django que foi realizada alterações nos modelos:
  $ python manage.py makemigrations polls

⇛ Django executar as alterações nos modelos (models):
  $ python manage.py migrate

⇛ Criar usuário no admin (app auth):
  $ python manage.py  createsuperuser

⇛ Acessar django shell:
  $ python manage.py  shell

⇛ Para carregar arquivos estáticos no template:
  Na primeira linha acrescente:
    {% load static %}

⇛ Para carregar o arquivo estático, exemplo:
  <link rel="stylesheet" href="{% static 'css/style.css' %}">

⇛ Copia os static files dos apps to staticfiles (debug = false):
  $ python manage.py collectstatic

  Obs.: o django não fornece os staticfiles com o comando runserver
