from django.db import models
from rest_framework import serializers

from django.contrib.auth.models import User


class Book(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=450)
    poster = models.TextField()

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ('author', 'title', 'description','poster','pk')
