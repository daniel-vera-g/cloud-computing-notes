# cloud-skalierungsmöglichkeiten

1. **Vertikale** Skalierung(Scale Up):
   - Mehr Ressourcen zu einzelnen Knoten
   - (physikalische) Grenzen
2. **Horizontale** Skalierung(Scale Out):
   - Mehr Knoten zu System/Cluster
   - Skaliert (fast) ohne physikalische Grenzen
   - Genzen durch Parallelisierung

=> Kombination von beides!

## Beispiele

1. Vertikal: Hinzufügen von Ressourcen zu einem Knoten/Rechner des Systems.

   - Vergrößern v. Speicherplatz
   - Hinzufügen einer CPU

2. Horizontal: Steigerung der Leistung eines Systems durch das Hinzufügen zusätzlicher Rechner/Knoten

   - Load balancer, der die Last auf verschiedene Rechner verteilt
   - Verteilte Datenbank um die Last der DB Anfragen zu verringern
