from django.db import models

class item:
    self.checked    = models.BooleanField(default=False)
    self.value      = models.CharField(max_length=255)
    self.id         = models.AutoField(primary_key=True)