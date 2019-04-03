from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter
from api.views import TaskViewSet, PropagateTaskViewSet


router = DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'propagate_tasks', PropagateTaskViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
