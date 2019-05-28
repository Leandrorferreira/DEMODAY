from django.db import models
from establishment.models import Establishment
from multiselectfield import MultiSelectField
from user.models import Profile
from django.conf import settings

# Create your models here.
class TiposRole(models.Model):
    role_genres = [
        ('Tecnologia', 'Tecnologia'),
        ('Diversão', 'Diversão'),
        ('Fotografia', 'Fotografia'),
        ('Gastronomia', 'Gastronomia'),
        ('Bons Drinks', 'Bons Drinks'),
        ('Música', 'Música'),
        ('Moda', 'Moda'),
        ('Viagem', 'Viagem')
    ]
    choices = MultiSelectField(choices=role_genres)

class Role(models.Model):
    opcoes_role = TiposRole.role_genres
    local_role = models.ForeignKey(Establishment, on_delete=models.CASCADE)
    tipos_role = models.CharField(max_length=50, choices=opcoes_role)
    data_role = models.DateField()
    horario_role = models.TimeField(auto_now = False, auto_now_add = False)

class UserInterests(models.Model):
    tipos_role = models.CharField(max_length=50)
    profile = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='Usuario', related_name='user_interests', on_delete=models.CASCADE)

    def __str__(self):
        return self.tipos_role

    class Meta:
        verbose_name = ('Interesse')
        verbose_name_plural = ('Interesses do Usuário')