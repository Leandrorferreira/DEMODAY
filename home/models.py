from django.db import models

# Create your models here.
class Contato(models.Model):
    nome = models.CharField(max_length = 255)
    assunto = models.CharField(max_length = 255)
    email = models.EmailField()
    telefone = models.CharField(max_length = 14)
    conteudo = models.CharField(max_length = 500)
