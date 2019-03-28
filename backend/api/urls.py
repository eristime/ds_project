from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter
from api.views import TaskViewSet


router = DefaultRouter()
router.register(r'tasks', TaskViewSet)


task_list = TaskViewSet.as_view({
    'get': 'list',
    'post': 'create'
})


urlpatterns = [
    path('', include(router.urls)),
]
