from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets

from .models import Book, BookSerializer

from django.contrib.auth.models import User

# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))


class BookViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Books to be viewed or edited.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    



