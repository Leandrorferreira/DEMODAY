from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from role.forms import RoleForm, RoleGenreForm
from user.models import Profile
from role.models import Role, UserInterests
from establishment.models import Establishment

# Create your views here.
@login_required
def user_interests(request):
    formulario = RoleGenreForm(request.POST or None)    
    msg = ''

    if formulario.is_valid():
        #Logica para salvar interesses do usuario logado        
        choices_list = formulario.cleaned_data['choices']
        for choice in choices_list:
            usr = UserInterests()
            usr.tipos_role = choice
            usr.profile = request.user
            usr.save()
        msg = 'Cadastro realizado com sucesso!'
        formulario = RoleGenreForm()
        
    contexto = {
        'form' : formulario,
        'msg' : msg,
    }
    return render(request, 'interests.html', contexto)

@login_required
def user_options(request):
    lista = Establishment.objects.all()
    context = {'lista': lista}
    return render (request, 'options.html', context)

@login_required
def map_option(request):
    lista = Establishment.objects.all()
    context = {'lista': lista}
    return render (request, 'mapa.html', context)

@login_required
def user_roles(request):
    form = RoleForm(request.POST or None)
    msg = ''
    if form.is_valid():
        form.save()
        form = RoleForm()
        msg = 'Cadastro realizado com sucesso!'
    
    context = {
        'form':form,
        'msg':msg,
    }
    return render(request, "roles.html", context)
