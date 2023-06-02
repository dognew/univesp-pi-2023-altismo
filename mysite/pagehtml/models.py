from django.db import models

# é pelos modelos que você persiste dados nos bancos de dados
# o Django utiliza os models para criar as tabelas do bd usando a estrutura definida nesta classe

class Project(models.Model):
    nome = models.CharField('Nome', max_length=100)
    faculdade = models.CharField('Faculdade', max_length=100)
    polo = models.CharField('Polo', max_length=100)

    def __str__(self) -> str:
        return self.nome

class Student(models.Model):
    ra = models.CharField('Ra', max_length=100)
    nome = models.CharField('Nome', max_length=200)
    email = models.EmailField('E-mail', max_length=100)

    def __str__(self):
        return self.nome