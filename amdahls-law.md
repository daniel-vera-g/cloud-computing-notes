# amdahls-law

> "Modell in der Informatik über die Beschleunigung von Programmen durch parallele Ausführung."

- Der parallelisierbare Part lässt sich durch mehr/bessere Hardware verschnellern
- Der nicht parallelisierbare Teil ist nur durch code optimierung verbesserbar

## Mathematische definition

1. p = der O(n) parallelisierbare Teil eines Programmes
1. s = der sequenzielle (nicht parallelisierbare) Teil des Programmes

Maximale Geschwindigkeitsgewinn durch:

> s+p / s+p/N bei N Cores/CPUs gegeben

- Das gilt selbst wenn der Kommunikationsoverhead etc. vernachlässigbar

## Quellen

- <http://tutorials.jenkov.com/java-concurrency/amdahls-law.html>
- <https://de.wikipedia.org/wiki/Amdahlsches_Gesetz>
