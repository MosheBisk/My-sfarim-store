from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from django.http import HttpResponse
from rest_framework import status, viewsets

from django.contrib.auth.models import User

from .models import *
from .serializers import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@csrf_exempt
def book_list(request):
    try:
        my_books = Book.objects.all()
    except Book.DoesNotExist as identifier:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        books_serializer = BookSerializer(my_books, many=True)
        return JsonResponse(books_serializer.data, safe=False)

    if request.method == 'POST':
        book_data = JSONParser().parse(request)
        books_serializer = BookSerializer(data=book_data)
        if books_serializer.is_valid():
            books_serializer.save()
            return JsonResponse(books_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(books_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        Book.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def book_detail(request, prk):
    try:
        my_book = Book.objects.get(pk=prk)
    except Book.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NO_FOUND)

    # Retrive one record
    if request.method == 'GET':
        book_serializer = BookSerializer(my_book)
        return JsonResponse(book_serializer.data)

    # Update one record
    if request.method == 'PUT':
        book_data = JSONParser().parse(request)
        book_serializer = BookSerializer(my_book, data=book_data)
        if book_serializer.is_valid():
            book_serializer.save()
            return JsonResponse(book_serializer.data)
        return JsonResponse(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete one record
    if request.method == 'DELETE':
        my_book.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)