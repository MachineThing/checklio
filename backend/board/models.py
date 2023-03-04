import json
from django.db import models

class Item(models.Model):
    checked    = models.BooleanField(default=False)
    value      = models.CharField(max_length=255)
    id         = models.AutoField(primary_key=True)

    def get_dict(self):
        return {
            "checked": self.checked,
            "id": self.id,
            "value": self.value
        }

    def __str__(self):
        # For the confused/uninitiated this is a ternary operator (or a one liner if statement)
        # https://docs.python.org/3.10/reference/expressions.html#conditional-expressions
        return f"{'🗹' if self.checked else '☐'} {self.value}"