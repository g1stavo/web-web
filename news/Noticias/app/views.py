# -*- coding: utf-8 -*-

from django.http import JsonResponse
from django.http import Http404
from django.shortcuts import render

import feedparser, json

def index(request):
    return render(request, 'index.html')


def health(request):
    state = {"status": "UP"}
    return JsonResponse(state)


def handler404(request): 
    return render(request, '404.html', status=404)
    

def handler500(request):
    return render(request, '500.html', status=500)
    
    
def rss(request): 
	
	fp = feedparser.parse("http://feeds.bbci.co.uk/portuguese/rss.xml")

	lista_chaves  = ["Titulo", "Link", "Descricao"]
	lista_noticias = []
	
	for index, item in enumerate(fp.entries): 
	    lista_temp = [item.title, item.link, item.description]	
	    my_dict = dict(zip(lista_chaves, lista_temp))	
	    lista_noticias.append(my_dict)

	return JsonResponse(lista_noticias, safe=False)
     
 