import secrets

class item(dict):
    def __init__(self, value):
        self.checked = False
        self.id = secrets.token_urlsafe(16)
        self.value = value
        dict.__init__(self, checked=self.checked, id=self.id, value=self.value)