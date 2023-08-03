from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import LoginSerializer, RegisterSerializer


User = get_user_model()


class LoginView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = LoginSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer