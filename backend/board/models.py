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
        return self.value