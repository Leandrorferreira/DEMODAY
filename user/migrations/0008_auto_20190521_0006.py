# Generated by Django 2.2.1 on 2019-05-21 03:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_auto_20190520_2034'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='bons_drinks',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='diversao',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='fotografia',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='gastronomia',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='moda',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='musica',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='tecnologia',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='viagem',
        ),
    ]
