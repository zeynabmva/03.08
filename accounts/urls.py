from django.urls import path
from . import views


app_name = "accounts"

urlpatterns =[
    path('login/', views.LoginView.as_view(), name="login"),
    path('register_buyer/', views.RegisterView.as_view(), name="register1"),
    
]