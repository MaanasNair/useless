from uselessapi import UselessAPI
api = UselessAPI()

# Simple API call (JSON format)
response = api.encode(text="Hello, World!")
print(response.binary)

# API call that returns an image
image = api.implode(image="https://docs.wand-py.org/en/0.6.3/_images/inca_tern.jpg", amount=2.0)
with open("implode.png", "wb") as f:
    f.write(image.blob)
    f.close()

# parameter response is in useless.response.APIResponse class