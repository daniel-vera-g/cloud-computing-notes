# mapReduce

> Problem: Verarbeitung großer Datenmengen in einem verteilten System

- Hohe I/O Last
- Orchestrierung
- System um nebenläufig, parallel Berechnungen auf mehrere Rechner zu verteilen

## MapReduce Vorgang

![](../../../attachments/mapReduce.png)

1. MAP Schritt:
   - Die Map Funktion wird für jedes key => value Paar einer Eingabeliste aufgerufen
   - Ausgabe ist eine neue Abbildung key‘ => Ergebnis
   - Dieses wird als Zwischenergebnis vom Map Schritt gesammelt
2. Reduce Schritt:
   - Die Zwischenergebnisse werden der reduce Funktion übergeben die daraus eine Ergebnisliste berechnet/aggregiert

### Input - Map - Reduce - Output example

![](../../../attachments/map-reduce-example.png)

- See: <https://dzone.com/articles/mapreduce-design-patterns-1>

## Sources

- <https://dzone.com/articles/mapreduce-design-patterns-1>
- <https://en.wikipedia.org/wiki/MapReduce>
