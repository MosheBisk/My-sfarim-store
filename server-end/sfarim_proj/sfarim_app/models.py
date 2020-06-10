from django.db import models

class Category(models.Model):
    title   = models.CharField(max_length=25)

    def __str__(self):
        return self.title


class Book(models.Model):
    name                    = models.CharField(max_length=25)
    auther                  = models.CharField(max_length=25)
    category                = models.ManyToManyField(Category)
    book_description        = models.TextField(verbose_name='description')
    universal_product_code  = models.IntegerField(verbose_name='UPC')
    price                   = models.DecimalField(max_digits=6, decimal_places=2)
    publisher               = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class PersonalData(models.Model):
    name                    = models.CharField(max_length=25)
    address                 = models.TextField()
    phone_number            = models.CharField(max_length=10)
    second_phone_number     = models.CharField(max_length=10)
    email                   = models.EmailField()

    def __str__(self):
        return self.name


class Supplier(models.Model):
    personal_data   = models.ForeignKey(PersonalData, on_delete=models.CASCADE)

    def __str__(self):
        return self.personal_data


class Inventory(models.Model):
    book                = models.ForeignKey(Book, on_delete=models.CASCADE)
    amount_in_stack     = models.IntegerField()
    supplier            = models.ForeignKey(Supplier, on_delete=models.CASCADE)

    def __str__(self):
        return self.book.name


class User(models.Model):
    personal_data   = models.ForeignKey(PersonalData, on_delete=models.CASCADE)
    authorisation   = models.CharField(max_length=15)

    def __str__(self):
        return self.personal_data.name