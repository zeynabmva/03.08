from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

# import re
# from django.contrib.auth.hashers import make_password

User = get_user_model()

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ("username","password")

    def validate(self, attrs):
        username = attrs.get("username")
        user = User.objects.get(username = username)
        password = attrs.get('password')
        if not user:
            raise serializers.ValidationError({"error": "Email or password is wrong"})
        if not user.is_active:
            raise serializers.ValidationError({'error': 'User is not active'})
        
        if len(password) < 8:
            raise serializers.ValidationError({"error": "The length of password can be 8 as minimum"})
        
        return super().validate(attrs)
    
    def create(self, validated_data):
        username = validated_data.get("username")
        return User.objects.get(username = username)
    

    def to_representation(self, instance):
        repr_ =  super().to_representation(instance)
        token = RefreshToken.for_user(instance)
        repr_["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return repr_
    







class RegisterSerializer(serializers.ModelSerializer):
    password =serializers.CharField(write_only = True)


    class Meta:
        model = User
        fields = ("username", "email", "first_name", "last_name", "password")
        extra_kwargs = {
            "password": {"write_only": True}
        }

    

    def validate(self, attrs):
        password = attrs.get('password')
        username = attrs.get('username')

        if len(password) < 8:
            raise serializers.ValidationError({"error": "The length of password can be 8 as minimum"})
        if not username.isalnum():
            raise serializers.ValidationError({"error": "Username does not contains symbols"})
        if not username[0].isalpha() or not username[0].isupper():
            raise serializers.ValidationError({"error": "Username must be start with big letter"})
        return super().validate(attrs)
    

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(
            **validated_data
        )
        user.set_password(password)
        return user
    


    def to_representation(self, instance):
        repr_ =  super().to_representation(instance)
        token = RefreshToken.for_user(instance)
        repr_["tokens"] = {"refresh": str(token), "access": str(token.access_token)}
        return repr_





