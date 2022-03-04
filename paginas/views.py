from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = "base.html"

class SobreView(TemplateView):
    template_name = "sobre.html"

class SiteView(TemplateView):
    template_name = "site.html"