from .serializers import LeadSerializer
from ..models import Lead
from rest_framework import generics, mixins, permissions


class LeadAPIListView(mixins.CreateModelMixin, generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = []

    serializer_class = LeadSerializer
    queryset = Lead.objects.all()

    def post(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class LeadAPIRetrieveView(mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.RetrieveAPIView):
    permission_classes = []
    authentication_classes = []
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()

    def put(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
