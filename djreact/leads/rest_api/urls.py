from django.urls import path
from . import views

urlpatterns = [
    path('', views.LeadAPIListView.as_view(), name='lead-listview'),
    path('<int:pk>/', views.LeadAPIRetrieveView.as_view(), name='lead-detailview'),
]
