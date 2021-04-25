# cloud-resilienz und stabilität

1. Retrys / Timeouts: Beschränkt die Belegung von Ressourcen
2. „Circuit Breaker“: Verschwende keine Ressourcen
3. Handshaking /Flow Control:
   - Passt die Load an die Ressourceverfügbarkeit an
   - Client-Throtteling, Server controlled scheduling
4. 'Bulkheads'
   - Isoliert die Ressourcen um Seiteneffekte zu verringern:
     <http://www.javaworld.com/article/2824163/application-performance/stability-patterns-applied-in-a-restful-architecture.html>
