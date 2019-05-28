from django.db import models
from django.contrib.auth.models import User
import datetime
# Create your models here.

class Profile(models.Model):
    username = models.CharField(max_length=50)
    cellphone = models.CharField(max_length=11)
    birthday = models.DateField(null=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = ('Perfil')
        verbose_name_plural = ('Perfis')