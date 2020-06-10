from django.contrib import admin
from .models import *

admin.site.register([Book, Category, Inventory, PersonalData, Supplier, User])