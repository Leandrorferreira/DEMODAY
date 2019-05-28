from django.db import models

# Create your models here.
class Establishment(models.Model):
    es_name = models.CharField(max_length=255)
    es_icon = models.ImageField(upload_to='', null=True)    
    es_rating = models.ImageField(upload_to='', null=True)    
    es_site =  models.CharField(max_length=100)
    es_phone = models.CharField(max_length=11)
    es_cnpj = models.CharField(max_length=14)
    es_street = models.CharField(max_length=100)
    es_district =  models.CharField(max_length=50)
    es_state = models.CharField(max_length=2)
    es_city = models.CharField(max_length=100)
    es_number = models.IntegerField()
    es_zip_code = models.CharField(max_length=8)    

    def __str__(self):
        return self.es_name

    class Meta:
        verbose_name = ('Estabelecimento')
        verbose_name_plural = ('Estabelecimentos')