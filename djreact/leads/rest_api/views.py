from .serializers import LeadSerializer
from ..models import Lead
from rest_framework import generics, mixins, permissions, response, status
import json


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
        instance = Lead.objects.get(pk=self.kwargs.get('pk'))
        serilazed_instance = LeadSerializer(instance=instance)
        self.destroy(request, *args, **kwargs)
        return response.Response({'detail': 'Successfully deleted', 'object': serilazed_instance.data, 'status': status.HTTP_200_OK})
