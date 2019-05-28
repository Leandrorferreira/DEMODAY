from django import forms
from .models import Contato

class ContatoForm(forms.ModelForm):
    conteudo = forms.CharField(widget = forms.Textarea)
    class Meta:
        model = Contato 
        fields = [
            'nome',
            'assunto',
            'email',
            'telefone',
            'conteudo',
        ]
    
    class CommentForm(forms.Form):
        conteudo = forms.CharField(widget=forms.Textarea)