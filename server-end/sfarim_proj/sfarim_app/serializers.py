from rest_framework import serializers

from django.contrib.auth.models import User

from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email') 

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title')


# class BookSerializer(serializers.ModelSerializer):
class BookSerializer(serializers.HyperlinkedModelSerializer):
    category = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = Book
        fields = ('id', 'name', 'auther', 'category', 'book_description', 'universal_product_code', 'price', 'publisher')


class PersonalDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PersonalData
        fields = ('id', 'name', 'address', 'phone_number', 'second_phone_number', 'email')


class SupplierSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Supplier
        fields = ('id', 'personal_data')


class InventorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Inventory
        fields = ('id', 'book', 'amount_in_stack', 'supplier')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'personal_data', 'authorisation')