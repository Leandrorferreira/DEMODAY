from django.shortcuts import render
from django.core.mail import send_mail
from .forms import ContatoForm
# Create your views here.

def home(request):
    return render (request, 'index.html')

def sobre(request):
    return render (request, 'sobre.html')

def contato(request):
    formulario = ContatoForm(request.POST or None)
    msg = ''

    if formulario.is_valid(): 
        formulario.save()
        formulario = ContatoForm()
        msg = 'E-mail enviado com sucesso'

    contexto = {
        'form' : formulario,
        'msg' : msg
    }

    if request.POST:
        nome = request.POST.get('nome', '')
        email = request.POST.get('email', '')
        telefone = request.POST.get('telefone', '')
        assunto  = request.POST.get('assunto', '')
        conteudo = request.POST.get('conteudo', '')

        if len(email) > 0:
            # Montando o corpo da mensagem
            texto = "Você recebeu um e-mail no site Bora!:\n" \
            "-> Nome: {nome}\n" \
            "-> E-mail: {email}\n" \
            "-> Telefone: {telefone}\n" \
            "-> Assunto: {assunto}\n" \
            "-> Mensagem: {conteudo}".format(
                nome=nome,
                email=email,
                telefone=telefone,
                assunto=assunto,
                conteudo=conteudo)

            send_mail(assunto, texto, email, ['projetobora.contato@gmail.com'])

    return render(request, 'contato.html', contexto)

def notFound(request):
    return render(request, 'erro.html')