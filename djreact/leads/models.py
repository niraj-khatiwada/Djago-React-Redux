from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    message = models.TextField(blank=True, null=True)
    created_data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
